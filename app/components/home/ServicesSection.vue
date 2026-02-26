<script setup lang="ts">
const services = [
  {
    id: 'masina',
    title: 'Mașină la schimb',
    description: 'Nu rămâneți pieton! Vă oferim autoturism la schimb pe toată durata reparației, livrat gratuit la adresa dorită.',
    image: '/pexels.webp',
    alt: 'Masina la schimb gratuit service auto bragadiru',
    icon: 'i-line-md-confirm-circle'
  },
  {
    id: 'platforma',
    title: 'Transport Gratuit',
    description: 'Mașina nu se deplasează? O ridicăm noi cu platforma, fără costuri suplimentare, din locul indicat de dumneavoastră.',
    image: '/mercedes-platforma.webp',
    alt: 'Platforma auto gratuita bragadiru',
    icon: 'i-line-md-speedometer-loop'
  },
  {
    id: 'dosar',
    title: 'Dosar Daună Rapid',
    description: 'Zero birocrație pentru tine. Ne ocupăm integral de întocmirea și depunerea dosarului de daună la asigurator.',
    image: '/hands.webp',
    alt: 'Intocmire dosar dauna auto',
    icon: 'i-line-md-document-list'
  }
]

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="services"
    class="py-16 md:py-24 bg-gray-100 dark:bg-slate-900 relative overflow-hidden"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-700/5 via-transparent to-transparent pointer-events-none" />

    <UContainer class="relative z-10">
      <div class="text-center max-w-4xl mx-auto mb-16 px-4">
        <div class="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full border-2 border-green-700/30 bg-green-50 dark:bg-green-900/20 shadow-[0_0_15px_rgba(37,108,23,0.2)]">
          <h3 class="text-xl md:text-2xl font-black text-green-700 uppercase tracking-tight">
            Gratuit prin Asigurare
          </h3>
        </div>

        <h2 class="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white mt-2">
          Beneficii <span class="text-blue-700">Premium</span> Incluse
        </h2>
        <p class="text-gray-900 dark:text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto font-medium">
          Dacă reparați autoturismul la noi pe RCA sau CASCO, pachetul de mobilitate este gratuit.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="group bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-700/10 border border-gray-100 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
        >
          <div class="relative h-64 overflow-hidden shrink-0">
            <NuxtImg
              :src="service.image"
              :alt="service.alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              format="avif"
              quality="80"
              sizes="90vw md:33vw lg:400px"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <div class="w-20 h-20 rounded-2xl bg-blue-700 flex items-center justify-center mb-3 shadow-lg border border-white/20">
                <UIcon
                  :name="service.icon"
                  mode="svg"
                  class="w-12 h-12 text-white"
                />
              </div>
              <h3 class="text-2xl font-bold">
                {{ service.title }}
              </h3>
            </div>
          </div>

          <div class="p-8 flex flex-col flex-1">
            <p class="text-gray-900 dark:text-gray-200 mb-8 leading-relaxed text-lg font-medium">
              {{ service.description }}
            </p>
            <div class="mt-auto">
              <UButton
                block
                variant="ghost"
                color="primary"
                class="text-lg py-3 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-colors"
                @click="scrollToContact"
              >
                Solicită Serviciul
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right" />
                </template>
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
