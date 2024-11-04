// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/image"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});