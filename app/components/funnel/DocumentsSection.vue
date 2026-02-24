<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeTab = ref<'amiabila' | 'politie'>('amiabila')
const checkedDocs = ref<Set<string>>(new Set())

// --- Global State for Floating Bar ---
const hideFloatingBar = useState('hideFloatingBar', () => false)
const sectionRef = ref<HTMLElement | null>(null)
const { trackLead } = useTracking()

onMounted(() => {
  // Watch if this section is visible on screen
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return
      // True when the user scrolls down to this section
      hideFloatingBar.value = entry.isIntersecting
    },
    {
      // Triggers when 10% of the section enters the screen
      threshold: 0.10
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
    // Always show the bar if we leave the page entirely
    hideFloatingBar.value = false
  })
})

const toggleDoc = (title: string) => {
  const newSet = new Set(checkedDocs.value)
  if (newSet.has(title)) {
    newSet.delete(title)
  } else {
    newSet.add(title)
  }
  checkedDocs.value = newSet
}

const sharedDocs = [
  {
    icon: 'i-heroicons-user-circle',
    title: 'Documentele Tale',
    desc: 'Buletinul și Permisul șoferului implicat.',
    required: true
  },
  {
    icon: 'i-heroicons-identification',
    title: 'Talonul Tău',
    desc: 'Certificatul de înmatriculare al mașinii tale.',
    required: true
  },
  {
    icon: 'i-heroicons-document-duplicate',
    title: 'Actele Vinovatului',
    desc: 'Copie: RCA, Talon și Permis vinovat.',
    required: true
  },
  {
    icon: 'i-heroicons-briefcase',
    title: 'Delegație / Procură',
    desc: 'Doar dacă mașina este pe firmă sau alt proprietar.',
    required: false
  }
]

const amiabilaDocs = [
  {
    icon: 'i-line-md-clipboard-check-twotone',
    title: 'Constatarea Amiabilă',
    desc: 'Completată. Te putem ajuta noi la service.',
    required: true
  },
  ...sharedDocs
]

const politieDocs = [
  {
    icon: 'i-line-md-shield-check',
    title: 'Dovada de la Poliție',
    desc: 'Procesul verbal și autorizația de reparație.',
    required: true
  },
  ...sharedDocs
]

const currentDocs = computed(() => activeTab.value === 'amiabila' ? amiabilaDocs : politieDocs)

// Gamification Logic
const requiredDocs = computed(() => currentDocs.value.filter(d => d.required))
const progressPercentage = computed(() => {
  const checkedCount = requiredDocs.value.filter(d => checkedDocs.value.has(d.title)).length
  return Math.round((checkedCount / requiredDocs.value.length) * 100)
})
const isAllDone = computed(() => progressPercentage.value === 100)
</script>

<template>
  <section
    ref="sectionRef"
    class="py-8 md:py-24 relative overflow-visible bg-white dark:bg-[#030712]"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />

    <UContainer class="max-w-4xl relative z-10 flex flex-col md:block min-h-[85vh] md:min-h-0">
      <div class="text-center mb-6 md:mb-12 shrink-0">
        <h2 class="text-2xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-2 md:mb-4">
          Bifează actele pe care le ai
        </h2>
        <p class="text-xs md:text-lg text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto mb-4 md:mb-8 leading-tight">
          Alege tipul accidentului. Bifează documentele pentru a debloca deschiderea dosarului.
        </p>

        <div class="inline-flex bg-gray-100 dark:bg-slate-800/80 p-1 md:p-1.5 rounded-xl md:rounded-2xl shadow-inner border border-gray-200 dark:border-slate-700/50 relative">
          <button
            class="relative z-10 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-base transition-all duration-300 w-36 md:w-48"
            :class="activeTab === 'amiabila' ? 'text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
            @click="activeTab = 'amiabila'"
          >
            Amiabilă
          </button>
          <button
            class="relative z-10 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-base transition-all duration-300 w-36 md:w-48"
            :class="activeTab === 'politie' ? 'text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
            @click="activeTab = 'politie'"
          >
            PV Poliție
          </button>
          <div
            class="absolute top-1 bottom-1 md:top-1.5 md:bottom-1.5 w-36 md:w-48 bg-white dark:bg-slate-700 rounded-lg md:rounded-xl shadow-sm md:shadow-md transition-transform duration-300 ease-out border border-gray-100 dark:border-slate-600"
            :class="activeTab === 'politie' ? 'translate-x-full' : 'translate-x-0'"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2.5 md:gap-4 flex-1 pb-32 md:pb-8">
        <TransitionGroup
          name="list"
          appear
        >
          <div
            v-for="doc in currentDocs"
            :key="doc.title + activeTab"
            role="button"
            tabindex="0"
            class="group relative backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 active:scale-[0.97] overflow-hidden flex items-center gap-3 md:gap-6 cursor-pointer select-none"
            :class="[
              doc.required ? 'shadow-sm' : 'border-dashed opacity-90',
              checkedDocs.has(doc.title)
                ? 'bg-green-50/90 dark:bg-green-900/30 border-green-400 dark:border-green-600 shadow-green-500/10'
                : 'bg-white/80 dark:bg-slate-900/60 border-gray-200 dark:border-slate-700/80 hover:shadow-md hover:-translate-y-0.5'
            ]"
            @click="toggleDoc(doc.title)"
          >
            <div
              v-if="doc.required && !checkedDocs.has(doc.title)"
              class="absolute inset-0 ring-1 ring-blue-400/20 rounded-2xl animate-pulse pointer-events-none"
            />

            <div
              class="shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border transition-all duration-500"
              :class="checkedDocs.has(doc.title)
                ? 'bg-green-500 border-green-400 text-white shadow-inner scale-95'
                : (doc.required ? 'bg-blue-50 dark:bg-slate-800 border-blue-100 dark:border-blue-900/50 text-blue-600 group-hover:bg-blue-100' : 'bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-gray-700 text-gray-500')"
            >
              <UIcon
                :name="doc.icon"
                class="w-5 h-5 md:w-8 md:h-8"
              />
            </div>

            <div
              class="flex-1 min-w-0 transition-opacity duration-300"
              :class="checkedDocs.has(doc.title) ? 'opacity-80' : 'opacity-100'"
            >
              <div class="flex items-center gap-2 mb-0.5 md:mb-1">
                <h3
                  class="text-sm md:text-xl font-bold transition-colors duration-300 truncate"
                  :class="checkedDocs.has(doc.title) ? 'text-green-900 dark:text-green-300' : 'text-gray-900 dark:text-white'"
                >
                  {{ doc.title }}
                </h3>
                <span
                  v-if="!doc.required"
                  class="shrink-0 text-[9px] md:text-[10px] font-black uppercase tracking-wider bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-1.5 md:px-2 py-0.5 rounded border border-orange-200 dark:border-orange-800/50 inline-block"
                >
                  Dacă e cazul
                </span>
              </div>
              <p
                class="text-[11px] sm:text-xs md:text-base font-medium leading-tight md:leading-snug transition-colors duration-300"
                :class="checkedDocs.has(doc.title) ? 'text-green-700/90 dark:text-green-400/90' : 'text-gray-500 dark:text-gray-400'"
              >
                {{ doc.desc }}
              </p>
            </div>

            <div
              class="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              :class="checkedDocs.has(doc.title)
                ? 'bg-green-500 border-green-500 scale-110 shadow-md'
                : 'border-gray-300 dark:border-slate-500 group-hover:border-blue-400 bg-white/50 dark:bg-slate-800'"
            >
              <UIcon
                name="i-heroicons-check-16-solid"
                class="w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300"
                :class="checkedDocs.has(doc.title) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
              />
            </div>
          </div>
        </TransitionGroup>
      </div>

      <div
        class="sticky bottom-4 md:relative md:bottom-auto left-0 right-0 z-60 p-4 md:p-8 backdrop-blur-xl rounded-2xl md:rounded-3xl border transition-all duration-500 shadow-2xl md:shadow-sm"
        :class="isAllDone
          ? 'bg-green-500/95 dark:bg-green-600/95 border-green-400 dark:border-green-500 ring-2 ring-green-400 ring-offset-2 ring-offset-white dark:ring-offset-[#030712]'
          : 'bg-white/90 dark:bg-slate-900/90 border-gray-200 dark:border-slate-700'"
      >
        <div
          v-show="!isAllDone"
          class="transition-opacity duration-300"
        >
          <div class="flex justify-between items-end mb-2 md:mb-3">
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white text-sm md:text-lg">
                Progres Acte
              </h3>
              <p class="text-[10px] md:text-sm font-medium text-gray-500 dark:text-gray-400 hidden sm:block">
                Mai ai nevoie de câteva documente.
              </p>
            </div>
            <span class="font-black text-xl md:text-3xl text-blue-600 dark:text-blue-400">
              {{ progressPercentage }}%
            </span>
          </div>
          <div class="h-2 md:h-4 w-full bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div
              class="h-full bg-blue-600 transition-all duration-700 ease-out relative"
              :style="{ width: progressPercentage + '%' }"
            >
              <div class="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>

        <div
          v-show="isAllDone"
          class="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 animate-fade-in"
        >
          <div class="flex items-center gap-2 md:gap-3 text-white font-bold text-sm md:text-lg">
            <div class="bg-white/20 rounded-full p-1 md:p-1.5">
              <UIcon
                name="i-line-md-check-all"
                class="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
            Ești gata pentru dosar!
          </div>
          <UButton
            size="lg"
            variant="solid"
            color="neutral"
            class="font-black text-green-700 rounded-xl shadow-lg w-full sm:w-auto flex justify-center animate-[pulse_2s_ease-in-out_infinite] hover:scale-105 transition-transform"
            to="tel:+40788990011"
            @click="trackLead('phone')"
          >
            <UIcon
              name="i-heroicons-phone-solid"
              class="w-5 h-5 md:w-6 md:h-6 mr-1"
            />
            Sună Acum
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
  position: absolute;
}

@keyframes shimmer {
  100% { transform: translateX(100%); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>
