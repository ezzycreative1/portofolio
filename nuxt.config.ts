// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  router: {
    base: '/',
    routes: [
      {
        name: 'home',
        path: '/',
        component: 'pages/index.vue',
      },
      {
        name: 'about',
        path: '/about',
        component: 'components/About.vue',
      }
    ],
  },
})