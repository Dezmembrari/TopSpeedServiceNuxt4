<script setup lang="ts">
const aboutImages = [
  { src: '/semercedesw118.jpeg', alt: 'Mercedes W118 SE' },
  { src: '/service.jpeg', alt: 'Top Speed Service' },
  { src: '/bmwi8.jpeg', alt: 'BMW i8' },
  { src: '/hero.webp', alt: 'Mecanica Generala' }
]
</script>

<template>
  <section
    id="despre"
    class="py-16 md:py-24 bg-gray-100 dark:bg-slate-950"
  >
    <UContainer>
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
            Experiență și Tehnologie
          </h2>
          <div class="w-20 md:w-24 h-2 bg-blue-700 mb-6 md:mb-8 rounded-full" />
          <div class="prose dark:prose-invert text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            <p class="mb-6">
              Din 2001, <strong class="text-blue-700">Top Speed Service</strong> a evoluat constant, adaptându-se celor mai recente tehnologii și standarde din industrie.
            </p>
            <p class="mb-6">
              Astăzi, suntem un service auto modern, dotat cu echipamente de ultimă generație și o echipă de specialiști pasionați. Oferim o gamă completă de servicii, de la întreținerea periodică până la reparațiile complexe de tinichigerie și vopsitorie.
            </p>
            <ul class="space-y-4 mt-8">
              <li class="flex items-center gap-3 font-bold text-gray-900 dark:text-white">
                <UIcon
                  name="i-line-md-confirm-circle"
                  class="text-green-600 w-8 h-8"
                /> Cabine de vopsit profesionale
              </li>
              <li class="flex items-center gap-3 font-bold text-gray-900 dark:text-white">
                <UIcon
                  name="i-line-md-confirm-circle"
                  class="text-green-600 w-8 h-8"
                /> Laborator propriu de vopsele
              </li>
              <li class="flex items-center gap-3 font-bold text-gray-900 dark:text-white">
                <UIcon
                  name="i-line-md-confirm-circle"
                  class="text-green-600 w-8 h-8"
                /> Piese originale cu garanție
              </li>
            </ul>
          </div>
        </div>

        <div class="md:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
          <div class="space-y-4 md:space-y-6 mt-8 md:mt-12">
            <NuxtImg
              v-for="(img, idx) in aboutImages.slice(0, 2)"
              :key="idx"
              :src="img.src"
              :alt="img.alt"
              class="rounded-2xl md:rounded-3xl shadow-xl w-full h-40 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              preset="thumbnail"
            />
          </div>
          <div class="space-y-4 md:space-y-6">
            <NuxtImg
              v-for="(img, idx) in aboutImages.slice(2, 4)"
              :key="idx"
              :src="img.src"
              :alt="img.alt"
              class="rounded-2xl md:rounded-3xl shadow-xl w-full h-40 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              preset="thumbnail"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
