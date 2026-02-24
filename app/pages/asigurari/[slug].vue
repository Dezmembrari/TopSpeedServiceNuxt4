<script setup lang="ts">
import { computed } from 'vue'

const { trackLead } = useTracking()
const route = useRoute()

// 1. Fetch data - Nuxt auto-infers everything from content.config.ts!
const { data: page } = await useAsyncData(`asigurare-${route.params.slug}`, () => {
  return queryCollection('asigurari').path(route.path).first()
})

// 2. 404 Guard - Added 'fatal: true' for Nuxt 4 best practice
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Pagina nu a fost găsită', fatal: true })
}

// 3. Dynamic Theme Dictionary
const colorMap = {
  blue: 'from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300',
  green: 'from-green-700 to-green-500 dark:from-green-500 dark:to-green-300',
  red: 'from-red-700 to-red-500 dark:from-red-500 dark:to-red-300',
  yellow: 'from-yellow-600 to-orange-500 dark:from-yellow-400 dark:to-orange-400',
  gray: 'from-gray-700 to-gray-500 dark:from-gray-400 dark:to-gray-300'
}

const brandGradient = computed(() => {
  const color = page.value?.themeColor || 'blue'
  return colorMap[color as keyof typeof colorMap] || colorMap.blue
})

// 4. SEO Metadata
useSeoMeta({
  title: page.value?.title,
  titleTemplate: null, // Prevents app.vue from appending the brand name.
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description
})

// canonical URL to prevent duplicate content issues penalizing SEO rankings
useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://topspeedservice.eu/asigurari/${route.params.slug}`
    }
  ]
})
</script>

<template>
  <div
    v-if="page"
    class="min-h-screen font-sans bg-gray-50 dark:bg-[#050a14] text-gray-900 dark:text-white transition-colors duration-300"
  >
    <section class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-gray-200/50 dark:border-blue-900/30">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-[0.04] dark:opacity-[0.08] mix-blend-overlay" />
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-blue-100/40 via-gray-50 to-white dark:from-blue-900/30 dark:via-[#050a14] dark:to-[#050a14]" />

        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-700/10 rounded-full blur-3xl animate-pulse"
          style="animation-duration: 8s;"
        />
        <div
          class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 dark:bg-green-700/10 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s; animation-duration: 10s;"
        />
      </div>

      <UContainer class="relative z-10 max-w-5xl mx-auto text-center px-4">
        <div
          v-if="page.accentText"
          class="flex justify-center mb-8 animate-fade-in-up"
        >
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm text-xs md:text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
            <UIcon
              name="i-heroicons-star-solid"
              class="w-4 h-4 text-yellow-500"
            />
            {{ page.accentText }}
          </div>
        </div>

        <div class="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-10 animate-fade-in-up">
          <div class="flex items-center gap-2.5 px-4 md:px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border-2 border-blue-100 dark:border-blue-900/50 shadow-md shadow-blue-900/5 backdrop-blur-md">
            <div class="bg-blue-600/10 dark:bg-blue-500/20 p-1.5 rounded-lg flex items-center justify-center">
              <UIcon
                name="i-line-md-check-all"
                class="w-4 h-4 md:w-5 md:h-5 text-blue-700 dark:text-blue-400"
              />
            </div>
            <span class="text-xs md:text-sm font-black uppercase tracking-wider text-gray-800 dark:text-gray-100">Service RAR</span>
          </div>

          <div class="flex items-center gap-2.5 px-4 md:px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border-2 border-green-100 dark:border-green-900/50 shadow-md shadow-green-900/5 backdrop-blur-md">
            <div class="bg-green-600/10 dark:bg-green-500/20 p-1.5 rounded-lg flex items-center justify-center">
              <UIcon
                name="i-line-md-confirm-circle"
                class="w-4 h-4 md:w-5 md:h-5 text-green-700 dark:text-green-400"
              />
            </div>
            <span class="text-xs md:text-sm font-black uppercase tracking-wider text-gray-800 dark:text-gray-100">Decontare Directă</span>
          </div>

          <div class="flex items-center gap-2.5 px-4 md:px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border-2 border-orange-100 dark:border-orange-900/50 shadow-md shadow-orange-900/5 backdrop-blur-md">
            <div class="bg-orange-600/10 dark:bg-orange-500/20 p-1.5 rounded-lg flex items-center justify-center">
              <UIcon
                name="i-heroicons-truck"
                class="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400"
              />
            </div>
            <span class="text-xs md:text-sm font-black uppercase tracking-wider text-gray-800 dark:text-gray-100">Tractare Proprie</span>
          </div>
        </div>

        <div
          class="inline-flex flex-col items-center justify-center mb-12 animate-fade-in-up"
          style="animation-delay: 0.1s;"
        >
          <div class="relative group p-1 rounded-3xl bg-linear-to-br from-gray-200 via-white to-gray-200 dark:from-blue-900/40 dark:via-slate-900/40 dark:to-blue-900/40 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,30,100,0.3)] transition-transform duration-300 hover:scale-[1.02]">
            <div class="absolute inset-0 bg-white dark:bg-slate-900 rounded-[22px] m-0.5 z-0" />
            <div class="relative z-10 bg-white rounded-3xl px-12 py-8 border-[3px] border-white ring-1 ring-gray-900/5 overflow-hidden flex flex-col items-center justify-center">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-400/20 dark:bg-blue-500/20 blur-[60px] pointer-events-none" />

              <NuxtImg
                :src="page.insurerLogo"
                :alt="`Siglă ${page.insurerName}`"
                class="h-16 md:h-20 max-w-50 object-contain relative z-20 drop-shadow-sm mx-auto block"
                :class="{
                  'brightness-0': page.insurerName === 'Unica' || page.insurerName === 'Axeria Iard',
                  'rounded-xl md:rounded-2xl': page.insurerName === 'Hellas Direct'
                }"
                loading="eager"
              />

              <span
                v-if="page.insurerName === 'Hellas Direct'"
                class="text-xl md:text-2xl font-black text-gray-900 mt-3 tracking-tight relative z-20"
              >
                Hellas Direct
              </span>

              <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-4 text-center">
                Dosare de daună acceptate
              </p>
            </div>
          </div>
        </div>

        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8 animate-fade-in-up drop-shadow-sm"
          style="animation-delay: 0.2s;"
        >
          Ai o daună auto la <span class="relative inline-block mt-2 md:mt-0">
            <span class="absolute inset-x-0 bottom-2 h-1/3 bg-gray-200 dark:bg-slate-800 -skew-x-6 -z-10" />
            <span
              class="bg-linear-to-r bg-clip-text text-transparent"
              :class="brandGradient"
            >
              {{ page.insurerName }}
            </span>
          </span>?
        </h1>

        <p
          class="text-xl md:text-3xl text-gray-700 dark:text-gray-200 font-bold mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style="animation-delay: 0.3s;"
        >
          Transformăm stresul în liniște. Reparație premium cu <strong class="text-green-700 dark:text-green-400 underline decoration-4 decoration-green-700/20 dark:decoration-green-400/30 underline-offset-4">ZERO costuri</strong> pentru tine și <strong class="text-blue-700 dark:text-blue-400">
            <NuxtLink
              to="/masina-la-schimb"
              class="text-blue-700 dark:text-blue-400 font-bold underline decoration-blue-700/30 dark:decoration-blue-400/30 decoration-2 underline-offset-4 hover:decoration-blue-700 dark:hover:decoration-blue-400 transition-all"
            >
              mașină la schimb gratuită
            </NuxtLink>
          </strong> imediat.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style="animation-delay: 0.4s;"
        >
          <a
            href="tel:+40788990011"
            class="group relative flex items-center justify-center gap-3 bg-green-700 hover:bg-[#1e5713] text-white px-8 py-5 rounded-2xl shadow-xl shadow-green-900/30 transition-all hover:-translate-y-1 w-full sm:w-auto"
            aria-label="Sună-ne pentru constatare"
            @click="trackLead('phone')"
          >
            <div class="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <UIcon
              name="i-line-md-phone-call-loop"
              mode="svg"
              class="w-7 h-7 shrink-0"
            />
            <span class="font-bold text-xl whitespace-nowrap">Sună pentru Constatare</span>
          </a>

          <UButton
            size="xl"
            variant="outline"
            color="neutral"
            class="border-2 font-bold px-8 py-5 rounded-2xl flex justify-center hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-xl text-gray-900 dark:text-white w-full sm:w-auto transition-all hover:-translate-y-1"
            to="https://wa.me/40788990011"
            target="_blank"
            aria-label="Scrie-ne pe WhatsApp"
            @click="trackLead('whatsapp')"
          >
            <template #leading>
              <UIcon
                name="i-line-md-chat"
                class="w-7 h-7 text-green-600"
              />
            </template>
            Scrie-ne pe WhatsApp
          </UButton>
        </div>
      </UContainer>
    </section>

    <section class="py-10 bg-blue-800 dark:bg-[#00284a] text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <UContainer class="max-w-4xl text-center relative z-10">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 rounded-3xl p-2">
          <div class="w-16 h-16 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center shrink-0 shadow-lg">
            <UIcon
              name="i-heroicons-scale-solid"
              class="w-8 h-8 text-blue-200"
            />
          </div>
          <div class="text-left">
            <h3 class="text-xl font-black mb-2 text-blue-100">
              Este DREPTUL tău legal să îți alegi service-ul.
            </h3>
            <p class="text-lg font-medium leading-relaxed text-blue-50/90">
              Nu ești obligat să accepți service-urile partenere ale asiguratorului. Fiind autorizați RAR, procesăm dosarele <span class="font-bold text-white bg-blue-900/50 px-2 py-0.5 rounded">{{ page.insurerName }}</span> prin decontare directă. Tu primești o reparație de calitate superioară, ei plătesc factura.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-16 md:py-24 bg-gray-100/50 dark:bg-[#030712]">
      <UContainer class="max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Cum funcționează reparația pe <span class="text-blue-700">Asigurare</span>?
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
            Am simplificat procesul la maximum, astfel încât tu să îți continui ziua fără stres.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-200 dark:border-slate-800 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-b from-white to-gray-50 dark:from-slate-800/20 dark:to-slate-900 pointer-events-none z-0" />
            <div class="absolute top-0 right-0 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-colors z-0" />

            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shadow-inner border border-blue-200 dark:border-blue-800/60 relative">
                  <span class="text-2xl font-black">1</span>
                  <div class="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-slate-700">
                    <UIcon
                      name="i-line-md-clipboard-check-twotone"
                      class="w-6 h-6 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                </div>
              </div>

              <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Aducem mașina & Dosarul
              </h3>
              <p class="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Mașina nu se poate deplasa? <strong class="text-gray-800 dark:text-gray-200">O aducem noi cu platforma proprie.</strong> Apoi, deschidem dosarul de daună direct la noi în service și preluăm dialogul cu inspectorii <span class="text-blue-600 dark:text-blue-400 font-bold">{{ page.insurerName }}</span>.
              </p>
            </div>
          </div>

          <div class="group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-200 dark:border-slate-800 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-b from-white to-gray-50 dark:from-slate-800/20 dark:to-slate-900 pointer-events-none z-0" />
            <div class="absolute top-0 right-0 w-40 h-40 bg-green-500/15 rounded-full blur-2xl group-hover:bg-green-500/25 transition-colors z-0" />

            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center shadow-inner border border-green-200 dark:border-green-800/60 relative">
                  <span class="text-2xl font-black">2</span>
                  <div class="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-slate-700">
                    <UIcon
                      name="i-line-md-star-pulsating-twotone-loop"
                      class="w-6 h-6 text-green-600 dark:text-green-400"
                    />
                  </div>
                </div>
              </div>

              <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Îți dăm Mașină la Schimb
              </h3>
              <p class="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-4">
                Nu te lăsăm pieton. Pe toată durata reparației primești o
                <strong class="text-gray-800 dark:text-gray-200">
                  <NuxtLink
                    to="/masina-la-schimb"
                    class="text-blue-700 dark:text-blue-400 font-bold underline decoration-blue-700/30 dark:decoration-blue-400/30 decoration-2 underline-offset-4 hover:decoration-blue-700 dark:hover:decoration-blue-400 transition-all"
                  >
                    mașină la schimb gratuită
                  </NuxtLink>
                </strong>
                din flota noastră proprie, conform condițiilor din poliță.
              </p>

              <div class="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 px-3 py-1.5 rounded-lg text-xs font-bold border border-orange-100 dark:border-orange-800/50">
                <div class="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
                În limita disponibilității. Rezervă acum!
              </div>
            </div>
          </div>

          <div class="group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-200 dark:border-slate-800 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-b from-white to-gray-50 dark:from-slate-800/20 dark:to-slate-900 pointer-events-none z-0" />
            <div class="absolute top-0 right-0 w-40 h-40 bg-blue-600/15 rounded-full blur-2xl group-hover:bg-blue-600/25 transition-colors z-0" />

            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-lg border border-blue-600 relative">
                  <span class="text-2xl font-black">3</span>
                  <div class="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-slate-700">
                    <UIcon
                      name="i-line-md-cog-loop"
                      class="w-6 h-6 text-blue-700 dark:text-blue-400"
                    />
                  </div>
                </div>
              </div>

              <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Reparație Premium
              </h3>
              <p class="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Realizăm reparația folosind exclusiv materiale premium și piese conforme. La final, noi facturăm reparația direct către <strong class="text-gray-800 dark:text-gray-200">{{ page.insurerName }}</strong>. <span class="text-green-600 dark:text-green-500 font-bold">Cost zero pentru tine.</span>
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <LazyFunnelDocumentsSection />
    <LazyHomeServicesAltSection />
    <!-- <LazyHomeGallerySection /> -->
    <LazyFunnelFAQSection />
    <LazyHomeContactSection />

    <FloatingActionBar />
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  opacity: 0;
}
</style>
