<template>
  <div class="accessibility-tools" :class="{ open: isOpen }">
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
const isOpen = ref(false)
const speechSupported = ref(false)
const statusText = ref('Abra o VLibras ou use o leitor de site.')
const voices = ref<SpeechSynthesisVoice[]>([])
const vlibrasHost = ref<HTMLElement | null>(null)
const vlibras = useVLibras(vlibrasHost)


onMounted(() => {
  void vlibras.load().catch(() => {
    statusText.value =
      vlibras.error.value || 'Não foi possível carregar o VLibras agora.'
  })
})



function loadVoices() {
  if (!speechSupported.value) return
  voices.value = window.speechSynthesis.getVoices()
}
</script>

