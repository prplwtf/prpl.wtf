// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxtjs/mdc',
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
})