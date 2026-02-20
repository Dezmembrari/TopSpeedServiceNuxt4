<script setup lang="ts">
import { ref } from 'vue'

// Logic: Only load the heavy Google Maps iframe when the user actually wants to see it.
const showMap = ref(false)

// Optional: Warm up the connection to Google Maps when user hovers (Desktop optimization)
const warmUpMap = () => {
  showMap.value = true
}
</script>

<template>
  <section
    id="contact"
    class="py-16 md:py-24 bg-blue-700 dark:bg-[#00335a] relative overflow-hidden"
  >
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[20px_20px]" />

    <div class="relative z-10 w-full px-4 md:px-12 max-w-480 mx-auto">
      <div class="bg-gray-100 dark:bg-slate-900 rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border-4 border-white/10">
        <div class="lg:w-2/5 p-6 sm:p-8 lg:p-14 flex flex-col justify-center">
          <div class="flex items-center gap-3 mb-8">
            <div class="h-1.5 w-16 bg-green-700 rounded-full" />
            <span class="text-green-700 font-black uppercase tracking-widest text-base">CONTACT RAPID</span>
          </div>

          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 md:mb-10">
            Suntem aici să te ajutăm
          </h2>

          <div class="space-y-6">
            <a
              href="tel:+40788990011"
              class="flex items-center gap-5 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:scale-[1.02] hover:border-green-700 transition-all group"
            >
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-700 transition-colors shrink-0">
                <UIcon
                  name="i-line-md-phone-call-loop"
                  class="w-8 h-8 text-green-700 group-hover:text-white transition-colors"
                />
              </div>
              <div class="min-w-0">
                <p class="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Telefon Urgențe</p>
                <p class="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white">0788 990 011</p>
              </div>
            </a>

            <a
              href="mailto:office@topspeedservice.eu"
              class="flex items-center gap-5 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-700 transition-all group"
            >
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-700 transition-colors shrink-0">
                <UIcon
                  name="i-line-md-email"
                  class="w-8 h-8 text-blue-700 group-hover:text-white transition-colors"
                />
              </div>
              <div class="min-w-0">
                <p class="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Email</p>
                <p class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white break-all">office@topspeedservice.eu</p>
              </div>
            </a>

            <div class="flex items-start gap-5 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-slate-700">
              <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                <UIcon
                  name="i-line-md-map-marker-alt-filled-loop"
                  class="w-8 h-8 text-gray-700 dark:text-gray-300"
                />
              </div>
              <div class="min-w-0">
                <p class="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">
                  Locație Service
                </p>
                <p class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                  Sos. Clinceni, DJ401A 6, Bragadiru 077025
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Top+Speed+Service+Bragadiru"
                  target="_blank"
                  class="text-base font-bold text-green-700 hover:underline inline-flex items-center gap-1"
                >
                  Deschide în Hărți (Waze / Google)
                  <UIcon
                    name="i-heroicons-arrow-top-right-on-square"
                    class="w-5 h-5 shrink-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="lg:w-3/5 h-96 lg:h-auto min-h-100 relative group cursor-pointer bg-gray-200 dark:bg-slate-800"
          @click="showMap = true"
          @mouseenter="warmUpMap"
        >
          <transition
            enter-active-class="transition-opacity duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
          >
            <iframe
              v-if="showMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.2774958081704!2d25.96845447464996!3d44.3658914764609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adffb57a537def%3A0xb5be45e52dd86aef!2sTop%20Speed%20Service%20-%20Service%20Auto%20%C8%99i%20Centru%20de%20Constatare%20Daune%20Bragadiru!5e0!3m2!1sro!2sro!4v1725889184748!5m2!1sro!2sro"
              class="absolute inset-0 w-full h-full z-20"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Locație Top Speed Service pe Google Maps"
            />
          </transition>

          <div
            v-if="!showMap"
            class="absolute inset-0 w-full h-full z-10 flex items-center justify-center"
          >
            <NuxtImg
              src="/maps_screenshot.webp"
              alt="Harta Locatie"
              class="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"
              width="600"
              height="400"
              format="webp"
              sizes="100vw md:50vw lg:300px"
              loading="lazy"
            />

            <!-- <div class="relative bg-blue-500/10 dark:bg-blue-500/20 backdrop-blur-xl px-8 py-4 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] border border-white/40 dark:border-white/10 group-hover:scale-105 transition-transform duration-300 flex items-center gap-3">
              <UIcon
                name="i-line-md-map-marker-filled"
                class="w-8 h-8 text-blue-700 dark:text-blue-400 animate-bounce"
              />
              <div>
                <p class="font-black text-gray-900 dark:text-white text-lg leading-none">
                  Vezi Harta Interactivă
                </p>
                <p class="text-xs text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider mt-1">
                  Click pentru a încărca
                </p>
              </div>
            </div> -->

            <!-- <div class="relative bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl border border-white/50 dark:border-slate-700/50 group-hover:scale-105 transition-transform duration-300 flex items-center gap-3">
              <UIcon
                name="i-line-md-map-marker-filled"
                class="w-8 h-8 text-blue-700 dark:text-blue-400 animate-bounce"
              />
              <div>
                <p class="font-black text-gray-900 dark:text-white text-lg leading-none">
                  Vezi Harta Interactivă
                </p>
                <p class="text-xs text-gray-800 dark:text-gray-300 font-bold uppercase tracking-wider mt-1">
                  Click pentru a încărca
                </p>
              </div>
            </div> -->

            <div class="relative bg-white/40 dark:bg-slate-900/50 backdrop-blur-xl px-8 py-4 rounded-full border border-blue-500/40 dark:border-blue-400/30 shadow-[0_0_40px_rgba(29,78,216,0.3)] dark:shadow-[0_0_40px_rgba(59,130,246,0.2)] group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(29,78,216,0.5)] transition-all duration-500 flex items-center gap-3 overflow-hidden">
              <div class="absolute inset-0 bg-linear-to-r from-blue-600/10 to-green-500/10 dark:from-blue-500/15 dark:to-green-400/15 pointer-events-none" />

              <UIcon
                name="i-line-md-map-marker-filled"
                class="w-8 h-8 text-blue-700 dark:text-blue-400 animate-bounce relative z-10"
              />
              <div class="relative z-10">
                <p class="font-black text-gray-900 dark:text-white text-lg leading-none drop-shadow-sm">
                  Vezi Harta Interactivă
                </p>
                <p class="text-xs text-blue-900 dark:text-blue-200 font-bold uppercase tracking-wider mt-1">
                  Click pentru a încărca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
