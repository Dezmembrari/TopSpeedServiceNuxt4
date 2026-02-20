<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const colorMode = useColorMode()

const isMobileMenuOpen = ref(false)
const scrollY = ref(0)
const isHeaderCompact = computed(() => scrollY.value > 40)

// Throttle scroll event for better performance
let ticking = false
const updateScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollY.value = window.scrollY
      ticking = false
    })
    ticking = true
  }
}

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const scrollToSection = async (id: string) => {
  isMobileMenuOpen.value = false

  // If not on home page, navigate to home first
  if (route.path !== '/') {
    await router.push('/')
    // Wait for navigation to complete
    setTimeout(() => {
      const element = document.querySelector(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return
  }

  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Add scroll listener to update header state
onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 flex flex-col transition-all duration-300"
    :class="{ '-translate-y-10': isHeaderCompact }"
  >
    <!-- Top Bar -->
    <div class="bg-slate-900 text-white text-xs h-10 flex items-center border-b border-white/10 relative z-50">
      <UContainer class="w-full flex justify-between items-center max-w-480">
        <div class="flex items-center gap-6">
          <a
            href="tel:+40788990011"
            class="flex items-center gap-2 hover:text-green-700 transition-colors font-semibold"
          >
            <UIcon
              name="i-line-md-phone-call-loop"
              class="w-4 h-4"
            />
            0788 990 011
          </a>
          <a
            href="mailto:office@topspeedservice.eu"
            class="hidden sm:flex items-center gap-2 hover:text-green-700 transition-colors"
          >
            <UIcon
              name="i-line-md-email"
              class="w-4 h-4"
            />
            office@topspeedservice.eu
          </a>
        </div>
        <div class="flex items-center gap-2 text-gray-400">
          <UIcon
            name="i-line-md-watch-loop"
            class="w-4 h-4 text-green-700"
          />
          <span class="hidden sm:inline">Luni-Vineri: 08:00-17:30</span>
          <span class="sm:hidden">08:00-17:30</span>
        </div>
      </UContainer>
    </div>

    <!-- Main Navigation -->
    <nav class="bg-white/50 dark:bg-slate-950/60 backdrop-blur-2xl border-b border-gray-200 dark:border-white/5 h-16 md:h-20 flex items-center shadow-sm transition-all duration-300">
      <UContainer class="w-full flex justify-between items-center max-w-480">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="shrink-0 flex items-center gap-3 group"
          @click.prevent="scrollToSection('#hero')"
        >
          <!-- Parallelogram Logo -->
          <div class="w-10 h-10 -skew-x-12 bg-linear-to-br from-blue-700 to-[#00335a] rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-blue-700/20 border border-white/20">
            <span class="text-white font-black text-xl tracking-tighter skew-x-12">TS</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="font-bold text-lg tracking-tight uppercase text-slate-900 dark:text-white">
              Top Speed
            </span>
            <span class="text-xs font-bold text-green-700 tracking-widest uppercase">Service Auto</span>
          </div>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-6">
          <UButton
            variant="ghost"
            color="neutral"
            class="font-medium text-base hover:text-green-700 transition-colors px-2"
            @click="scrollToSection('#hero')"
          >
            Acasă
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            class="font-medium text-base hover:text-green-700 transition-colors px-2"
            @click="scrollToSection('#services')"
          >
            Servicii
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            class="font-medium text-base hover:text-green-700 transition-colors px-2"
            @click="scrollToSection('#gallery')"
          >
            Galerie
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            class="font-medium text-base hover:text-green-700 transition-colors px-2"
            @click="scrollToSection('#steps')"
          >
            Etape
          </UButton>

          <div class="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2" />

          <UButton
            color="neutral"
            variant="ghost"
            :icon="colorMode.value === 'dark' ? 'i-line-md-moon-filled' : 'i-line-md-sun-rising-loop'"
            aria-label="Schimbă tema"
            @click="toggleTheme"
          />
          <!-- <template #fallback>
          <div class="w-8 h-8" />
        </template> -->

          <!-- Contact Button - Calls Directly -->
          <UButton
            class="ml-2 bg-green-700 hover:bg-[#1e5713] text-white font-bold px-6 shadow-lg shadow-green-900/20 transition-all hover:scale-105"
            icon="i-line-md-phone-call-loop"
            to="tel:+40788990011"
          >
            Contactează-ne
          </UButton>
        </div>

        <!-- Mobile Toggle -->
        <div class="md:hidden flex items-center gap-2">
          <UButton
            color="neutral"
            variant="ghost"
            :icon="colorMode.value === 'dark' ? 'i-line-md-moon-filled' : 'i-line-md-sun-rising-loop'"
            aria-label="Schimbă tema"
            @click="toggleTheme"
          />

          <UButton
            color="neutral"
            variant="ghost"
            icon="i-heroicons-bars-3"
            size="lg"
            class="text-slate-900 dark:text-white"
            aria-label="Deschide meniu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
        </div>
      </UContainer>
    </nav>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 shadow-2xl md:hidden z-40"
      >
        <div class="p-4 flex flex-col gap-2">
          <UButton
            variant="ghost"
            color="neutral"
            block
            size="xl"
            class="justify-start font-semibold text-lg"
            @click="scrollToSection('#hero')"
          >
            Acasă
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            block
            size="xl"
            class="justify-start font-semibold text-lg"
            @click="scrollToSection('#services')"
          >
            Servicii
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            block
            size="xl"
            class="justify-start font-semibold text-lg"
            @click="scrollToSection('#gallery')"
          >
            Galerie Foto
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            block
            size="xl"
            class="justify-start font-semibold text-lg"
            @click="scrollToSection('#steps')"
          >
            Etape
          </UButton>
          <UButton
            variant="ghost"
            color="neutral"
            block
            size="xl"
            class="justify-start font-semibold text-lg"
            @click="scrollToSection('#contact')"
          >
            Contact
          </UButton>
          <div class="h-px bg-gray-200 dark:bg-gray-800 my-2" />
          <UButton
            block
            class="bg-green-700 text-white"
            size="xl"
            icon="i-line-md-phone-call-loop"
            to="tel:+40788990011"
          >
            Sună Acum
          </UButton>
        </div>
      </div>
    </transition>
  </header>

  <!-- Hidden icons for preloading -->
  <div
    class="hidden"
    aria-hidden="true"
  >
    <UIcon name="i-line-md-moon-filled" />
    <UIcon name="i-line-md-sun-rising-loop" />
    <UIcon name="i-line-md-phone-call-loop" />
    <UIcon name="i-line-md-email" />
    <UIcon name="i-line-md-watch-loop" />
    <UIcon name="i-line-md-confirm-circle" />
    <UIcon name="i-line-md-speedometer-loop" />
    <UIcon name="i-line-md-document-list" />
  </div>
</template>
