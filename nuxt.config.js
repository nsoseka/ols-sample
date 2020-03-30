const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    linkActiveClass: 'is-active-link',
    linkExactActiveClass: 'is-active',
    base: '/ols-sample/'
  }
} : { router: {
  linkActiveClass: 'is-active-link',
  linkExactActiveClass: 'is-active',
  base: ""
  }
}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
  // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-confetti.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    'vue-sweetalert2/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 8000, // default: 3000
    host: 'localhost' // default: localhost
  },
  trailingSlash: true,
  ...routerBase
}
