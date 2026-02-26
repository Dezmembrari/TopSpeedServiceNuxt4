<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// const insurances = [
//   // Reduced from 820x280 down to 205x70
//   { id: 'unica', name: 'Unica', logo: 'https://cdn.brandfetch.io/idxbFIJZjJ/w/205/h/70/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1719866192628' },
//   // Already small (243x66)
//   { id: 'baar', name: 'BAAR Romania', logo: 'https://cdn.brandfetch.io/id06La4WjF/w/243/h/66/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1762891803155' },
//   // SVGs scale infinitely and are naturally 2-5kb, so we leave them untouched
//   { id: 'groupama', name: 'Groupama', logo: 'https://cdn.brandfetch.io/id4994uob8/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1769160580337' },
//   { id: 'allianz', name: 'Allianz-Țiriac', logo: 'https://cdn.brandfetch.io/idyUFSjq7q/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667665868093' },
//   { id: 'generali', name: 'Generali', logo: 'https://cdn.brandfetch.io/idv49vobo0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1742876580673' },
//   { id: 'grawe', name: 'Grawe', logo: 'https://cdn.brandfetch.io/idzfTQucSY/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1763645852906' },
//   { id: 'omniasig', name: 'Omniasig', logo: 'https://cdn.brandfetch.io/idrtuyPDoR/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667853175572' },
//   // Already small (196x67)
//   { id: 'asirom', name: 'Asirom', logo: 'https://cdn.brandfetch.io/idzU_WZ3qX/w/196/h/67/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B' },
//   // Reduced from 400x400 down to 120x120
//   { id: 'hellas', name: 'Hellas Direct', logo: 'https://cdn.brandfetch.io/idSmBVCcxu/w/120/h/120/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1762490618750' },
//   // THE BIG ONE: Reduced from 1996x884 down to 200x88!
//   { id: 'axeria', name: 'Axeria Iard', logo: 'https://cdn.brandfetch.io/ide08T7c0y/w/200/h/88/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1763645922605' }
// ]

const insurances = [
  { id: 'unica', name: 'Unica', logo: '/images/asigurari/unica.png' },
  { id: 'baar', name: 'BAAR Romania', logo: '/images/asigurari/baar.png' },
  { id: 'groupama', name: 'Groupama', logo: '/images/asigurari/groupama.svg' },
  { id: 'allianz', name: 'Allianz-Țiriac', logo: '/images/asigurari/allianz.svg' },
  { id: 'generali', name: 'Generali', logo: '/images/asigurari/generali.svg' },
  { id: 'grawe', name: 'Grawe', logo: '/images/asigurari/grawe.svg' },
  { id: 'omniasig', name: 'Omniasig', logo: '/images/asigurari/omniasig.svg' },
  { id: 'asirom', name: 'Asirom', logo: '/images/asigurari/asirom.png' },
  { id: 'hellas', name: 'Hellas Direct', logo: '/images/asigurari/hellas.jpeg' },
  { id: 'axeria', name: 'Axeria Iard', logo: '/images/asigurari/axeria.png' }
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

const loadedImages = ref<Record<string, boolean>>({})

const onImageLoad = (id: string) => {
  loadedImages.value[id] = true
}

const gridRef = ref<HTMLElement | null>(null)
const animateGrid = ref(false)

useIntersectionObserver(
  gridRef,
  (entries) => {
    if (entries?.[0]?.isIntersecting && !animateGrid.value) {
      animateGrid.value = true
    }
  },
  { threshold: 0.2 }
)

const { trackLead } = useTracking()
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
            Ai avut un accident? Alege compania ta de asigurări de mai jos. Nu trebuie să îți faci griji pentru birocrație sau costuri ascunse. Ne ocupăm noi de tot.
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

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <a
              href="tel:+40788990011"
              class="group relative flex items-center justify-center gap-3 bg-green-700 hover:bg-[#1e5713] text-white px-8 py-4 rounded-2xl shadow-xl shadow-green-900/30 transition-all hover:-translate-y-1 w-full sm:w-auto"
              @click="trackLead('phone')"
            >
              <div class="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <UIcon
                name="i-line-md-phone-call-loop"
                mode="svg"
                class="w-6 h-6 md:w-7 md:h-7 shrink-0"
              />
              <span class="font-bold text-lg md:text-xl whitespace-nowrap">Sună pentru Constatare</span>
            </a>

            <UButton
              size="xl"
              variant="outline"
              color="neutral"
              class="border-2 font-bold px-8 py-4 rounded-2xl flex justify-center hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-lg md:text-xl text-gray-900 dark:text-white w-full sm:w-auto"
              @click="scrollToContact"
            >
              Trimite-ne detalii
            </UButton>
          </div>
        </div>

        <div class="flex-1 w-full max-w-lg mx-auto">
          <div class="bg-white/60 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-slate-800 shadow-xl relative">
            <div class="flex items-center justify-center gap-2 mb-6">
              <h3 class="font-bold text-gray-600 dark:text-gray-300 text-sm uppercase tracking-widest">
                Alege asiguratorul tău:
              </h3>
              <UIcon
                name="i-heroicons-hand-raised"
                class="w-4 h-4 text-blue-500 animate-bounce"
              />
            </div>

            <div
              ref="gridRef"
              class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            >
              <NuxtLink
                v-for="(insurance, index) in insurances"
                :key="insurance.id"
                :to="`/asigurari/${insurance.id}`"
                :aria-label="insurance.name"
                class="aspect-3/2 bg-white rounded-xl border-2 border-gray-100 dark:border-gray-200 flex flex-col items-center justify-center p-3 md:p-4 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1 active:scale-95 transition-all duration-300 relative group overflow-hidden will-change-transform"
                :class="[
                  !animateGrid ? 'opacity-0' : '',
                  animateGrid && index === 0 ? 'animate-hint-pop' : '',
                  animateGrid && index !== 0 ? 'animate-pop-in' : ''
                ]"
                :style="index === 0 ? `animation-delay: 0ms, 600ms;` : `animation-delay: ${index * 80}ms;`"
              >
                <div class="absolute inset-0 bg-blue-500/10 opacity-0 active:opacity-100 transition-opacity duration-150 rounded-xl" />
                <div class="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 transition-colors duration-300 pointer-events-none" />

                <template v-if="insurance.logo">
                  <div
                    v-if="!loadedImages[insurance.id]"
                    class="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <UIcon
                      name="i-heroicons-arrow-path"
                      class="w-5 h-5 text-gray-300 animate-spin"
                    />
                  </div>

                  <!-- <NuxtPicture
                    :src="insurance.logo"
                    :alt="`Siglă asigurare ${insurance.name}`"
                    width="120"
                    height="80"
                    sizes="120px"
                    class="max-w-full max-h-full object-contain transition-opacity duration-500 relative z-10 group-hover:scale-105 pointer-events-none"
                    :class="{
                      'opacity-0': !loadedImages[insurance.id],
                      'opacity-100': loadedImages[insurance.id],
                      'h-[70%]': insurance.id === 'hellas',
                      'brightness-0': insurance.id === 'axeria' || insurance.id === 'unica'
                    }"
                    loading="lazy"
                    format="webp"
                    quality="80"
                    @load="onImageLoad(insurance.id)"
                  /> -->

                  <!-- <NuxtPicture
                    :src="insurance.logo"
                    :alt="`Siglă asigurare ${insurance.name}`"
                    class="w-full h-full object-contain p-3 transition-transform opacity-100 duration-500 relative z-10 group-hover:scale-110 pointer-events-none"
                    :class="{
                      'opacity-0': !loadedImages[insurance.id],
                      'opacity-100': loadedImages[insurance.id],
                      'scale-75 group-hover:scale-90': insurance.id === 'hellas',
                      'brightness-0': insurance.id === 'axeria' || insurance.id === 'unica'
                    }"
                    loading="lazy"
                    format="webp"
                    quality="90"
                    fit="contain"
                    @load="onImageLoad(insurance.id)"
                  /> -->

                  <!-- <NuxtImg
                    :src="insurance.logo"
                    :alt="`Siglă asigurare ${insurance.name}`"
                    class="object-contain transition-transform duration-500 relative z-10 group-hover:scale-110 pointer-events-none"
                    :class="{
                      'opacity-0': !loadedImages[insurance.id],
                      'opacity-100': loadedImages[insurance.id],
                      /* 1. WIDE LOGOS: Give them 92% of the width so they stretch edge-to-edge on mobile */
                      'max-w-[92%] max-h-[75%]': insurance.id === 'baar' || insurance.id === 'axeria' || insurance.id === 'asirom',
                      /* 2. SQUARE LOGOS: Contain to 75% so they don't blow out the height */
                      'max-w-[75%] max-h-[75%]': insurance.id === 'hellas',
                      /* 3. STANDARD LOGOS: A balanced 85% */
                      'max-w-[85%] max-h-[80%]': !['baar', 'axeria', 'asirom', 'hellas'].includes(insurance.id),
                      /* Filters */
                      'brightness-0': insurance.id === 'axeria' || insurance.id === 'unica'
                    }"
                    loading="lazy"
                    format="webp"
                    quality="90"
                    fit="contain"
                    @load="onImageLoad(insurance.id)"
                  /> -->

                  <NuxtPicture
                    :src="insurance.logo"
                    :alt="`Siglă asigurare ${insurance.name}`"
                    class="flex items-center justify-center w-full h-full"
                    :img-attrs="{
                      class: [
                        /* Static Classes */
                        'object-contain transition-transform duration-500 relative z-10 group-hover:scale-110 pointer-events-none',
                        /* Dynamic Classes */
                        !loadedImages[insurance.id] ? 'opacity-0' : 'opacity-100',
                        ['baar', 'axeria', 'asirom'].includes(insurance.id) ? 'max-w-[92%] max-h-[75%]' : '',
                        insurance.id === 'hellas' ? 'max-w-[75%] max-h-[75%]' : '',
                        !['baar', 'axeria', 'asirom', 'hellas'].includes(insurance.id) ? 'max-w-[85%] max-h-[80%]' : '',
                        ['axeria', 'unica'].includes(insurance.id) ? 'brightness-0' : ''
                      ]
                    }"
                    loading="lazy"
                    format="avif,webp"
                    quality="50"
                    fit="contain"
                    @load="onImageLoad(insurance.id)"
                  />
                </template>

                <span
                  v-else
                  class="font-black text-gray-800 text-xs text-center relative z-10 group-hover:text-blue-700 pointer-events-none"
                >
                  {{ insurance.name }}
                </span>

                <span
                  v-if="insurance.id === 'hellas'"
                  class="font-black text-black text-[12px] mt-1 tracking-tight text-center leading-none uppercase transition-all duration-500 relative z-10 group-hover:text-blue-700 pointer-events-none"
                  :class="!loadedImages[insurance.id] ? 'opacity-0' : 'opacity-100'"
                >
                  Hellas Direct
                </span>
              </NuxtLink>
            </div>

            <div class="mt-8 text-center">
              <span class="text-xs font-bold text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm backdrop-blur-sm cursor-help">
                + oricare altă poliță validă
              </span>
            </div>

            <p class="mt-6 text-[10px] text-gray-400 dark:text-gray-500 text-center leading-tight">
              Mărcile și siglele prezentate aparțin deținătorilor de drept. Alegeți un logo pentru a vedea detaliile decontării.
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* 1. Initial Entry Animation */
@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8) translateY(10px); }
  50% { opacity: 1; transform: scale(1.05) translateY(-2px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

.animate-pop-in {
  animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

/* 2. Much faster, snappier Heartbeat Loop */
.animate-hint-pop {
  /* Runs the popIn once, then infinitely runs the heartbeat every 2.5 seconds */
  animation:
    popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
    hintHeartbeat 2.5s ease-in-out infinite;
  opacity: 0;
}

/* More aggressive, tighter double-tap to catch fast scrollers */
@keyframes hintHeartbeat {
  0% {
    transform: scale(1) translateY(0);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    border-color: inherit;
  }
  8% {
    transform: scale(1.08) translateY(-5px); /* Bigger pop */
    box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.5); /* Brighter glow */
    border-color: rgba(59, 130, 246, 0.8);
  }
  16% {
    transform: scale(1) translateY(0);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    border-color: inherit;
  }
  24% {
    transform: scale(1.04) translateY(-2px); /* Secondary pop */
    box-shadow: 0 8px 20px -5px rgba(59, 130, 246, 0.4);
    border-color: rgba(59, 130, 246, 0.6);
  }
  32% {
    transform: scale(1) translateY(0);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    border-color: inherit;
  }
  100% {
    transform: scale(1) translateY(0);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    border-color: inherit;
  }
}
</style>
