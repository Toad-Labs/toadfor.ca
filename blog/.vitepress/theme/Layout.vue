<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="bg-white">
    <header>
      <div class="container">
        <h2>Blog</h2>
      </div>
    </header>

    <main v-if="enableHome">
      <div class="container">
        <Home />
      </div>
    </main>
    <main v-else>
      <div class="container">
        <Article />
      </div>
    </main>

    <footer>
      <div class="container">
        <h2>Site footer information</h2>
      </div>
    </footer>
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

import Home from './components/Home.vue'
import Article from './components/Article.vue'


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
    Home,
    Article
  }

}


</script>

<style>

</style>
