import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import sunshine from 'vue3-sunshine-ui'
import 'vue3-sunshine-ui/dist/es/index.css'
import './styles/index.css'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    
    app.use(sunshine)
    registerComponents(app)
  }
}
