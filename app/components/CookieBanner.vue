<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { $consentManager } = useNuxtApp()

const isVisible = ref(false)
const showDetails = ref(false)

// Local UI state for the toggles
const consentAnalytics = ref(false)
const consentMarketing = ref(false)

onMounted(() => {
  // If they haven't decided yet, show the banner after 2 seconds
  if ($consentManager && !$consentManager.state.value.hasDecided) {
    setTimeout(() => {
      isVisible.value = true
    }, 2000)
  }
})

// Actions
const acceptAll = () => {
  $consentManager.update({ analytics: true, marketing: true })
  isVisible.value = false
}

const declineAll = () => {
  $consentManager.update({ analytics: false, marketing: false })
  isVisible.value = false
}

const saveSelection = () => {
  $consentManager.update({
    analytics: consentAnalytics.value,
    marketing: consentMarketing.value
  })
  isVisible.value = false
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="translate-y-full md:translate-y-12 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full md:translate-y-12 opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-100 md:bottom-6 md:right-6 md:left-auto md:w-105"
    >
      <div class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200 dark:border-slate-800 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.2)] md:shadow-2xl rounded-t-3xl md:rounded-3xl p-6 transition-all">
        <div class="flex items-center gap-3 mb-3">
          <div class="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-xl text-blue-600 dark:text-blue-400">
            <UIcon
              name="i-heroicons-shield-check-solid"
              class="w-6 h-6"
            />
          </div>
          <h2 class="text-base font-black text-gray-900 dark:text-white tracking-tight">
            Confidențialitatea Ta
          </h2>
        </div>

        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 font-medium">
          Folosim module cookie pentru a asigura funcționarea site-ului și pentru a analiza traficul. Poți alege ce tipuri de cookie-uri accepți.
        </p>

        <div
          v-show="showDetails"
          class="space-y-3 mb-5 overflow-hidden transition-all"
        >
          <div class="flex items-center justify-between p-3.5 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-800 opacity-90">
            <div class="flex flex-col pr-4">
              <span class="text-sm font-bold text-gray-900 dark:text-white">Strict Necesare</span>
              <span class="text-xs text-gray-500 mt-0.5 leading-tight">Esențiale pentru navigare și securitate.</span>
            </div>
            <div class="relative inline-flex items-center cursor-not-allowed">
              <div class="w-11 h-6 bg-green-500 rounded-full" />
              <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-5" />
            </div>
          </div>

          <label class="flex items-center justify-between p-3.5 bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200 dark:border-slate-700 cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all group">
            <div class="flex flex-col pr-4">
              <span class="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Analiză & Performanță</span>
              <span class="text-xs text-gray-500 mt-0.5 leading-tight">Ne ajută să înțelegem cum utilizezi site-ul.</span>
            </div>
            <div class="relative inline-flex items-center cursor-pointer">
              <input
                v-model="consentAnalytics"
                type="checkbox"
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </div>
          </label>

          <label class="flex items-center justify-between p-3.5 bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200 dark:border-slate-700 cursor-pointer hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all group">
            <div class="flex flex-col pr-4">
              <span class="text-sm font-bold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">Marketing & Publicitate</span>
              <span class="text-xs text-gray-500 mt-0.5 leading-tight">Pentru a-ți oferi oferte relevante.</span>
            </div>
            <div class="relative inline-flex items-center cursor-pointer">
              <input
                v-model="consentMarketing"
                type="checkbox"
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500" />
            </div>
          </label>

          <UButton
            block
            color="neutral"
            variant="soft"
            class="font-bold py-3 mt-4 rounded-xl text-sm"
            @click="saveSelection"
          >
            Salvează Selecția
          </UButton>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <UButton
            color="neutral"
            variant="outline"
            class="flex-1 justify-center font-bold py-2.5 rounded-xl border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            @click="declineAll"
          >
            Refuză
          </UButton>
          <UButton
            color="primary"
            class="flex-1 justify-center font-bold py-2.5 rounded-xl shadow-lg shadow-blue-500/20"
            @click="acceptAll"
          >
            Acceptă Tot
          </UButton>
        </div>

        <div class="mt-4 flex justify-center">
          <button
            class="text-xs font-bold text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest transition-colors flex items-center gap-1 p-2"
            @click="showDetails = !showDetails"
          >
            {{ showDetails ? 'Ascunde Detaliile' : 'Personalizează' }}
            <UIcon
              :name="showDetails ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
              class="w-4 h-4"
            />
          </button>
        </div>

        <div class="mt-3 pt-3 border-t border-gray-100 dark:border-slate-800/60 flex justify-center gap-4 text-xs text-gray-400 font-medium">
          <NuxtLink
            to="/politica-de-confidentialitate"
            class="hover:text-gray-900 dark:hover:text-white transition-colors"
          >Politică Cookies</NuxtLink>
          <span>&bull;</span>
          <NuxtLink
            to="/termeni-si-conditii"
            class="hover:text-gray-900 dark:hover:text-white transition-colors"
          >Termeni</NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>
