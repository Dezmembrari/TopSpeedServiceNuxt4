<script setup lang="ts">
const { isOpen, statusText } = useShopSchedule()
const { trackLead } = useTracking()

const scrollToSection = (id: string) => {
  const element = document.querySelector(id)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative pt-32 md:pt-48 min-h-[92vh] md:min-h-[90vh] flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <!-- src="/service.jpeg"
        width="2000"
        height="1125"
        densities="x1 x2"
        sizes="100vw sm:100vw md:100vw lg:1920px" -->
      <NuxtImg
        src="/hero.webp"
        alt="Service Auto Bragadiru Top Speed"
        class="w-full h-full object-cover object-center md:object-[50%_40%]"
        loading="eager"
        quality="50"
        format="webp"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        fetchpriority="high"
      />
      <!-- <NuxtPicture
        src="/hero.webp"
        alt="Service Auto Bragadiru Top Speed"
        :img-attrs="{
          class: 'w-full h-full object-cover object-center md:object-[50%_40%] transition-transform duration-[20s] hover:scale-105',
          fetchpriority: 'high',
          loading: 'eager'
        }"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
        quality="60"
        format="avif,webp"
        densities="x1 x2"
      /> -->

      <!-- <NuxtPicture
        src="/hero.webp"
        alt="Service Auto Bragadiru Top Speed"
        :img-attrs="{
          class: 'w-full h-full object-cover object-center md:object-[50%_40%]',
          fetchpriority: 'high',
          loading: 'eager'
        }"
        quality="50"
        format="avif,webp"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        :discover="true"
      /> -->
      <div class="absolute inset-0 bg-linear-to-b from-gray-100/80 via-gray-100/50 to-gray-100/80 md:bg-linear-to-r md:from-gray-100/90 md:via-gray-100/60 md:to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950/40" />
    </div>

    <div class="relative z-10 w-full px-4 md:px-12 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      <div class="col-span-12 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 animate-fade-in-up will-change-transform">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm shadow-sm backdrop-blur-md border transition-colors duration-300"
          :class="isOpen
            ? 'bg-green-100/90 dark:bg-green-900/60 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
            : 'bg-red-100/90 dark:bg-red-900/60 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'"
        >
          <span class="relative flex h-3 w-3">
            <span
              v-if="isOpen"
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            />
            <span
              class="relative inline-flex rounded-full h-3 w-3"
              :class="isOpen ? 'bg-green-700' : 'bg-red-500'"
            />
          </span>
          {{ statusText }}
        </div>

        <div class="space-y-2 md:space-y-4">
          <h2 class="text-blue-700 font-extrabold tracking-wide uppercase text-lg md:text-2xl">
            Centru Constatare Daune
          </h2>
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1]">
            SERVICE <span class="bg-linear-to-r from-green-700 to-green-500 bg-clip-text text-transparent">AUTO</span><br>
            COMPLET
          </h1>
        </div>

        <p class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-lg leading-relaxed px-2 md:px-0 font-medium">
          Transformăm accidentele în experiențe simple. Oferim
          <strong class="text-blue-700 dark:text-[#4facfe] underline decoration-green-700 decoration-2 underline-offset-2">mașină la schimb</strong> și
          <strong class="text-blue-700 dark:text-[#4facfe] underline decoration-green-700 decoration-2 underline-offset-2">tractare gratuită</strong>.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 pt-4">
          <a
            href="tel:+40788990011"
            class="hidden md:flex group relative items-center justify-center gap-3 bg-green-700 hover:bg-[#1e5713] text-white px-12 py-5 rounded-2xl shadow-xl shadow-green-900/30 transition-all hover:-translate-y-1"
            @click="trackLead('phone')"
          >
            <div class="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <UIcon
              name="i-line-md-phone-call-loop"
              mode="svg"
              class="w-8 h-8 shrink-0"
            />
            <span class="font-bold text-xl whitespace-nowrap">Sună Acum</span>
          </a>
          <UButton
            size="xl"
            variant="outline"
            color="neutral"
            block
            class="border-2 font-bold px-10 py-5 rounded-2xl hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-lg text-gray-900 dark:text-white"
            @click="scrollToSection('#services')"
          >
            Vezi Oferta
          </UButton>
        </div>
      </div>

      <div class="hidden md:flex col-span-5 justify-end">
        <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/40 dark:border-white/10 max-w-xs transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <div class="flex items-center gap-4 mb-4">
            <UIcon
              name="i-logos-google-icon"
              class="w-10 h-10"
            />
            <div>
              <p class="font-bold text-lg text-gray-900 dark:text-white">
                Top Speed Service
              </p>
              <div class="flex text-yellow-400 text-sm">
                <UIcon
                  v-for="i in 5"
                  :key="i"
                  name="i-heroicons-star-solid"
                />
              </div>
            </div>
          </div>
          <p class="text-gray-800 dark:text-gray-200 text-sm italic font-medium">
            "Profesionalism și rapiditate. Mașina la schimb a fost un mare plus. Recomand cu încredere!"
          </p>
          <div class="mt-3 flex items-center gap-2">
            <span class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">A.P.</span>
            <span class="text-xs text-gray-500 font-semibold">Client Top Speed Service</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
