// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/pred-design.css'],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Barlow Condensed': { wght: [700, 800] },
        'IBM Plex Sans': { wght: [400, 500, 600] },
        'IBM Plex Mono': { wght: [400, 500] },
      },
      subsets: ['latin', 'latin-ext'],
      display: 'optional',
      download: false,
      preload: false,
      preconnect: true,
      prefetch: true,
    }],
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'keywords',
          content: 'Inspeções, Preditiva, Manutenção, S3I, Sistema inteligente de Intervenção Industrial, Serviços Técnicos de Inspeção, MCI, Manutenção Condicionada à Inspeção, Serviços de Engenharia de Manutenção e Confiabilidade, Sistema Fixo de Termografia, SFT, Soluções Industriais',
        },
        { name: 'author', content: 'Pred Engenharia' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pred Engenharia' },
        {
          name: 'twitter:description',
          content: 'A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos, com foco na segurança, confiabilidade e produtividade das atividades.',
        },
        { name: 'twitter:image', content: 'https://www.predengenharia.com.br/30anos.webp' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.predengenharia.com.br/' },
      ],
    },
  },
})
