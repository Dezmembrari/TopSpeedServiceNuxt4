<script setup lang="ts">
// SEO & Meta
useSeoMeta({
  title: 'Service Autorizat RAR & Constatări Daune Top Speed Service', // This has 59 characters, which is optimal for SEO
  titleTemplate: null,
  description: 'Service auto premium în Bragadiru: vopsitorie, tinichigerie și mecanică. Oferim constatare daune, decontare RCA/CASCO, tractare și mașină la schimb gratuită.',
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
    <LazyHomeInsuranceSection />

    <!-- <LazyHomeGallerySection /> -->

    <LazyHomeStepsAltSection />

    <LazyHomeContactSection />

    <LazyHomeAboutSection />

    <FloatingActionBar />
  </div>
</template>
