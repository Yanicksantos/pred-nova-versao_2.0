<template>
  <div class="accessibility-tools">
    <div ref="vlibrasHost" class="vlibras-host">
      <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const statusText = ref('Abra o VLibras ou use o leitor de site.')
const vlibrasHost = ref<HTMLElement | null>(null)
const vlibras = useVLibras(vlibrasHost)

onMounted(() => {
  const loadWidget = () => {
    void vlibras.load().catch(() => {
      statusText.value =
        vlibras.error.value || 'Nao foi possivel carregar o VLibras agora.'
    })
  }

  const idleWindow = window as Window & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
    cancelIdleCallback?: (handle: number) => void
  }

  let timeoutHandle: number | undefined
  let idleHandle: number | undefined

  if (idleWindow.requestIdleCallback) {
    idleHandle = idleWindow.requestIdleCallback(loadWidget, { timeout: 3200 })
  } else {
    timeoutHandle = window.setTimeout(loadWidget, 1800)
  }

  onUnmounted(() => {
    if (idleHandle && idleWindow.cancelIdleCallback) {
      idleWindow.cancelIdleCallback(idleHandle)
    }

    if (timeoutHandle) {
      window.clearTimeout(timeoutHandle)
    }
  })
})
</script>
