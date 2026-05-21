<template>
  <div class="accessibility-tools" :class="{ open: isOpen }">
    <button
      class="accessibility-toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="accessibility-panel"
      aria-label="Abrir ferramentas de acessibilidade"
      @click="isOpen = !isOpen"
    >
      <span class="mono">A11Y</span>
      <strong>Acessibilidade</strong>
    </button>

    <div
      v-show="isOpen"
      id="accessibility-panel"
      class="accessibility-panel"
      role="region"
      aria-label="Ferramentas de acessibilidade"
    >
      <div class="accessibility-head">
        <div>
          <span class="mono">RECURSOS DO SITE</span>
          <h2>Leitura e Libras</h2>
        </div>
        <button type="button" aria-label="Fechar acessibilidade" @click="isOpen = false">×</button>
      </div>

      <div class="accessibility-actions">
        <button type="button" class="accessibility-action primary" @click="openVLibras">
          <span>VL</span>
          <strong>VLibras</strong>
          <small>Abrir avatar tradutor em Libras</small>
        </button>

        <button type="button" class="accessibility-action" :disabled="!speechSupported" @click="readPage">
          <span>▶</span>
          <strong>{{ isSpeaking ? 'Reiniciar leitura' : 'Ler página' }}</strong>
          <small>Ouvir o conteúdo principal</small>
        </button>

        <button type="button" class="accessibility-action" :disabled="!speechSupported" @click="readSelection">
          <span>TXT</span>
          <strong>Ler seleção</strong>
          <small>Selecione um trecho e clique aqui</small>
        </button>
      </div>

      <div class="accessibility-reader-controls">
        <button type="button" :disabled="!isSpeaking" @click="togglePause">
          {{ isPaused ? 'Continuar' : 'Pausar' }}
        </button>
        <button type="button" :disabled="!isSpeaking" @click="stopReading">Parar</button>
      </div>

      <p class="accessibility-status" aria-live="polite">{{ statusText }}</p>
      <p class="accessibility-help">
        Para usar o avatar, selecione um texto da página e abra o VLibras. A tradução é feita pelo painel oficial do widget.
      </p>
    </div>

    <div class="vlibras-host">
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
type VLibrasWindow = Window & {
  VLibras?: {
    Widget: new (source: string) => unknown
  }
  __predVLibrasLoaded?: boolean
}

const isOpen = ref(false)
const isSpeaking = ref(false)
const isPaused = ref(false)
const speechSupported = ref(false)
const statusText = ref('Abra o VLibras ou use o leitor de site.')
const voices = ref<SpeechSynthesisVoice[]>([])

let currentUtterance: SpeechSynthesisUtterance | null = null
let vlibrasReadyPromise: Promise<void> | null = null

onMounted(() => {
  speechSupported.value = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
  loadVoices()
  void ensureVLibras().catch(() => {
    statusText.value = 'Não foi possível carregar o VLibras agora.'
  })

  if (speechSupported.value) {
    window.speechSynthesis.onvoiceschanged = loadVoices
  } else {
    statusText.value = 'Seu navegador não oferece suporte ao leitor de site.'
  }
})

onBeforeUnmount(() => {
  stopReading()

  if (speechSupported.value) {
    window.speechSynthesis.onvoiceschanged = null
  }
})

function loadVoices() {
  if (!speechSupported.value) return
  voices.value = window.speechSynthesis.getVoices()
}

function ensureVLibras() {
  const vlibrasWindow = window as VLibrasWindow

  if (vlibrasWindow.__predVLibrasLoaded) return Promise.resolve()
  if (vlibrasReadyPromise) return vlibrasReadyPromise

  vlibrasReadyPromise = new Promise<void>((resolve, reject) => {
    const initWidget = () => {
      if (!vlibrasWindow.VLibras?.Widget) return false

      if (!vlibrasWindow.__predVLibrasLoaded) {
        new vlibrasWindow.VLibras.Widget('https://vlibras.gov.br/app')
        vlibrasWindow.__predVLibrasLoaded = true
      }

      window.setTimeout(resolve, 350)
      return true
    }

    if (initWidget()) return

    const existingScript = document.getElementById('vlibras-plugin')

    if (existingScript) {
      existingScript.addEventListener('load', () => {
        if (!initWidget()) reject(new Error('VLibras indisponível.'))
      }, { once: true })
      existingScript.addEventListener('error', () => reject(new Error('Falha ao carregar VLibras.')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = 'vlibras-plugin'
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
    script.async = true
    script.onload = () => {
      if (!initWidget()) reject(new Error('VLibras indisponível.'))
    }
    script.onerror = () => reject(new Error('Falha ao carregar VLibras.'))
    document.body.appendChild(script)
  })

  return vlibrasReadyPromise
}

async function openVLibras() {
  statusText.value = 'Carregando o avatar do VLibras.'

  try {
    await ensureVLibras()
    const accessButton = document.querySelector<HTMLElement>('[vw-access-button]')

    if (!accessButton) {
      throw new Error('Botão do VLibras não encontrado.')
    }

    accessButton.click()
    accessButton.focus()
    statusText.value = 'VLibras aberto. Selecione um texto da página para ver a tradução em Libras.'
  } catch {
    statusText.value = 'Não foi possível abrir o VLibras. Verifique a conexão com vlibras.gov.br e tente novamente.'
  }
}

function getMainText() {
  const main = document.querySelector('main')
  const source = main?.cloneNode(true) as HTMLElement | null

  if (!source) return ''

  source
    .querySelectorAll('script, style, nav, header, footer, form, button, input, select, textarea, [aria-hidden="true"], .accessibility-tools')
    .forEach((node) => node.remove())

  return normalizeText(source.innerText)
}

function normalizeText(text: string) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/([.!?])\s+/g, '$1 ')
    .trim()
    .slice(0, 12000)
}

function readPage() {
  const text = getMainText()

  if (!text) {
    statusText.value = 'Não encontrei texto principal para leitura nesta página.'
    return
  }

  speak(text, 'Lendo o conteúdo principal da página.')
}

function readSelection() {
  const selectedText = normalizeText(window.getSelection()?.toString() || '')

  if (!selectedText) {
    statusText.value = 'Selecione um trecho do texto antes de usar esta opção.'
    return
  }

  speak(selectedText, 'Lendo o trecho selecionado.')
}

function speak(text: string, status: string) {
  if (!speechSupported.value) {
    statusText.value = 'Seu navegador não oferece suporte ao leitor de site.'
    return
  }

  stopReading()

  const utterance = new SpeechSynthesisUtterance(text)
  const ptVoice = voices.value.find((voice) => voice.lang.toLowerCase().startsWith('pt-br'))
    || voices.value.find((voice) => voice.lang.toLowerCase().startsWith('pt'))

  if (ptVoice) utterance.voice = ptVoice

  utterance.lang = ptVoice?.lang || 'pt-BR'
  utterance.rate = 0.95
  utterance.pitch = 1
  utterance.onend = () => {
    isSpeaking.value = false
    isPaused.value = false
    currentUtterance = null
    statusText.value = 'Leitura concluída.'
  }
  utterance.onerror = () => {
    isSpeaking.value = false
    isPaused.value = false
    currentUtterance = null
    statusText.value = 'Não foi possível concluir a leitura.'
  }

  currentUtterance = utterance
  isSpeaking.value = true
  isPaused.value = false
  statusText.value = status
  window.speechSynthesis.speak(utterance)
}

function togglePause() {
  if (!speechSupported.value || !isSpeaking.value) return

  if (isPaused.value) {
    window.speechSynthesis.resume()
    isPaused.value = false
    statusText.value = 'Leitura retomada.'
    return
  }

  window.speechSynthesis.pause()
  isPaused.value = true
  statusText.value = 'Leitura pausada.'
}

function stopReading() {
  if (!speechSupported.value) return

  window.speechSynthesis.cancel()
  currentUtterance = null
  isSpeaking.value = false
  isPaused.value = false
}
</script>

<style scoped>
.accessibility-tools {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 1200;
  font-family: var(--font-body);
  color: var(--ink-800);
}

.accessibility-toggle {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 46px;
  padding: 12px 16px;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 4px;
  background: var(--ink-800);
  color: #fff;
  box-shadow: 0 14px 34px rgba(6,15,28,0.32);
  cursor: pointer;
}

.accessibility-toggle .mono {
  display: grid;
  place-items: center;
  min-width: 42px;
  height: 24px;
  border-radius: 2px;
  background: var(--red);
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.12em;
}

.accessibility-toggle strong {
  font-size: 14px;
  font-weight: 600;
}

.accessibility-panel {
  width: min(360px, calc(100vw - 40px));
  margin-bottom: 10px;
  padding: 18px;
  border: 1px solid var(--ink-line-strong);
  border-radius: 6px;
  background: rgba(10,22,40,0.96);
  color: #fff;
  box-shadow: 0 24px 64px rgba(6,15,28,0.42);
  backdrop-filter: blur(14px);
}

.accessibility-tools.open {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}

.accessibility-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.accessibility-head span {
  display: block;
  color: var(--cyan);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.accessibility-head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 26px;
  line-height: 1;
  text-transform: uppercase;
}

.accessibility-head button {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 4px;
  background: transparent;
  color: #fff;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}

.accessibility-actions {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.accessibility-action {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 4px 12px;
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  background: rgba(255,255,255,0.05);
  color: #fff;
  text-align: left;
  cursor: pointer;
}

.accessibility-action:hover {
  border-color: rgba(0,194,224,0.42);
  background: rgba(0,194,224,0.08);
}

.accessibility-action:disabled {
  opacity: 0.48;
  cursor: not-allowed;
}

.accessibility-action > span {
  grid-row: span 2;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 4px;
  background: rgba(255,255,255,0.09);
  color: var(--cyan);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
}

.accessibility-action.primary > span {
  background: var(--red);
  color: #fff;
}

.accessibility-action strong {
  align-self: end;
  font-size: 14px;
  font-weight: 600;
}

.accessibility-action small {
  align-self: start;
  color: rgba(255,255,255,0.62);
  font-size: 12px;
  line-height: 1.35;
}

.accessibility-reader-controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 12px;
}

.accessibility-reader-controls button {
  padding: 10px 12px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 4px;
  background: transparent;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}

.accessibility-reader-controls button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.accessibility-status {
  min-height: 18px;
  margin: 12px 0 0;
  color: rgba(255,255,255,0.62);
  font-size: 12px;
  line-height: 1.45;
}

.accessibility-help {
  margin: 8px 0 0;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.52);
  font-size: 11.5px;
  line-height: 1.45;
}

.vlibras-host :deep([vw-access-button]) {
  bottom: 96px !important;
  right: 20px !important;
}

@media (max-width: 640px) {
  .accessibility-tools {
    left: 14px;
    right: 14px;
    bottom: 14px;
  }

  .accessibility-toggle {
    width: 100%;
    justify-content: center;
  }

  .accessibility-panel {
    width: 100%;
  }

  .vlibras-host :deep([vw-access-button]) {
    bottom: 86px !important;
    right: 14px !important;
  }
}
</style>
