// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-vuefire"],
  vuefire: {
    config: {
      apiKey: "AIzaSyD-1T942uz6QsRK-kimJEZ9xVcWleRuYFI",
      authDomain: "freelance-time-805b9.firebaseapp.com",
      projectId: "freelance-time-805b9",
      storageBucket: "freelance-time-805b9.appspot.com",
      messagingSenderId: "678473572150",
      appId: "1:678473572150:web:b37bb10136a4696a29dd97",
      measurementId: "G-926F3LQM35",
    },
  },
  routeRules: {
    "/*": { isr: true },
  },
});
