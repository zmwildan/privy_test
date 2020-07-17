export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "portal-vue/nuxt"
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  proxy: {
    "/api": {
      target: "http://pretest-qa.dcidev.id/api/v1/",
      pathRewrite: {
        "^/api": "/"
      },
      changeOrigin: true
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    baseURL: "http://pretest-qa.dcidev.id/api/v1/"
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "api/oauth/sign_in",
            method: "post",
            propertyName: "data.user.access_token"
          },
          user: {
            url: "api/profile/me",
            method: "get",
            propertyName: "data"
          },
          logout: false
        }
      }
    }
  }
};
