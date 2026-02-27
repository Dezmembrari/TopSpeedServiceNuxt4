<script setup lang="ts">
const route = useRoute()
const { trackLead } = useTracking()

// 1. Fetch data
const { data: page } = await useAsyncData(`locatie-${route.params.city}`, () => {
  return queryCollection('locatii').path(route.path).first()
})

// 2. 404 Guard
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Zona nu a fost găsită', fatal: true })
}

// 3. SEO Metadata & Duplicate Content Shield
useSeoMeta({
  title: page.value?.title,
  titleTemplate: null,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://topspeedservice.eu/locatii/${route.params.city}`
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
      </div>

      <UContainer class="relative z-10 max-w-5xl mx-auto text-center px-4">
        <div class="flex justify-center mb-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 shadow-sm text-xs md:text-sm font-bold uppercase tracking-widest text-blue-800 dark:text-blue-400">
            <UIcon
              name="i-heroicons-map-pin-solid"
              class="w-4 h-4"
            />
            {{ page.heroBadge }} {{ page.cityName }}
          </div>
        </div>

        <!-- <h1
          class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-8 animate-fade-in-up drop-shadow-sm"
          style="animation-delay: 0.1s;"
        >
          Service Auto Premium la doar <br class="hidden md:block">
          <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300">
            {{ page.driveTime }}
          </span> de tine.
        </h1> -->

        <h2 class="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 animate-fade-in-up">
          Constatare Daune, Decontare RCA și Service Auto
        </h2>

        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-8 animate-fade-in-up drop-shadow-sm"
          style="animation-delay: 0.1s;"
        >
          Ai o daună auto în <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300">
            {{ page.cityName }}
          </span>?
          <span class="block mt-3 md:mt-4 text-3xl md:text-5xl lg:text-5xl text-gray-600 dark:text-gray-400">
            Service cu decontare la {{ page.driveTime }} distanță.
          </span>
        </h1>

        <p
          class="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style="animation-delay: 0.2s;"
        >
          Suntem alegerea nr. 1 pentru șoferii din <strong class="text-gray-900 dark:text-white">{{ page.neighborhoods }}</strong>. Ai o daună pe RCA sau CASCO? Îți oferim tractare rapidă, reparație impecabilă și <strong class="text-blue-700 dark:text-blue-400">mașină la schimb gratuită</strong>.
        </p>

        <div
          class="flex justify-center mb-10 animate-fade-in-up"
          style="animation-delay: 0.3s;"
        >
          <div class="relative w-full max-w-lg bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-5 rounded-3xl shadow-xl overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-r from-blue-500/5 to-green-500/5" />

            <div class="relative flex items-center justify-between gap-4">
              <div class="flex flex-col items-center gap-2 w-1/3">
                <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500 flex items-center justify-center z-10">
                  <UIcon
                    name="i-heroicons-user"
                    class="w-5 h-5 text-blue-600 dark:text-blue-400"
                  />
                </div>
                <span class="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200 text-center leading-tight">
                  Locația ta<br><span class="text-blue-700 dark:text-blue-400">{{ page.cityName }}</span>
                </span>
              </div>

              <div class="flex-1 flex flex-col items-center justify-center relative">
                <div class="w-full border-t-2 border-dashed border-gray-300 dark:border-slate-600 absolute top-5 z-0" />
                <div class="bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm z-10 flex items-center gap-1.5 -mt-3">
                  <UIcon
                    name="i-heroicons-clock"
                    class="w-4 h-4 text-orange-500"
                  />
                  <span class="text-xs font-black text-gray-800 dark:text-gray-200">{{ page.driveTime }}</span>
                </div>
                <span class="text-[10px] md:text-xs font-medium text-gray-600 dark:text-gray-400 mt-2 text-center">
                  {{ page.routeHighlight }}
                </span>
              </div>

              <div class="flex flex-col items-center gap-2 w-1/3">
                <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 border-2 border-green-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <UIcon
                    name="i-heroicons-wrench-screwdriver"
                    class="w-5 h-5 text-green-700 dark:text-green-400"
                  />
                </div>
                <span class="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200 text-center leading-tight">
                  Top Speed Service<br><span class="text-green-700 dark:text-green-400">Bragadiru</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style="animation-delay: 0.4s;"
        >
          <a
            href="tel:+40788990011"
            class="group relative flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-5 rounded-2xl shadow-xl shadow-blue-900/30 transition-all hover:-translate-y-1 w-full sm:w-auto"
            @click="trackLead('phone')"
          >
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
            class="border-2 font-bold px-8 py-5 rounded-2xl flex justify-center hover:bg-white dark:hover:bg-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm text-xl text-gray-900 dark:text-white w-full sm:w-auto transition-all hover:-translate-y-1"
            to="https://wa.me/40788990011"
            target="_blank"
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

        <div
          class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-400 animate-fade-in-up px-4"
          style="animation-delay: 0.5s;"
        >
          <span class="relative flex h-3 w-3 shrink-0">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
          </span>
          <span class="text-center sm:text-left">Atenție: Mașinile la schimb se acordă în limita flotei. <a
            href="tel:+40788990011"
            class="text-gray-900 dark:text-white underline decoration-orange-500 decoration-2 underline-offset-4 hover:text-orange-600 transition-colors"
            @click="trackLead('phone')"
          >Sună acum pentru rezervare.</a></span>
        </div>
      </UContainer>
    </section>

    <section class="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-transparent">
      <UContainer class="max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 relative z-10">
            <!-- <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              De ce să vii din <span class="text-blue-700 dark:text-blue-500">{{ page.cityName }}</span> până la noi?
            </h2> -->

            <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              De ce să vii din <span class="text-blue-700 dark:text-blue-500">{{ page.cityName }}</span> până la centrul nostru din Bragadiru?
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-400 font-medium">
              Pentru că știm cât de stresant este un accident. Nu trebuie să cauți disperat un service de cartier înghesuit. Îți oferim o experiență premium, spațiu, echipamente de top și mobilitate.
            </p>

            <div class="space-y-4">
              <div
                v-for="(benefit, index) in [
                  `Tractare gratuită direct din ${page.cityName} pentru dosare RCA`,
                  'Mașină de înlocuire garantată pe durata reparației',
                  'Fără birocrație: gestionăm noi relația cu asiguratorul tău'
                ]"
                :key="index"
                class="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm"
              >
                <div class="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg shrink-0">
                  <UIcon
                    name="i-heroicons-check-circle-solid"
                    class="w-6 h-6 text-green-700 dark:text-green-400"
                  />
                </div>
                <span class="font-bold text-gray-800 dark:text-gray-200 mt-1">{{ benefit }}</span>
              </div>
            </div>

            <UAlert
              icon="i-heroicons-clock"
              color="warning"
              variant="subtle"
              title="Nu amâna deschiderea dosarului!"
              description="Orice întârziere îți poate bloca mașina în service săptămâni întregi din cauza birocrației asiguratorilor. Lasă-ne să preluăm noi dosarul chiar azi."
              class="mt-8 rounded-2xl shadow-sm border border-orange-200 dark:border-orange-900/50 text-left bg-orange-50/80 dark:bg-orange-950/20 [&>div>h3]:text-orange-900 [&>div>h3]:font-bold dark:[&>div>h3]:text-orange-400 [&>div>div]:text-orange-950 dark:[&>div>div]:text-orange-200 [&>div>span>span]:text-orange-600 dark:[&>div>span>span]:text-orange-400"
            />
          </div>

          <div class="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-700 relative overflow-hidden text-center z-10 flex flex-col items-center justify-center">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />

            <div class="inline-flex items-center justify-center gap-2 bg-black/40 text-orange-300 px-4 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold mb-8 border border-white/10 shadow-inner w-full sm:w-auto leading-snug">
              <UIcon
                name="i-heroicons-signal"
                class="w-4 h-4 animate-pulse shrink-0"
              />
              <span>Platformă activă acum în <span class="text-white">{{ page.cityName }}</span></span>
            </div>

            <UIcon
              name="i-heroicons-truck"
              class="w-16 h-16 text-orange-400 mb-6 mx-auto"
            />
            <h3 class="text-2xl md:text-3xl font-black text-white mb-4">
              Mașina nedeplasabilă?
            </h3>
            <p class="text-slate-300 mb-8 font-medium">
              Nu te panica. Trimitem platforma noastră exact la locația ta în cel mai scurt timp.
            </p>
            <UButton
              size="xl"
              class="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 w-full justify-center rounded-xl transition-transform hover:-translate-y-1"
              to="tel:+40788990011"
              @click="trackLead('phone')"
            >
              SOLICITĂ PLATFORMA ACUM
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <LazyHomeServicesAltSection />
    <LazyHomeInsuranceSection />
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
