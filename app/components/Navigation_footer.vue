<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const currentYear = new Date().getFullYear()

// FETCH INSURANCES
const { data: insurancesData } = await useAsyncData('footer-insurances', () => {
  return queryCollection('asigurari').select('path', 'insurerName').all()
})

// FETCH LOCATIONS
const { data: locatiiData } = await useAsyncData('footer-locatii', () => {
  return queryCollection('locatii').select('path', 'cityName').all()
})

const scrollToSection = async (id: string) => {
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      const element = document.querySelector(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }, 150)
    return
  }

  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const { trackLead } = useTracking()
</script>

<template>
  <footer class="bg-white dark:bg-[#030712] border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 md:pb-12 transition-colors duration-300 relative overflow-hidden">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-200 h-75 bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

    <UContainer class="relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <NuxtLink
            to="/"
            class="flex items-center gap-3 group"
            @click.prevent="scrollToSection('#hero')"
          >
            <div class="w-10 h-10 -skew-x-12 bg-linear-to-br from-blue-700 to-[#00335a] rounded-lg flex items-center justify-center shadow-md">
              <span class="text-white font-black text-xl tracking-tighter skew-x-12">TS</span>
            </div>
            <div class="flex flex-col leading-none">
              <span class="font-bold text-xl tracking-tight uppercase text-gray-900 dark:text-white">Top Speed</span>
              <span class="text-xs font-bold text-green-700 dark:text-green-500 tracking-widest uppercase">Service Auto</span>
            </div>
          </NuxtLink>

          <div class="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
            <a
              href="tel:+40788990011"
              class="flex items-center justify-center md:justify-start gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              @click="trackLead('phone')"
            >
              <UIcon
                name="i-line-md-phone-call-loop"
                class="w-5 h-5 text-gray-400 shrink-0"
              /> 0788 990 011
            </a>
            <a
              href="mailto:office@topspeedservice.eu"
              class="flex items-center justify-center md:justify-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              @click="trackLead('email')"
            >
              <UIcon
                name="i-line-md-email"
                class="w-5 h-5 text-gray-400 shrink-0"
              /> office@topspeedservice.eu
            </a>
            <div class="flex items-center justify-center md:justify-start gap-2">
              <UIcon
                name="i-line-md-map-marker"
                class="w-5 h-5 text-gray-400 shrink-0"
              />
              <span>Strada Prelungirea Ghencea 45, <br class="hidden lg:block"> Bragadiru, Ilfov</span>
            </div>
          </div>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm mb-5">
            Companie
          </h3>
          <ul class="flex flex-col gap-3 text-gray-600 dark:text-gray-400 font-medium text-sm mb-6">
            <li>
              <button
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                @click="scrollToSection('#hero')"
              >
                Acasă
              </button>
            </li>

            <li>
              <NuxtLink
                to="/masina-la-schimb"
                class="text-blue-700 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center justify-center md:justify-start gap-1.5"
              >
                <UIcon
                  name="i-heroicons-key"
                  class="w-4 h-4 shrink-0"
                />
                Mașină la Schimb Gratuită
              </NuxtLink>
            </li>

            <li>
              <button
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                @click="scrollToSection('#services')"
              >
                Servicii Auto
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                @click="scrollToSection('#contact')"
              >
                Contact & Hartă
              </button>
            </li>
          </ul>

          <h3 class="text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm mb-5 mt-4">
            Resurse Utile
          </h3>
          <ul class="flex flex-col gap-3 text-gray-600 dark:text-gray-400 font-medium text-sm">
            <li>
              <NuxtLink
                to="/ghid-amiabila"
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-1.5"
              >
                <UIcon
                  name="i-heroicons-document-text"
                  class="w-4 h-4 text-blue-500 shrink-0"
                /> Ghid Amiabilă
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm mb-5">
            Acoperire Rapidă
          </h3>
          <ul class="flex flex-col gap-3 text-gray-600 dark:text-gray-400 font-medium text-sm">
            <li
              v-for="locatie in locatiiData?.slice(0, 6)"
              :key="locatie.path"
            >
              <NuxtLink
                :to="locatie.path"
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Service Auto {{ locatie.cityName }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm mb-5">
            Decontare Directă
          </h3>
          <ul class="flex flex-col gap-3 text-gray-600 dark:text-gray-400 font-medium text-sm mb-8">
            <li
              v-for="ins in insurancesData?.slice(0, 6)"
              :key="ins.path"
            >
              <NuxtLink
                :to="ins.path"
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Daune {{ ins.insurerName }}
              </NuxtLink>
            </li>
          </ul>

          <div class="flex flex-col gap-2 items-center md:items-start">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener nofollow"
              class="block w-40 hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/anpc-sal.webp"
                alt="ANPC SAL"
                class="w-full h-auto rounded-md shadow-sm"
                loading="lazy"
              >
            </a>
            <a
              href="https://consumer-redress.ec.europa.eu/index_ro"
              target="_blank"
              rel="noopener nofollow"
              class="block w-40 hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/anpc-sol.webp"
                alt="Soluționarea Online a Litigiilor"
                class="w-full h-auto rounded-md shadow-sm"
                loading="lazy"
              >
            </a>
          </div>
        </div>
      </div>

      <div class="h-px w-full bg-gray-200 dark:bg-slate-800 mb-8" />

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-500">
        <p>&copy; {{ currentYear }} Top Speed Service Auto. Toate drepturile rezervate.</p>
        <div class="flex items-center gap-4 md:gap-6">
          <NuxtLink
            to="/termeni-si-conditii"
            class="hover:text-gray-900 dark:hover:text-white transition-colors"
          >Termeni și Condiții</NuxtLink>
          <NuxtLink
            to="/politica-de-confidentialitate"
            class="hover:text-gray-900 dark:hover:text-white transition-colors"
          >Politică de Confidențialitate</NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
