<script setup lang="ts">
import { ref, computed } from 'vue'

// 1. Define the interface (Now with the optional link!)
interface FAQItem {
  question: string
  answer: string
  icon: string
  link?: {
    text: string
    url: string
  }
}

// 2. Allow parent pages to override the content
const props = defineProps<{
  title?: string
  subtitle?: string
  customFaqs?: FAQItem[]
}>()

// 3. The Default Insurance Funnel FAQs (With your internal link)
const defaultFaqs: FAQItem[] = [
  {
    question: 'Asiguratorul vrea să mă trimită la alt service. Ce fac?',
    answer: 'Conform legii, ai dreptul absolut de a alege unde îți repari mașina. Asiguratorul NU te poate obliga să mergi la atelierele recomandate de ei.',
    icon: 'i-heroicons-scale'
  },
  {
    question: 'Există costuri ascunse?',
    answer: 'Absolut niciunul. Reparația este decontată integral de asigurator prin sistemul de decontare directă. Noi facturăm și încasăm banii direct de la firma de asigurări, fără să îți cerem vreun avans.',
    icon: 'i-heroicons-banknotes'
  },
  {
    question: 'Beneficiez de mașină la schimb?',
    answer: 'Da. Îți oferim gratuit o mașină la schimb din flota noastră pe toată durata reparației. Pleci cu ea exact în momentul în care ne predai autoturismul avariat, ca să nu rămâi pieton nicio secundă.',
    icon: 'i-heroicons-key',
    link: {
      text: 'Vezi condițiile pentru mașina la schimb',
      url: '/masina-la-schimb'
    }
  },
  {
    question: 'Cât durează reparația pe asigurare?',
    answer: 'Dosarele de daună au prioritate maximă la noi. Comandăm piesele în regim de urgență și ne ocupăm de presarea inspectorilor de daună pentru a obține aprobările cât mai rapid posibil.',
    icon: 'i-heroicons-clock'
  },
  {
    question: 'Ce fel de piese veți folosi?',
    answer: 'Montăm exclusiv piese de origine (OE) sau echivalente premium, respectând cu strictețe normele producătorului. Fiind un service independent autorizat RAR, nu facem compromisuri la calitate în favoarea asiguratorului.',
    icon: 'i-heroicons-shield-check'
  }
]

// 4. Intelligence: Use custom FAQs if provided, otherwise fallback to defaults
const activeFaqs = computed(() => props.customFaqs || defaultFaqs)

// 5. Dynamic Titles
const displayTitle = computed(() => props.title || 'Ai nelămuriri?')
const displaySubtitle = computed(() => props.subtitle || 'Clarificăm cele mai frecvente întrebări pentru ca tu să fii complet lipsit de griji.')

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const trackLead = useTracking().trackLead
</script>

<template>
  <section class="py-16 md:py-24 relative overflow-hidden bg-gray-50/50 dark:bg-[#030712]/50 border-t border-gray-200 dark:border-white/5">
    <div class="absolute top-0 right-0 w-150 h-150 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

    <UContainer class="max-w-3xl relative z-10">
      <div class="text-center mb-10 md:mb-14">
        <h2
          class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4"
        >
          {{ displayTitle }}
        </h2>
        <p class="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-xl mx-auto">
          {{ displaySubtitle }}
        </p>
      </div>

      <div class="flex flex-col gap-3 md:gap-4 mb-12 md:mb-16">
        <div
          v-for="(faq, index) in activeFaqs"
          :key="index"
          class="group bg-white dark:bg-slate-900/80 backdrop-blur-xl border transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
          :class="openIndex === index
            ? 'border-blue-200 dark:border-blue-800 shadow-md shadow-blue-900/5 dark:shadow-blue-900/20 ring-1 ring-blue-100 dark:ring-blue-900/50'
            : 'border-gray-200 dark:border-slate-800 shadow-sm hover:border-blue-300/50 hover:shadow-md'"
          @click="toggleFaq(index)"
        >
          <div class="flex items-center justify-between p-4 md:p-6">
            <div class="flex items-center gap-4 text-left">
              <div
                class="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300"
                :class="openIndex === index
                  ? 'bg-blue-600 text-white shadow-inner'
                  : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-slate-700'"
              >
                <UIcon
                  :name="faq.icon"
                  class="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <h3
                class="font-bold text-base md:text-xl transition-colors duration-300 pr-2 md:pr-4 leading-tight"
                :class="openIndex === index ? 'text-blue-700 dark:text-blue-400' : 'text-gray-900 dark:text-white'"
              >
                {{ faq.question }}
              </h3>
            </div>

            <div
              class="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              :class="openIndex === index
                ? 'border-transparent bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 rotate-180'
                : 'border-gray-200 dark:border-slate-700 text-gray-400 bg-gray-50 dark:bg-slate-800/50 group-hover:bg-gray-100 dark:group-hover:bg-slate-700'"
            >
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="w-5 h-5"
              />
            </div>
          </div>

          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="px-4 md:px-6 pb-2 pt-0 text-gray-600 dark:text-gray-300 font-medium leading-relaxed text-sm md:text-base md:ml-18">
                {{ faq.answer }}
              </p>

              <div
                v-if="faq.link"
                class="px-4 md:px-6 pb-5 md:pb-6 md:ml-18"
              >
                <NuxtLink
                  :to="faq.link.url"
                  class="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
                  @click.stop
                >
                  {{ faq.link.text }}
                  <UIcon
                    name="i-heroicons-arrow-right"
                    class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  />
                </NuxtLink>
              </div>
              <div
                v-else
                class="pb-5 md:pb-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-gray-200 dark:border-slate-800 rounded-4xl p-8 md:p-10 text-center shadow-lg relative overflow-hidden group">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400 shadow-inner border border-blue-200 dark:border-blue-800/50">
            <UIcon
              name="i-line-md-phone-call-loop"
              class="w-8 h-8"
            />
          </div>
          <h3 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
            Mai ai alte întrebări?
          </h3>
          <p class="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            Suntem aici să îți răspundem la orice nelămurire. Nu ezita să ne contactezi!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <UButton
              size="xl"
              class="bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 shadow-xl shadow-green-900/20 text-lg rounded-2xl flex justify-center w-full sm:w-auto transition-transform hover:-translate-y-1"
              icon="i-line-md-phone-call-loop"
              to="tel:+40788990011"
              @click="trackLead('phone')"
            >
              Sună acum
            </UButton>
            <UButton
              size="xl"
              variant="outline"
              color="neutral"
              class="border-2 font-bold px-8 py-4 text-lg rounded-2xl bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 flex justify-center w-full sm:w-auto transition-transform hover:-translate-y-1"
              to="https://wa.me/40788990011"
              target="_blank"
              icon="i-line-md-chat"
              @click="trackLead('whatsapp')"
            >
              Scrie-ne pe WhatsApp
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
