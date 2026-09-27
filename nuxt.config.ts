// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'material-theme-palenight',
        },
      },
    },
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxtjs/mdc',
    '@nuxtjs/plausible',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        name: 'Noto Sans',
        provider: 'google',
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        weights: [400, 600],
      },
      {
        name: 'Noto Serif',
        provider: 'google',
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        weights: [500, 600, 700],
      },
    ],
  },
  plausible: {
    ignoredHostnames: ['localhost'],
    domain: 'prpl.wtf',
    apiHost: 'https://plausible.prpl.wtf',
  },
  nitro: {
    prerender: {
      routes: [
        '/_ipx/s_512x522/img/polaroids/amsterdam.jpg',
        '/_ipx/s_512x522/img/polaroids/bells.jpg',
        '/_ipx/s_512x522/img/polaroids/blahaj.jpg',
        '/_ipx/s_512x522/img/polaroids/cavetown.jpg',
        '/_ipx/s_512x522/img/polaroids/desk-shark.jpg',
        '/_ipx/s_512x522/img/polaroids/dogs.jpg',
        '/_ipx/s_512x522/img/polaroids/eurostar-blahaj.jpg',
        '/_ipx/s_512x522/img/polaroids/flower.jpg',
        '/_ipx/s_512x522/img/polaroids/flower2.jpg',
        '/_ipx/s_512x522/img/polaroids/forest.jpg',
        '/_ipx/s_512x522/img/polaroids/fosdem-duck.jpg',
        '/_ipx/s_512x522/img/polaroids/fosdem-kotlin.jpg',
        '/_ipx/s_512x522/img/polaroids/fosdem-train.jpg',
        '/_ipx/s_512x522/img/polaroids/fosdem-vlc.jpg',
        '/_ipx/s_512x522/img/polaroids/fountain.jpg',
        '/_ipx/s_512x522/img/polaroids/nijntje-pleintje.jpg',
        '/_ipx/s_512x522/img/polaroids/pride-arcs.jpg',
        '/_ipx/s_512x522/img/polaroids/puppy.jpg',
        '/_ipx/s_512x522/img/polaroids/seagull.jpg',
        '/_ipx/s_512x522/img/polaroids/selfie.jpg',
        '/_ipx/s_512x522/img/polaroids/sharks.jpg',
        '/_ipx/s_512x522/img/polaroids/sky.jpg',
        '/_ipx/s_512x522/img/polaroids/snowman.jpg',
        '/_ipx/s_512x522/img/polaroids/strandbeest.jpg',
        '/_ipx/s_512x522/img/polaroids/train.jpg',
        '/_ipx/s_512x522/img/polaroids/waterfall.jpg',
        '/_ipx/s_512x522/img/polaroids/why2025-anderstorp.jpg',
        '/_ipx/s_512x522/img/polaroids/why2025-faxekondi.jpg',
        '/_ipx/s_512x522/img/polaroids/why2025-harmonica.jpg',
        '/_ipx/s_512x522/img/polaroids/why2025-village.jpg',
      ],
    },
  },
})
