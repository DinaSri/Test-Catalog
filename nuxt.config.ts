// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true, // Enable Server-Side Rendering
  modules: [
    '@pinia/nuxt', // Include Pinia for state management
  ],
  css: ['~/styles/main.scss'],
})
