import type { Ref } from 'vue'

type VLibrasWindow = Window & {
  VLibras?: {
    Widget: new (source: string) => unknown
  }
  __predVLibrasLoaded?: boolean
  plugin?: unknown
}

const VLibrasScriptUrl = 'https://vlibras.gov.br/app/vlibras-plugin.js'
const VLibrasAppUrl = 'https://vlibras.gov.br/app'

const isReady = ref(false)
const isLoading = ref(false)
const error = ref<string | null>(null)

let loadPromise: Promise<void> | null = null

export function useVLibras(host?: Ref<HTMLElement | null>) {
  if (import.meta.client) {
    useHead({
      script: [
        {
          key: 'pred-vlibras-plugin',
          src: VLibrasScriptUrl,
          defer: true,
          tagPosition: 'bodyClose',
        },
      ],
    })
  }

  async function load() {
    if (import.meta.server) return
    if (isReady.value) return
    if (loadPromise) return loadPromise

    isLoading.value = true
    error.value = null

    loadPromise = waitForWidget()
      .then(async () => {
        const vlibrasWindow = window as VLibrasWindow

        if (!vlibrasWindow.VLibras?.Widget) {
          throw new Error('VLibras indisponivel.')
        }

        if (!vlibrasWindow.__predVLibrasLoaded) {
          const previousOnload = window.onload

          new vlibrasWindow.VLibras.Widget(VLibrasAppUrl)
          vlibrasWindow.__predVLibrasLoaded = true

          runDeferredVLibrasOnload(previousOnload)
        } else if (!isVLibrasHostReady()) {
          runDeferredVLibrasOnload()
        }

        await waitForVLibrasHostReady()
        isReady.value = true
      })
      .catch((reason) => {
        loadPromise = null
        error.value = reason instanceof Error
          ? reason.message
          : 'Nao foi possivel carregar o VLibras.'
        throw reason
      })
      .finally(() => {
        isLoading.value = false
      })

    return loadPromise
  }

  async function open() {
    await load()
    await nextTick()
    await waitForAccessButton()
    await waitForVLibrasHostReady()

    const accessButton = getAccessButton()
    const pluginWrapper = getPluginWrapper()

    if (!accessButton) {
      throw new Error('Botao do VLibras nao encontrado.')
    }

    if (!pluginWrapper?.classList.contains('active')) {
      accessButton.click()
    }

    accessButton.focus()
    await waitForPluginOpen()
  }

  return {
    isReady: readonly(isReady),
    isLoading: readonly(isLoading),
    error: readonly(error),
    load,
    open,
  }

  function getAccessButton() {
    return host?.value?.querySelector<HTMLElement>('[vw-access-button]')
      || document.querySelector<HTMLElement>('[vw-access-button]')
  }

  function getPluginWrapper() {
    return host?.value?.querySelector<HTMLElement>('[vw-plugin-wrapper]')
      || document.querySelector<HTMLElement>('[vw-plugin-wrapper]')
  }

  function isVLibrasHostReady() {
    const accessButton = getAccessButton()
    const pluginWrapper = getPluginWrapper()

    return Boolean(
      accessButton?.querySelector('.vp-access-button')
      && pluginWrapper?.querySelector('[vp]')
    )
  }

  function waitForAccessButton(timeout = 4000) {
    return new Promise<void>((resolve, reject) => {
      const startedAt = Date.now()

      const tick = () => {
        if (getAccessButton()) {
          resolve()
          return
        }

        if (Date.now() - startedAt > timeout) {
          reject(new Error('Botao do VLibras nao encontrado.'))
          return
        }

        window.setTimeout(tick, 80)
      }

      tick()
    })
  }

  function waitForVLibrasHostReady(timeout = 6000) {
    return new Promise<void>((resolve, reject) => {
      const startedAt = Date.now()

      const tick = () => {
        if (isVLibrasHostReady()) {
          resolve()
          return
        }

        if (Date.now() - startedAt > timeout) {
          reject(new Error('Tempo esgotado ao preparar o VLibras.'))
          return
        }

        window.setTimeout(tick, 80)
      }

      tick()
    })
  }

  function waitForPluginOpen(timeout = 10000) {
    return new Promise<void>((resolve, reject) => {
      const startedAt = Date.now()

      const tick = () => {
        if (getPluginWrapper()?.classList.contains('active') && (window as VLibrasWindow).plugin) {
          resolve()
          return
        }

        if (Date.now() - startedAt > timeout) {
          reject(new Error('Tempo esgotado ao abrir o avatar do VLibras.'))
          return
        }

        window.setTimeout(tick, 120)
      }

      tick()
    })
  }
}

function runDeferredVLibrasOnload(previousOnload?: GlobalEventHandlers['onload']) {
  if (document.readyState !== 'complete' || !window.onload || window.onload === previousOnload) {
    return
  }

  window.onload.call(window, new Event('load'))
}

function waitForWidget(timeout = 10000) {
  return new Promise<void>((resolve, reject) => {
    const startedAt = Date.now()

    const tick = () => {
      const vlibrasWindow = window as VLibrasWindow

      if (vlibrasWindow.VLibras?.Widget) {
        resolve()
        return
      }

      if (Date.now() - startedAt > timeout) {
        reject(new Error('Tempo esgotado ao carregar o VLibras.'))
        return
      }

      window.setTimeout(tick, 80)
    }

    tick()
  })
}
