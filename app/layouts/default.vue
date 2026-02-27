<template>
  <div v-bind="$attrs">
    <header class="sticky top-0 z-50">
      <Navigation_header />
    </header>

    <slot />

    <footer>
      <LazyNavigation_footer />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Navigation_header from '~/components/Navigation_header.vue'

// Disable automatic attribute inheritance
defineOptions({
  inheritAttrs: false
})
</script>
