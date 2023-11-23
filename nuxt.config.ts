// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  plugins: [
    './plugins/vuex-persistedstate',
    './plugins/axios'
  ], 
  ssr: true,
  target: 'server',
  modules: [
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
})
