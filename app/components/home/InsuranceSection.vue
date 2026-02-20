<script setup lang="ts">
const insurances = [

  { id: 'groupama', name: 'Groupama', logo: 'https://cdn.brandfetch.io/id4994uob8/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1769160580337' },
  { id: 'allianz', name: 'Allianz-Țiriac', logo: 'https://cdn.brandfetch.io/idyUFSjq7q/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667665868093' },
  { id: 'generali', name: 'Generali', logo: 'https://cdn.brandfetch.io/idv49vobo0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1742876580673' },
  { id: 'grawe', name: 'Grawe', logo: 'https://cdn.brandfetch.io/idzfTQucSY/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1763645852906' },
  // Omniasig and Asirom are part of VIG (Vienna Insurance Group)
  { id: 'omniasig', name: 'Omniasig', logo: 'https://cdn.brandfetch.io/idrtuyPDoR/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667853175572' },
  { id: 'asirom', name: 'Asirom', logo: 'https://cdn.brandfetch.io/idzU_WZ3qX/w/196/h/67/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B' },
  { id: 'hellas', name: 'Hellas Direct', logo: 'https://cdn.brandfetch.io/idSmBVCcxu/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1762490618750' }, // Will fallback to text automatically
  { id: 'axeria', name: 'Axeria Iard', logo: 'https://cdn.brandfetch.io/ide08T7c0y/w/1996/h/884/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1763645922605' } // Will fallback to text automatically

]

const benefits = [
  { icon: 'i-heroicons-document-check', text: 'Decontare Directă' },
  { icon: 'i-heroicons-shield-check', text: 'Piese Originale Garantate' },
  { icon: 'i-heroicons-document-text', text: 'Deschidere Dosar Daună' },
  { icon: 'i-heroicons-clock', text: 'Prioritate la Reparație' }
]

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

// ✅ Tracking the load state of external logos
const loadedImages = ref<Record<string, boolean>>({})

const onImageLoad = (id: string) => {
  loadedImages.value[id] = true
}
</script>

<template>
  <section
    id="asigurari"
    class="py-16 md:py-24 bg-white dark:bg-[#0a0f1a] relative overflow-hidden transition-colors duration-300 border-y border-gray-100 dark:border-white/5"
  >
    <div class="absolute top-1/2 left-0 md:left-1/4 -translate-y-1/2 w-125 h-125 bg-blue-500/20 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div class="absolute top-1/2 right-0 md:right-1/4 -translate-y-1/2 w-100 h-100 bg-green-500/15 dark:bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

    <UContainer class="relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-sm mb-6 border border-blue-100 dark:border-blue-800/30 shadow-sm">
            <UIcon
              name="i-heroicons-check-badge-solid"
              class="w-5 h-5"
            />
            <span>RCA & CASCO Acceptate</span>
          </div>

          <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Reparăm pe <span class="text-blue-700 dark:text-blue-500">Asigurare</span>,<br> fără bătăi de cap.
          </h2>

          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
            Ai avut un accident? Nu trebuie să îți faci griji pentru birocrație sau costuri ascunse. Noi ne ocupăm integral de relația cu inspectorii de daună.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            <div
              v-for="benefit in benefits"
              :key="benefit.text"
              class="flex items-center gap-3 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm p-3 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div class="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 border border-gray-100 dark:border-slate-700">
                <UIcon
                  :name="benefit.icon"
                  class="w-6 h-6 text-green-600 dark:text-green-500"
                />
              </div>
              <span class="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">{{ benefit.text }}</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <UButton
              size="xl"
              class="bg-green-600 hover:bg-green-500 text-white font-bold px-8 shadow-lg shadow-green-900/20 w-full sm:w-auto"
              icon="i-heroicons-phone"
              to="tel:+40788990011"
            >
              Sună pentru Constatare
            </UButton>
            <UButton
              size="xl"
              variant="ghost"
              color="neutral"
              class="font-semibold dark:text-blue-300 text-blue-700 hover:bg-white dark:hover:bg-slate-800 w-full sm:w-auto bg-gray-50 dark:bg-transparent border border-transparent dark:border-slate-800"
              @click="scrollToContact"
            >
              Trimite-ne detalii
            </UButton>
          </div>
        </div>

        <div class="flex-1 w-full max-w-lg mx-auto">
          <div class="bg-white/60 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-slate-800 shadow-xl relative">
            <h3 class="text-center font-bold text-gray-600 dark:text-gray-300 text-sm uppercase tracking-widest mb-6">
              Procesăm dosare de daună pentru:
            </h3>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div
                v-for="insurance in insurances"
                :key="insurance.id"
                class="aspect-3/2 bg-white rounded-xl border border-gray-200 dark:border-gray-300 flex flex-col items-center justify-center p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
              >
                <template v-if="insurance.logo">
                  <div
                    v-if="!loadedImages[insurance.id]"
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-heroicons-arrow-path"
                      class="w-5 h-5 text-gray-300 animate-spin"
                    />
                  </div>

                  <NuxtImg
                    :src="insurance.logo"
                    :alt="`Siglă asigurare ${insurance.name}`"
                    width="120"
                    height="80"
                    class="max-w-full max-h-full object-contain transition-opacity duration-500"
                    :class="{
                      'opacity-0': !loadedImages[insurance.id],
                      'opacity-100': loadedImages[insurance.id],
                      'h-[70%]': insurance.id === 'hellas',
                      'brightness-0': insurance.id === 'axeria'
                    }"
                    loading="lazy"
                    format="webp"
                    quality="80"
                    @load="onImageLoad(insurance.id)"
                  />
                </template>

                <span
                  v-else
                  class="font-black text-gray-800 text-xs text-center"
                >
                  {{ insurance.name }}
                </span>

                <span
                  v-if="insurance.id === 'hellas'"
                  class="font-black text-black text-[12px] mt-1 tracking-tight text-center leading-none uppercase transition-opacity duration-500"
                  :class="!loadedImages[insurance.id] ? 'opacity-0' : 'opacity-100'"
                >
                  Hellas Direct
                </span>
              </div>
            </div>

            <div class="mt-8 text-center">
              <span class="text-xs font-bold text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                + oricare altă poliță validă
              </span>
            </div>

            <p class="mt-6 text-[10px] text-gray-400 dark:text-gray-500 text-center leading-tight">
              Mărcile și siglele prezentate aparțin deținătorilor de drept și sunt folosite exclusiv cu scop informativ. Nu implică o afiliere oficială, cu excepția cazurilor în care există o convenție directă activă.
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
