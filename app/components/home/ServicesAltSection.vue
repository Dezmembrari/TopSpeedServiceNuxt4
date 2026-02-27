<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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

// Mobile Springback Scroll Animation
const carouselRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0] && entries[0].isIntersecting) {
      const el = carouselRef.value

      if (el && window.innerWidth < 1024) {
        setTimeout(() => {
          el.classList.remove('snap-x', 'snap-mandatory')
          el.scrollBy({ left: 90, behavior: 'smooth' })

          setTimeout(() => {
            el.scrollBy({ left: -90, behavior: 'smooth' })
            setTimeout(() => {
              el.scrollBy({ left: 40, behavior: 'smooth' })
              setTimeout(() => {
                el.scrollBy({ left: -40, behavior: 'smooth' })
                setTimeout(() => {
                  el.classList.add('snap-x', 'snap-mandatory')
                }, 250)
              }, 150)
            }, 200)
          }, 200)
        }, 250)
      }

      observer?.disconnect()
    }
  }, { threshold: 0.4 })

  if (carouselRef.value) {
    observer.observe(carouselRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    id="services"
    class="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
  >
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <div class="absolute top-[60%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[90%] h-87.5 md:h-112.5">
        <!-- <div class="absolute inset-0 bg-linear-to-r from-blue-500/30 via-teal-400/20 to-green-500/30 dark:from-blue-600/15 dark:via-teal-500/10 dark:to-green-600/15 blur-[100px] md:blur-[130px] rounded-[100%] animate-slow-breathe" /> -->
        <div class="absolute inset-0 bg-linear-to-r from-blue-500/30 via-teal-400/20 to-green-500/30 dark:from-blue-600/15 dark:via-teal-500/10 dark:to-green-600/15 blur-2xl md:blur-[130px] rounded-[100%] lg:animate-slow-breathe will-change-transform" />
      </div>
    </div>

    <UContainer class="relative z-10">
      <div class="text-center max-w-4xl mx-auto mb-12 lg:mb-20 px-4">
        <div class="relative inline-block mb-6 group">
          <!-- <div class="absolute -inset-1.5 bg-linear-to-r from-green-400 via-blue-400 to-green-500 rounded-full blur-md opacity-100 dark:opacity-70 animate-moving-glow z-0" /> -->
          <div class="absolute -inset-1.5 bg-linear-to-r from-green-400 via-blue-400 to-green-500 rounded-full blur-md opacity-100 dark:opacity-70 lg:animate-moving-glow z-0" />
          <div class="relative z-10 inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/60 dark:border-green-600/50 bg-white/95 dark:bg-green-900/80 shadow-xl backdrop-blur-md">
            <span class="text-sm md:text-base font-black text-green-700 dark:text-green-400 uppercase tracking-widest">
              Gratuit prin Asigurare
            </span>
          </div>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
          Beneficii <span class="text-blue-700 dark:text-blue-500">Premium</span> Incluse
        </h2>

        <p class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold max-w-3xl mx-auto leading-relaxed">
          Reparați autoturismul la noi pe RCA sau CASCO, iar pachetul de mobilitate este <span class="text-green-600 dark:text-green-400">complet gratuit.</span>
        </p>
      </div>

      <div class="lg:hidden flex items-center justify-end mb-6 px-4">
        <div class="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 px-5 py-2.5 rounded-full shadow-sm">
          <span class="text-xs font-black uppercase tracking-wider">Glisați pentru oferte</span>
          <UIcon
            name="i-heroicons-chevron-double-right"
            class="w-5 h-5 animate-pulse"
          />
        </div>
      </div>

      <div
        ref="carouselRef"
        class="flex flex-nowrap overflow-x-auto snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 gap-6 lg:gap-8 pb-12 -mx-4 px-4 lg:mx-0 lg:px-0"
      >
        <div
          v-for="service in services"
          :key="service.id"
          class="w-[85vw] md:w-100 lg:w-auto shrink-0 snap-center flex flex-col bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full relative"
        >
          <div class="relative h-72 md:h-80 w-full shrink-0 overflow-hidden rounded-t-[2.5rem]">
            <!-- <NuxtPicture
              :src="service.image"
              :alt="service.alt"
              :img-attrs="{ class: 'absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0' }"
              loading="lazy"
              format="webp"
              quality="60"
              sizes="85vw xs:100vw sm:100px md:450px"
              densities="x1"
            /> -->

            <NuxtPicture
              :src="service.image"
              :alt="service.alt"
              class="absolute inset-0 w-full h-full"
              :img-attrs="{ class: 'absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0' }"
              loading="lazy"
              format="avif,webp"
              quality="40"
              sizes="xs:90vw sm:80vw md:450px lg:400px"
            />

            <div class="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />

            <div class="absolute bottom-6 left-6 right-6 z-20 flex flex-col pointer-events-none">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-700 flex items-center justify-center mb-4 shadow-lg border border-white/20">
                <UIcon
                  :name="service.icon"
                  class="w-8 h-8 md:w-10 md:h-10 text-white"
                />
              </div>

              <h3 class="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">
                {{ service.title }}
              </h3>
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col flex-1 relative z-20">
            <p class="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-8 font-medium leading-relaxed flex-1">
              {{ service.description }}
            </p>

            <button
              class="mt-auto flex items-center justify-between w-full px-6 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all shadow-lg shadow-green-600/20 font-bold text-base group/btn"
              @click="scrollToContact"
            >
              Solicită Serviciul
              <UIcon
                name="i-heroicons-arrow-right"
                class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:hidden -mt-4">
        <div class="flex flex-col items-center opacity-70">
          <span class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
            Continuați
          </span>
          <UIcon
            name="i-heroicons-chevron-down"
            class="w-5 h-5 text-gray-400 animate-bounce"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
/* Hides scrollbar but keeps native swipe functionality */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Moving Background Animation for the Pill */
@keyframes moving-glow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-moving-glow {
  background-size: 200% 200%;
  animation: moving-glow 3s ease infinite;
}

/* ✅ NEW: Elegant Slow Breathe Animation for the Background */
@keyframes slow-breathe {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.animate-slow-breathe {
  animation: slow-breathe 8s ease-in-out infinite;
}
</style>
