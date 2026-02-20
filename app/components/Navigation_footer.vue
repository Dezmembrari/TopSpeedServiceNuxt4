<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const currentYear = new Date().getFullYear()

const scrollToSection = async (id: string) => {
  // If not on the home page, route to home first
  if (route.path !== '/') {
    await router.push('/')
    // Wait a brief moment for the home page DOM to render before scrolling
    setTimeout(() => {
      const element = document.querySelector(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return
  }

  // If already on the home page, just scroll
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="bg-gray-200 dark:bg-[#0a0f1a] border-t border-gray-300 dark:border-white/10 py-12 transition-colors duration-300">
    <UContainer>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div class="flex flex-col items-center lg:items-start gap-2">
          <NuxtLink
            to="/"
            class="flex items-center gap-3 group"
            @click.prevent="scrollToSection('#hero')"
          >
            <div class="w-8 h-8 -skew-x-12 bg-linear-to-br from-blue-700 to-[#00335a] rounded flex items-center justify-center">
              <span class="text-white font-black text-sm tracking-tighter skew-x-12">TS</span>
            </div>
            <span class="font-bold text-lg tracking-tight uppercase text-gray-900 dark:text-white">
              Top Speed <span class="text-green-700 dark:text-green-500">Service</span>
            </span>
          </NuxtLink>
          <p class="text-gray-500 dark:text-slate-400 text-sm mt-2 font-medium">
            &copy; {{ currentYear }} Top Speed Service Auto. Toate drepturile rezervate.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-700 dark:text-slate-300">
          <button
            class="hover:text-green-700 dark:hover:text-green-500 transition-colors"
            @click="scrollToSection('#services')"
          >
            Servicii
          </button>
          <button
            class="hover:text-green-700 dark:hover:text-green-500 transition-colors"
            @click="scrollToSection('#gallery')"
          >
            Galerie
          </button>
          <button
            class="hover:text-green-700 dark:hover:text-green-500 transition-colors"
            @click="scrollToSection('#steps')"
          >
            Etape
          </button>
          <button
            class="hover:text-green-700 dark:hover:text-green-500 transition-colors"
            @click="scrollToSection('#contact')"
          >
            Contact
          </button>
        </div>

        <div class="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3 text-sm font-medium text-gray-600 dark:text-slate-400">
          <NuxtLink
            to="/termeni-si-conditii"
            class="hover:text-blue-700 dark:hover:text-white transition-colors"
          >
            Termeni și Condiții
          </NuxtLink>

          <NuxtLink
            to="/politica-de-confidentialitate"
            class="hover:text-blue-700 dark:hover:text-white transition-colors"
          >
            Politica de Confidențialitate
          </NuxtLink>

          <a
            href="https://anpc.ro/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 hover:text-blue-700 dark:hover:text-white transition-colors border-l border-gray-300 dark:border-slate-700 pl-6"
            title="Autoritatea Națională pentru Protecția Consumatorilor"
          >
            <UIcon
              name="i-heroicons-shield-check-solid"
              class="w-4 h-4 text-blue-600 dark:text-blue-500"
            />
            A.N.P.C.
          </a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
