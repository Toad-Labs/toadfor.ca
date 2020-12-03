<!-- .vitepress/theme/Layout.vue -->
<template>
  <div>

    <!-- Header Component -->
    <Header />

    <main>
      <!-- Display the home if we're at the index page -->
      <Home v-if="enableHome" />

      <!-- Otherwise display a blog article -->
      <Article v-else />
    </main>

    <Footer />

  </div>
</template>

<script lang="ts">
import {
  computed,
  ref,
  reactive } from 'vue'
import {
  useRoute,
  useSiteData,
  usePageData,
  useSiteDataByRoute
} from 'vitepress'

import Article from './components/Article.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'


export default {

  setup() {

    // generic state
    const route = useRoute()

    // home
    const enableHome = computed(() => !!route.data.frontmatter.home)

    // expose to template
    return {
      enableHome
    }
  },

  components: {
    Article,
    Footer,
    Header,
    Home,
  }

}


</script>
