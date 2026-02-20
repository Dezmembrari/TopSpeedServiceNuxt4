<script setup lang="ts">
// SEO & Meta
useSeoMeta({
  title: 'Top Speed Service | Vopsitorie, Tinichigerie & Mecanică Auto Bragadiru',
  description: 'Service auto complet în Bragadiru: vopsitorie, tinichigerie, mecanică și centru de daune.',
  ogTitle: 'Top Speed Service Bragadiru - Service Auto și Centru Daune',
  ogImage: 'https://topspeedservice.eu/hero.webp',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: { lang: 'ro', class: 'scroll-smooth' },
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
})
</script>

<template>
  <div class="min-h-screen font-sans bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 selection:bg-green-700 selection:text-white pb-0 md:pb-0">
    <HomeHeroSection />
    <HomeServicesAltSection />
    <div class="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <LazyHomeInsuranceSection />
    </div>
    <div class="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <LazyHomeGallerySection />
    </div>
    <div class="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <LazyHomeStepsAltSection />
    </div>
    <div class="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <LazyHomeContactSection />
    </div>
    <div class="[content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <LazyHomeAboutSection />
    </div>
    <FloatingActionBar />
  </div>
</template>
