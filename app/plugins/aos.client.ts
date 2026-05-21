import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (process?.client) {
    nuxtApp.hook('app:suspense:resolve', () => {
      AOS.init({
        // Configurações globais (opcional)
        //once: true, // Animação ocorre apenas uma vez
        duration: 800, // Duração em ms
        easing: 'ease-in-out',
      })
    })
  }
})