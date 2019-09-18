import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import 'typeface-nunito-sans/index.css'
import './assets/css/main.css'
import 'prismjs/themes/prism-tomorrow.css'

Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease',
})

export default ({ router }) => {
  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    const nprogress = require('nprogress')
    nprogress.configure({ showSpinner: false })
    require('nprogress/nprogress.css')

    const loaded = Object.create(null)

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start()
      }

      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      // Stop progress bar after entering page
      nprogress.done()
    })
  }
}
