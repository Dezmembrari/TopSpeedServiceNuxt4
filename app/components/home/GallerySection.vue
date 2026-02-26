<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 1. Fetch images & Setup Nuxt Image
const { data: images } = await useFetch<string[]>('/api/gallery', {
  default: () => []
})
const $img = useImage()

// 2. Pagination Logic
const initialCount = 8
const increment = 8
const visibleCount = ref(initialCount)

const totalImages = computed(() => images.value?.length || 0)
const visibleImages = computed(() => images.value?.slice(0, visibleCount.value) || [])

const hasMore = computed(() => visibleCount.value < totalImages.value)
const canRetract = computed(() => visibleCount.value > initialCount)

const showMore = () => {
  visibleCount.value = Math.min(visibleCount.value + increment, totalImages.value)
}

const retract = () => {
  visibleCount.value = initialCount
  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// 3. Grid Logic
const getGridClass = (index: number) => {
  const pattern = [
    'col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-2', 'col-span-1 row-span-1',
    'col-span-2 row-span-1', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-2'
  ]
  const mobilePattern = [
    'col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-1'
  ]
  const mClass = mobilePattern[index % mobilePattern.length] || ''
  const dClass = (pattern[index % pattern.length] || '').split(' ').map(c => `md:${c}`).join(' ')
  return `${mClass} ${dClass}`
}

// 4. Loading States & Preloading
const loadedGridImages = ref<Set<string>>(new Set())
const isLightboxImageLoaded = ref(false)
const preloadedUrls = new Set<string>()

const markGridImageLoaded = (img: string) => {
  loadedGridImages.value.add(img)
}

const preloadForLightbox = (imgUrl: string) => {
  if (!imgUrl || preloadedUrls.has(imgUrl)) return
  preloadedUrls.add(imgUrl)
  const src = $img(imgUrl, { width: 1200, quality: 90, format: 'webp' })
  const image = new Image()
  image.src = src
}

// 5. Lightbox & Swipe Logic
const lightboxOpen = ref(false)
const currentIndex = ref(0)
const touchStartX = ref(0)
const swipeOffset = ref(0)
const isSwiping = ref(false)

const openLightbox = (index: number) => {
  currentIndex.value = index
  isLightboxImageLoaded.value = false
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const changeImage = (newIndex: number) => {
  if (currentIndex.value === newIndex) return
  isLightboxImageLoaded.value = false
  currentIndex.value = newIndex
}

const nextImage = () => {
  if (images.value && currentIndex.value < totalImages.value - 1) changeImage(currentIndex.value + 1)
}

const prevImage = () => {
  if (currentIndex.value > 0) changeImage(currentIndex.value - 1)
}

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0]?.clientX || 0
  isSwiping.value = true
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isSwiping.value) return
  swipeOffset.value = (e.touches[0]?.clientX || 0) - touchStartX.value
}

const handleTouchEnd = () => {
  isSwiping.value = false
  const threshold = 60
  if (swipeOffset.value > threshold) prevImage()
  else if (swipeOffset.value < -threshold) nextImage()
  swipeOffset.value = 0
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <section
    id="gallery"
    class="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
  >
    <UContainer>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
          Galerie <span class="text-blue-700">Foto</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Câteva dintre proiectele noastre recente.
        </p>
      </div>

      <div v-if="totalImages > 0">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense auto-rows-[150px] md:auto-rows-[200px] gap-3 md:gap-4">
          <div
            v-for="(img, index) in visibleImages"
            :key="img"
            :class="[
              'relative overflow-hidden rounded-xl md:rounded-2xl group bg-white dark:bg-slate-800 cursor-pointer transition-all duration-300 ring-1 ring-gray-900/5 dark:ring-white/10 shadow-lg shadow-gray-300/80 hover:shadow-2xl hover:shadow-gray-400/80 dark:shadow-none dark:hover:shadow-white/5',
              getGridClass(index)
            ]"
            @click="openLightbox(index)"
            @mouseenter="preloadForLightbox(img)"
            @touchstart.passive="preloadForLightbox(img)"
          >
            <transition name="fade">
              <div
                v-if="!loadedGridImages.has(img)"
                class="absolute inset-0 z-10 bg-gray-200 dark:bg-slate-700 animate-pulse flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-photo"
                  class="w-8 h-8 md:w-12 md:h-12 text-gray-400 dark:text-gray-500 opacity-50"
                />
              </div>
            </transition>

            <NuxtImg
              :src="img"
              :alt="`Proiect service auto ${index + 1}`"
              :loading="index < 4 ? 'eager' : 'lazy'"
              :fetchpriority="index < 4 ? 'high' : 'auto'"
              decoding="async"
              format="webp"
              quality="75"
              sizes="100vw md:50vw lg:33vw"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              :class="loadedGridImages.has(img) ? 'opacity-100' : 'opacity-0'"
              @load="markGridImageLoaded(img)"
            />

            <div class="absolute inset-0 z-20 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <UIcon
                name="i-heroicons-arrows-pointing-out"
                class="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg scale-50 group-hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div class="mt-12 flex flex-col items-center gap-6">
          <div class="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm">
            <span class="text-sm font-bold text-gray-600 dark:text-gray-400">
              Afișez <span class="text-blue-700 dark:text-blue-500">{{ visibleImages.length }}</span> din <span class="text-gray-900 dark:text-white">{{ totalImages }}</span> imagini
            </span>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <UButton
              v-if="hasMore"
              size="xl"
              class="bg-blue-700 hover:bg-[#00335a] text-white font-bold px-8 shadow-lg shadow-blue-900/20"
              icon="i-heroicons-arrow-path"
              @click="showMore"
            >
              Încarcă mai multe
            </UButton>
            <UButton
              v-if="canRetract"
              size="xl"
              variant="ghost"
              color="neutral"
              class="font-semibold hover:bg-gray-200 dark:hover:bg-slate-800"
              icon="i-heroicons-chevron-up"
              @click="retract"
            >
              Restrânge galeria
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>

  <Teleport to="body">
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-100 bg-white/80 dark:bg-slate-950/85 backdrop-blur-2xl flex flex-col overflow-hidden"
        @click.self="closeLightbox"
      >
        <div class="hidden">
          <NuxtImg
            v-if="images?.[currentIndex + 1]"
            :src="images[currentIndex + 1]"
            format="webp"
            quality="90"
            width="1200"
          />
          <NuxtImg
            v-if="images?.[currentIndex - 1]"
            :src="images[currentIndex - 1]"
            format="webp"
            quality="90"
            width="1200"
          />
        </div>

        <!-- <UButton
          icon="i-heroicons-x-mark"
          color="neutral"
          variant="solid"
          size="xl"
          class="absolute top-4 right-4 md:top-6 md:right-6 z-120 rounded-full shadow-lg hover:scale-105 transition-transform"
          aria-label="Închide galeria"
          @click="closeLightbox"
          @touchstart.stop="closeLightbox"
        />
        <div class="absolute top-4 left-4 md:top-6 md:left-6 z-110 bg-white/90 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-700 shadow-sm px-4 py-2 rounded-full">
          <span class="text-sm font-bold text-gray-900 dark:text-white">{{ currentIndex + 1 }} / {{ totalImages }}</span>
        </div> -->

        <UButton
          icon="i-heroicons-x-mark"
          variant="ghost"
          size="xl"
          class="absolute top-4 right-4 md:top-6 md:right-6 z-120 rounded-full shadow-lg hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-slate-800"
          aria-label="Închide galeria"
          @click="closeLightbox"
          @touchstart.stop="closeLightbox"
        />

        <div class="absolute top-4 left-4 md:top-6 md:left-6 z-110 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-slate-700 shadow-sm px-4 py-2 rounded-full">
          <span class="text-sm font-bold text-gray-900 dark:text-white">{{ currentIndex + 1 }} / {{ totalImages }}</span>
        </div>

        <div
          class="flex-1 flex items-center justify-center p-4 md:p-12 relative w-full h-full"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click.self="closeLightbox"
        >
          <UButton
            v-if="currentIndex > 0"
            icon="i-heroicons-chevron-left"
            color="neutral"
            variant="soft"
            size="xl"
            class="hidden md:flex absolute left-8 z-20 rounded-full shadow-xl hover:scale-110 transition-transform"
            @click.stop="prevImage"
          />

          <div
            v-show="!isLightboxImageLoaded"
            class="absolute inset-0 flex items-center justify-center z-0"
          >
            <UIcon
              name="i-heroicons-arrow-path"
              class="w-12 h-12 text-blue-700 dark:text-blue-500 animate-spin"
            />
          </div>

          <div
            class="relative w-full h-full flex items-center justify-center will-change-transform z-10"
            :style="{ transform: `translateX(${swipeOffset}px)`, transition: isSwiping ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }"
          >
            <transition
              name="fade"
              mode="out-in"
            >
              <NuxtImg
                v-if="images?.[currentIndex]"
                :key="currentIndex"
                :src="images[currentIndex]"
                alt="Proiect marit"
                class="max-w-full max-h-full object-contain rounded-xl shadow-2xl md:shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none transition-opacity duration-300"
                :class="isLightboxImageLoaded ? 'opacity-100' : 'opacity-0'"
                format="webp"
                quality="90"
                width="1200"
                decoding="async"
                draggable="false"
                @load="isLightboxImageLoaded = true"
              />
            </transition>
          </div>

          <UButton
            v-if="images && currentIndex < totalImages - 1"
            icon="i-heroicons-chevron-right"
            color="neutral"
            variant="soft"
            size="xl"
            class="hidden md:flex absolute right-8 z-20 rounded-full shadow-xl hover:scale-110 transition-transform"
            @click.stop="nextImage"
          />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
