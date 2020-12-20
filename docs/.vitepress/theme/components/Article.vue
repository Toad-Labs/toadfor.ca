<template>
  <div class="container">
    <div class="sm:w-4/5 md:w-2/3 xl:w-1/2 2xl:w-1/2 mx-auto">

      <h1>{{ page.title }}</h1>

      <div v-if="enableFeatureImage">
        <img
          class="w-full h-52 object-cover rounded-xl"
          :src="page.frontmatter.featureSrc"
          :alt="page.frontmatter.featureAlt || ''" />
      </div>




      <Content/><!-- make sure to include markdown outlet -->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { usePageData } from 'vitepress';

export default {
  setup() {

    // generic state
    const page = usePageData();

    // Check if a feature image src is set
    const enableFeatureImage = !!page.value.frontmatter.featureSrc;

    return {
      page,
      enableFeatureImage
    }
  }
}
</script>

<style>

</style>
