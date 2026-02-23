<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const colorMode = useColorMode()

// Mobile State
const isMobileMenuOpen = ref(false)
const isMobileAsigurariOpen = ref(false)
const isMobileResurseOpen = ref(false)
const isMobileZoneOpen = ref(false) // NEW: Mobile Zone State

// Desktop State
const isDesktopAsigurariOpen = ref(false)
const isDesktopResurseOpen = ref(false)
const isDesktopZoneOpen = ref(false) // NEW: Desktop Zone State

const desktopAsigurariRef = ref<HTMLElement | null>(null)
const desktopResurseRef = ref<HTMLElement | null>(null)
const desktopZoneRef = ref<HTMLElement | null>(null) // NEW: Ref for Zone

const scrollY = ref(0)
const isHeaderCompact = computed(() => scrollY.value > 40)

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

// FETCH INSURANCES FROM CONTENT V3
const { data: insurancesData } = await useAsyncData('menu-insurances', () => {
  return queryCollection('asigurari').select('path', 'insurerName').all()
})

// NEW: FETCH LOCATIONS FROM CONTENT V3
const { data: locatiiData } = await useAsyncData('menu-locatii', () => {
  return queryCollection('locatii').select('path', 'cityName').all()
})

// STATIC USEFUL RESOURCES DATA
const resurseData = [
  {
    title: 'Ghid Amiabilă',
    path: '/ghid-amiabila',
    icon: 'i-heroicons-document-text'
  }
]

const scrollToSection = async (id: string) => {
  isMobileMenuOpen.value = false
  isDesktopAsigurariOpen.value = false
  isDesktopResurseOpen.value = false
  isDesktopZoneOpen.value = false // NEW

  const targetElement = document.querySelector(id)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  } else {
    if (route.path !== '/') {
      await router.push('/')
      requestAnimationFrame(() => {
        setTimeout(() => {
          const newTarget = document.querySelector(id)
          if (newTarget) {
            newTarget.scrollIntoView({ behavior: 'smooth' })
          }
        }, 150)
      })
    }
  }
}

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  isMobileAsigurariOpen.value = false
  isMobileResurseOpen.value = false
  isMobileZoneOpen.value = false // NEW
  isDesktopAsigurariOpen.value = false
  isDesktopResurseOpen.value = false
  isDesktopZoneOpen.value = false // NEW
})

// --- Dropdown Logic (Asigurari) ---
let asigurariTimeout: ReturnType<typeof setTimeout> | null = null
const handleAsigurariEnter = (e: PointerEvent) => {
  if (e.pointerType === 'mouse') {
    if (asigurariTimeout) clearTimeout(asigurariTimeout)
    isDesktopResurseOpen.value = false
    isDesktopZoneOpen.value = false
    isDesktopAsigurariOpen.value = true
  }
}
const handleAsigurariLeave = (e: PointerEvent) => {
  if (e.pointerType === 'mouse') {
    asigurariTimeout = setTimeout(() => {
      isDesktopAsigurariOpen.value = false
    }, 250)
  }
}

// --- Dropdown Logic (Resurse) ---
let resurseTimeout: ReturnType<typeof setTimeout> | null = null
const handleResurseEnter = (e: PointerEvent) => {
  if (e.pointerType === 'mouse') {
    if (resurseTimeout) clearTimeout(resurseTimeout)
    isDesktopAsigurariOpen.value = false
    isDesktopZoneOpen.value = false
    isDesktopResurseOpen.value = true
  }
}
const handleResurseLeave = (e: PointerEvent) => {
  if (e.pointerType === 'mouse') {
    resurseTimeout = setTimeout(() => {
      isDesktopResurseOpen.value = false
    }, 250)
  }
}

// --- NEW: Dropdown Logic (Zone Acoperite) ---
let zoneTimeout: ReturnType<typeof setTimeout> | null = null
const handleZoneEnter = (e: PointerEvent) => {
  if (e.pointerType === 'mouse') {
    if (zoneTimeout) clearTimeout(zoneTimeout)
    isDesktopAsigurariOpen.value = false
    isDesktopResurseOpen.value = false
    isDesktopZoneOpen.value = true
  }
}
const handleZoneLeave = (e: PointerEvent) => {
  if (e.pointerType === 'mouse') {
    zoneTimeout = setTimeout(() => {
      isDesktopZoneOpen.value = false
    }, 250)
  }
}

const closeDropdownOnOutsideClick = (e: MouseEvent | TouchEvent) => {
  const target = e.target as Node
  if (isDesktopAsigurariOpen.value && desktopAsigurariRef.value && !desktopAsigurariRef.value.contains(target)) isDesktopAsigurariOpen.value = false
  if (isDesktopResurseOpen.value && desktopResurseRef.value && !desktopResurseRef.value.contains(target)) isDesktopResurseOpen.value = false
  if (isDesktopZoneOpen.value && desktopZoneRef.value && !desktopZoneRef.value.contains(target)) isDesktopZoneOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
  document.addEventListener('click', closeDropdownOnOutsideClick)
  document.addEventListener('touchstart', closeDropdownOnOutsideClick, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  document.removeEventListener('click', closeDropdownOnOutsideClick)
  document.removeEventListener('touchstart', closeDropdownOnOutsideClick)
  if (asigurariTimeout) clearTimeout(asigurariTimeout)
  if (resurseTimeout) clearTimeout(resurseTimeout)
  if (zoneTimeout) clearTimeout(zoneTimeout)
})
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 flex flex-col transition-transform duration-300 ease-out will-change-transform"
    :class="{ '-translate-y-10': isHeaderCompact }"
  >
    <div class="bg-slate-900 text-white text-xs h-10 flex items-center border-b border-white/10 relative z-50">
      <UContainer class="w-full flex justify-between items-center max-w-7xl">
        <div class="flex items-center gap-6">
          <a
            href="tel:+40788990011"
            class="flex items-center gap-2 hover:text-green-400 transition-colors font-semibold"
          >
            <UIcon
              name="i-line-md-phone-call-loop"
              class="w-4 h-4"
            /> 0788 990 011
          </a>
          <a
            href="mailto:office@topspeedservice.eu"
            class="hidden sm:flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <UIcon
              name="i-line-md-email"
              class="w-4 h-4"
            /> office@topspeedservice.eu
          </a>
        </div>
        <div class="flex items-center gap-2 text-gray-400">
          <UIcon
            name="i-line-md-watch-loop"
            class="w-4 h-4 text-green-500"
          />
          <span class="hidden sm:inline">Luni-Vineri: 08:00-17:30</span>
          <span class="sm:hidden">08:00-17:30</span>
        </div>
      </UContainer>
    </div>

    <nav class="bg-white/70 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-gray-200 dark:border-white/5 h-16 md:h-20 flex items-center shadow-sm transition-colors duration-300">
      <UContainer class="w-full flex justify-between items-center max-w-7xl">
        <NuxtLink
          to="/"
          class="shrink-0 flex items-center gap-3 group"
          @click.prevent="scrollToSection('#hero')"
        >
          <div class="w-10 h-10 -skew-x-12 bg-linear-to-br from-blue-700 to-[#00335a] rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-blue-700/20 border border-white/20 will-change-transform">
            <span class="text-white font-black text-xl tracking-tighter skew-x-12">TS</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="font-bold text-lg tracking-tight uppercase text-slate-900 dark:text-white">Top Speed</span>
            <span class="text-xs font-bold text-green-700 dark:text-green-500 tracking-widest uppercase">Service Auto</span>
          </div>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-2 lg:gap-4">
          <UButton
            variant="ghost"
            color="neutral"
            class="font-medium text-sm lg:text-base hover:text-green-700 dark:hover:text-green-500 transition-colors px-2 lg:px-3"
            @click="scrollToSection('#services')"
          >
            Servicii
          </UButton>

          <div
            ref="desktopZoneRef"
            class="relative"
            @pointerenter="handleZoneEnter"
            @pointerleave="handleZoneLeave"
          >
            <UButton
              variant="ghost"
              color="neutral"
              class="font-medium text-sm lg:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 lg:px-3 relative"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              @click="isDesktopZoneOpen = !isDesktopZoneOpen"
            >
              Acoperire Rapidă
            </UButton>
            <transition
              enter-active-class="transition duration-200 ease-out will-change-[transform,opacity]"
              enter-from-class="transform translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in will-change-[transform,opacity]"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform translate-y-2 opacity-0"
            >
              <div
                v-show="isDesktopZoneOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-blue-900/10 overflow-hidden z-50 py-2"
              >
                <div class="absolute -top-8 -left-10 -right-10 h-12 bg-transparent z-[-1]" />
                <NuxtLink
                  v-for="locatie in locatiiData"
                  :key="locatie.path"
                  :to="locatie.path"
                  class="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors"
                  :class="route.path === locatie.path ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'"
                  @click="isDesktopZoneOpen = false"
                >
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="w-4 h-4 shrink-0"
                    :class="route.path === locatie.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'"
                  />
                  {{ locatie.cityName }}
                </NuxtLink>
              </div>
            </transition>
          </div>

          <div
            ref="desktopAsigurariRef"
            class="relative"
            @pointerenter="handleAsigurariEnter"
            @pointerleave="handleAsigurariLeave"
          >
            <UButton
              variant="ghost"
              color="neutral"
              class="font-medium text-sm lg:text-base text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors px-2 lg:px-3 relative"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              @click="isDesktopAsigurariOpen = !isDesktopAsigurariOpen"
            >
              Asigurări
              <span class="absolute -top-1 right-0 flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            </UButton>
            <transition
              enter-active-class="transition duration-200 ease-out will-change-[transform,opacity]"
              enter-from-class="transform translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in will-change-[transform,opacity]"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform translate-y-2 opacity-0"
            >
              <div
                v-show="isDesktopAsigurariOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl shadow-blue-900/10 overflow-hidden z-50 py-2"
              >
                <div class="absolute -top-8 -left-10 -right-10 h-12 bg-transparent z-[-1]" />
                <NuxtLink
                  v-for="ins in insurancesData"
                  :key="ins.path"
                  :to="ins.path"
                  class="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors"
                  :class="route.path === ins.path ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'"
                  @click="isDesktopAsigurariOpen = false"
                >
                  <UIcon
                    name="i-heroicons-shield-check"
                    class="w-4 h-4 shrink-0"
                    :class="route.path === ins.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'"
                  />
                  {{ ins.insurerName }}
                </NuxtLink>
              </div>
            </transition>
          </div>

          <div
            ref="desktopResurseRef"
            class="relative"
            @pointerenter="handleResurseEnter"
            @pointerleave="handleResurseLeave"
          >
            <UButton
              variant="ghost"
              color="neutral"
              class="font-medium text-sm lg:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 lg:px-3 relative"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              @click="isDesktopResurseOpen = !isDesktopResurseOpen"
            >
              Resurse
            </UButton>
            <transition
              enter-active-class="transition duration-200 ease-out will-change-[transform,opacity]"
              enter-from-class="transform translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in will-change-[transform,opacity]"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform translate-y-2 opacity-0"
            >
              <div
                v-show="isDesktopResurseOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-blue-900/10 overflow-hidden z-50 py-2"
              >
                <div class="absolute -top-8 -left-10 -right-10 h-12 bg-transparent z-[-1]" />
                <NuxtLink
                  v-for="resursa in resurseData"
                  :key="resursa.path"
                  :to="resursa.path"
                  class="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors"
                  :class="route.path === resursa.path ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'"
                  @click="isDesktopResurseOpen = false"
                >
                  <UIcon
                    :name="resursa.icon"
                    class="w-4 h-4 shrink-0"
                    :class="route.path === resursa.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'"
                  />
                  {{ resursa.title }}
                </NuxtLink>
              </div>
            </transition>
          </div>

          <div class="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2" />

          <UButton
            color="neutral"
            variant="ghost"
            aria-label="Schimbă tema"
            @click="toggleTheme"
          >
            <UIcon
              name="i-line-md-moon-filled"
              class="w-5 h-5 dark:hidden"
            />
            <UIcon
              name="i-line-md-sun-rising-loop"
              class="w-5 h-5 hidden dark:block"
            />
          </UButton>
          <UButton
            class="ml-2 bg-green-700 hover:bg-[#1e5713] text-white font-bold px-4 lg:px-6 shadow-lg shadow-green-900/20 transition-transform hover:scale-105 will-change-transform"
            icon="i-line-md-phone-call-loop"
            to="tel:+40788990011"
          >
            Contact
          </UButton>
        </div>

        <div class="md:hidden flex items-center gap-2">
          <UButton
            color="neutral"
            variant="ghost"
            aria-label="Schimbă tema"
            @click="toggleTheme"
          >
            <UIcon
              name="i-line-md-moon-filled"
              class="w-5 h-5 dark:hidden"
            />
            <UIcon
              name="i-line-md-sun-rising-loop"
              class="w-5 h-5 hidden dark:block"
            />
          </UButton>
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

    <transition
      enter-active-class="transition duration-200 ease-out will-change-[transform,opacity]"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in will-change-[transform,opacity]"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-show="isMobileMenuOpen"
        class="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800 shadow-2xl md:hidden z-40 max-h-[85vh] overflow-y-auto"
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

          <div class="flex flex-col">
            <UButton
              variant="ghost"
              color="neutral"
              block
              size="xl"
              class="justify-between font-semibold text-lg"
              @click="isMobileZoneOpen = !isMobileZoneOpen"
            >
              <div class="flex items-center gap-2">
                Acoperire Rapidă
              </div>
              <UIcon
                name="i-heroicons-chevron-down"
                class="w-5 h-5 transition-transform duration-300"
                :class="isMobileZoneOpen ? 'rotate-180 text-blue-600' : ''"
              />
            </UButton>
            <div
              class="grid transition-all duration-300 ease-in-out"
              :class="isMobileZoneOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 mt-0'"
            >
              <div class="overflow-hidden">
                <div class="pl-4 py-2 flex flex-col gap-1 border-l-2 border-gray-200 dark:border-slate-800 ml-4 mb-2">
                  <NuxtLink
                    v-for="locatie in locatiiData"
                    :key="locatie.path"
                    :to="locatie.path"
                    class="block py-2 px-3 rounded-lg text-base font-medium transition-colors"
                    :class="route.path === locatie.path ? 'text-blue-700 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800'"
                    @click="isMobileMenuOpen = false"
                  >
                    <UIcon
                      name="i-heroicons-map-pin"
                      class="w-4 h-4 mr-2 inline-block align-text-bottom"
                    />
                    {{ locatie.cityName }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <UButton
              variant="soft"
              color="secondary"
              block
              size="xl"
              class="justify-between font-bold text-lg text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 mt-1"
              @click="isMobileAsigurariOpen = !isMobileAsigurariOpen"
            >
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-heroicons-shield-check"
                  class="w-5 h-5"
                /> Decontare Asigurări
              </div>
              <UIcon
                name="i-heroicons-chevron-down"
                class="w-5 h-5 transition-transform duration-300"
                :class="isMobileAsigurariOpen ? 'rotate-180' : ''"
              />
            </UButton>
            <div
              class="grid transition-all duration-300 ease-in-out"
              :class="isMobileAsigurariOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'"
            >
              <div class="overflow-hidden">
                <div class="pl-5 py-2 flex flex-col gap-1 border-l-2 border-blue-100 dark:border-blue-900/50 ml-4 mb-2">
                  <NuxtLink
                    v-for="ins in insurancesData"
                    :key="ins.path"
                    :to="ins.path"
                    class="block py-2.5 px-3 rounded-lg text-base font-medium transition-colors"
                    :class="route.path === ins.path ? 'text-blue-700 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'"
                    @click="isMobileMenuOpen = false"
                  >
                    {{ ins.insurerName }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <UButton
              variant="ghost"
              color="neutral"
              block
              size="xl"
              class="justify-between font-semibold text-lg"
              @click="isMobileResurseOpen = !isMobileResurseOpen"
            >
              <div class="flex items-center gap-2">
                Resurse Utile
              </div>
              <UIcon
                name="i-heroicons-chevron-down"
                class="w-5 h-5 transition-transform duration-300"
                :class="isMobileResurseOpen ? 'rotate-180 text-blue-600' : ''"
              />
            </UButton>
            <div
              class="grid transition-all duration-300 ease-in-out"
              :class="isMobileResurseOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 mt-0'"
            >
              <div class="overflow-hidden">
                <div class="pl-4 py-2 flex flex-col gap-1 border-l-2 border-gray-200 dark:border-slate-800 ml-4 mb-2">
                  <NuxtLink
                    v-for="resursa in resurseData"
                    :key="resursa.path"
                    :to="resursa.path"
                    class="block py-2 px-3 rounded-lg text-base font-medium transition-colors"
                    :class="route.path === resursa.path ? 'text-blue-700 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800'"
                    @click="isMobileMenuOpen = false"
                  >
                    <UIcon
                      :name="resursa.icon"
                      class="w-4 h-4 mr-2 inline-block align-text-bottom"
                    />
                    {{ resursa.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="h-px bg-gray-200 dark:bg-gray-800 my-2 shrink-0" />
          <UButton
            block
            class="bg-green-700 hover:bg-green-600 text-white font-bold shadow-lg shrink-0 mb-4"
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
</template>
