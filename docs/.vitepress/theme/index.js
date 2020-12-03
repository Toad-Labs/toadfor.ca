// App styles
import './styles/main.css'

// Default layout for the app
import Layout from './Layout.vue'

// There is currently an issue rendering custom 404 pages
// import NotFound from './NotFound.vue'

export default {
  Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}
