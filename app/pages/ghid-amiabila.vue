<script setup lang="ts">
useSeoMeta({
  title: 'Cum completezi Constatarea Amiabilă Auto (Ghid Pas cu Pas)',
  description: 'Ai fost implicat într-un accident ușor? Află cum să completezi corect formularul de constatare amiabilă pentru a evita respingerea dosarului.',
  ogTitle: 'Ghid Completare Constatare Amiabilă | Top Speed Service',
  ogDescription: 'Evită greșelile care blochează dosarul de daună. Urmează ghidul nostru pas cu pas.'
})

const steps = [
  {
    title: 'Asigură zona și fă poze',
    desc: 'Scoate mașinile în afara părții carosabile. Înainte de a le muta, fă neapărat 3-4 poze clare cu poziția lor, numerele de înmatriculare și daunele.',
    icon: 'i-heroicons-camera',
    color: 'blue'
  },
  {
    title: 'Când se folosește Amiabila?',
    desc: 'DOAR dacă: sunt implicate maxim 2 vehicule, NU există victime (nici măcar răni ușoare) și NU au fost lovite alte obiecte (stâlpi, garduri). Altfel, sună la 112.',
    icon: 'i-heroicons-shield-exclamation',
    color: 'orange'
  },
  {
    title: 'Folosiți un SINGUR formular',
    desc: 'Un șofer completează coloana albastră (A), celălalt coloana galbenă (B). Nu contează cine este vinovatul și cine alege A sau B.',
    icon: 'i-heroicons-document-duplicate',
    color: 'blue'
  },
  {
    title: 'Datele necesare (Rândurile 6-8)',
    desc: 'Aveți nevoie de: Permis, Talon și Polița RCA. Verificați obligatoriu ca polița RCA a celuilalt șofer să fie valabilă la data accidentului!',
    icon: 'i-heroicons-identification',
    color: 'blue'
  },
  {
    title: 'Împrejurările (Bifele de pe centru)',
    desc: 'Bifați cu "X" căsuțele din mijloc care se potrivesc situației (ex: "Ieșea dintr-o parcare"). Treceți numărul total de bife jos. Aici se stabilește vinovăția!',
    icon: 'i-heroicons-check-circle',
    color: 'green'
  },
  {
    title: 'Schița accidentului',
    desc: 'Desenați simplu momentul impactului. Includeți: direcția de mers (săgeți), poziția mașinilor (A și B), axul drumului, semnele rutiere rutiere și numele străzii.',
    icon: 'i-heroicons-pencil-square',
    color: 'blue'
  },
  {
    title: 'Semnăturile (OBLIGATORIU)',
    desc: 'Documentul e NUL dacă nu e semnat de ambii șoferi (Rubrica 15). Semnarea amiabilei nu este o recunoaștere a vinovăției, ci doar un acord privind faptele.',
    icon: 'i-heroicons-pencil-solid',
    color: 'red'
  }
]
</script>

<template>
  <div class="min-h-screen font-sans bg-gray-50 dark:bg-[#030712] text-gray-900 dark:text-white pb-24 md:pb-0">
    <section class="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-[#001429] dark:bg-[#020813] text-white border-b border-blue-900/50">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div class="absolute top-0 right-0 w-100 h-100 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      <UContainer class="relative z-10 max-w-3xl px-4">
        <div class="mb-8">
          <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Ghid: Cum completezi <br class="hidden sm:block"> <span class="text-blue-400">Constatarea Amiabilă</span>
          </h1>
          <p class="text-base md:text-lg text-blue-100/80 font-medium leading-relaxed">
            Ești la locul accidentului? Relaxează-te. Urmează pașii de mai jos pentru a evita greșelile care pot duce la respingerea dosarului de daună.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <UButton
            size="xl"
            class="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-2xl flex justify-center w-full shadow-lg shadow-orange-900/30 transition-transform active:scale-95"
            icon="i-heroicons-truck"
            to="tel:+40788990011"
          >
            Mașina e nedeplasabilă? Solicită Tractare
          </UButton>

          <UButton
            size="xl"
            class="bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-2xl flex justify-center w-full shadow-lg shadow-green-900/30 transition-transform active:scale-95"
            icon="i-line-md-phone-call-loop"
            to="tel:+40788990011"
          >
            Apelează un Expert (Gratuit)
          </UButton>
        </div>
      </UContainer>
    </section>

    <section class="py-8 md:py-12 bg-gray-50 dark:bg-[#030712] relative z-20 -mt-6 rounded-t-3xl md:rounded-t-[3rem] shadow-[0_-15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_-15px_40px_rgba(0,0,0,0.5)] border-t border-gray-200/50 dark:border-slate-800">
      <UContainer class="max-w-3xl">
        <div class="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-4xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-gray-200/50 dark:shadow-none">
          <div class="flex items-center gap-5 text-left w-full md:w-auto">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/50">
              <UIcon
                name="i-heroicons-document-arrow-down"
                class="w-7 h-7"
              />
            </div>
            <div>
              <h3 class="text-xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">
                Ai nevoie de formularul PDF?
              </h3>
              <p class="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
                Descarcă gratuit versiunea oficială pentru print.
              </p>
            </div>
          </div>

          <UButton
            size="xl"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-transform active:scale-95 w-full md:w-auto flex justify-center shrink-0"
            to="/documents/formular-constatare-amiabila.pdf"
            target="_blank"
            external
            download
          >
            <UIcon
              name="i-heroicons-arrow-down-tray"
              class="w-5 h-5 mr-1"
            />
            Descarcă PDF
          </UButton>
        </div>

        <div class="mt-5 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 rounded-2xl p-4 md:p-5 flex items-start gap-3 md:gap-4 shadow-sm">
          <div class="bg-white dark:bg-orange-900/50 p-1.5 rounded-xl shrink-0 shadow-sm border border-orange-100 dark:border-orange-800/50 mt-0.5">
            <UIcon
              name="i-heroicons-exclamation-triangle-solid"
              class="w-5 h-5 text-orange-500"
            />
          </div>
          <p class="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            <strong class="text-gray-900 dark:text-white">Atenție la printare:</strong> Formularul oficial este autocopiativ. Dacă îl printezi pe o foaie A4 normală, ești obligat să printezi <strong>2 exemplare</strong>, să le completați identic și să le semnați în original pe ambele.<br class="mt-1.5 block">
            <span class="text-blue-700 dark:text-blue-400 font-bold inline-flex items-center gap-1">
              <UIcon
                name="i-heroicons-light-bulb"
                class="w-4 h-4"
              />
              Recomandare: Vino direct la service, îți dăm noi un formular pretipărit gratuit și te ajutăm cu el!
            </span>
          </p>
        </div>
      </UContainer>
    </section>

    <!-- <section class="py-10 md:py-20 relative">
      <UContainer class="max-w-3xl">
        <div class="flex flex-col gap-4 md:gap-6">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-5 md:p-8 border border-gray-200 dark:border-slate-800 shadow-sm overflow-hidden"
          >
            <span class="absolute -bottom-6 -right-2 text-[140px] md:text-[180px] font-black text-gray-50 dark:text-slate-800/40 leading-none select-none pointer-events-none z-0">
              {{ index + 1 }}
            </span>

            <div class="relative z-10 flex gap-4 md:gap-6">
              <div
                class="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md border border-white/20"
                :class="{
                  'bg-blue-600 text-white': step.color === 'blue',
                  'bg-orange-500 text-white': step.color === 'orange',
                  'bg-green-600 text-white': step.color === 'green',
                  'bg-red-600 text-white': step.color === 'red'
                }"
              >
                <UIcon
                  :name="step.icon"
                  class="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <div class="pt-1 md:pt-2">
                <h3 class="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 md:mb-2 tracking-tight">
                  {{ step.title }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed pr-2 md:pr-10">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section> -->

    <section class="py-10 md:py-20 relative">
      <UContainer class="max-w-3xl">
        <div class="flex flex-col gap-4 md:gap-6">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-5 md:p-8 border border-gray-200 dark:border-slate-800 shadow-sm overflow-hidden transform-gpu"
          >
            <span class="absolute -bottom-2 md:-bottom-4 right-2 md:right-6 text-[120px] md:text-[150px] font-black text-gray-200 dark:text-slate-800/40 leading-none select-none pointer-events-none z-0">
              {{ index + 1 }}
            </span>

            <div class="relative z-10 flex gap-4 md:gap-6">
              <div
                class="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md border border-white/20"
                :class="{
                  'bg-blue-600 text-white': step.color === 'blue',
                  'bg-orange-500 text-white': step.color === 'orange',
                  'bg-green-600 text-white': step.color === 'green',
                  'bg-red-600 text-white': step.color === 'red'
                }"
              >
                <UIcon
                  :name="step.icon"
                  class="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              <div class="pt-1 md:pt-2">
                <h3 class="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 md:mb-2 tracking-tight">
                  {{ step.title }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed pr-2 md:pr-10">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-12 md:py-20 bg-white dark:bg-[#030712] relative overflow-hidden border-t border-gray-200 dark:border-slate-800/50">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 h-75 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <UContainer class="max-w-3xl relative z-10">
        <div class="bg-gray-50/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 border border-gray-200 dark:border-slate-700 shadow-xl text-center">
          <div class="w-16 h-16 md:w-20 md:h-20 mx-auto bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-green-200 dark:border-green-800/50">
            <UIcon
              name="i-heroicons-document-check-solid"
              class="w-8 h-8 md:w-10 md:h-10"
            />
          </div>

          <h2 class="text-2xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Ai completat formularul?
          </h2>
          <p class="text-gray-600 dark:text-gray-300 font-medium text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Perfect! Stresul tău s-a terminat. Vino cu actele la Top Speed Service. Ne ocupăm de deschiderea dosarului, decontare directă și primești <strong class="text-blue-600 dark:text-blue-400"><NuxtLink

              to="/masina-la-schimb"

              class="text-blue-700 dark:text-blue-400 font-bold underline decoration-blue-700/30 dark:decoration-blue-400/30 decoration-2 underline-offset-4 hover:decoration-blue-700 dark:hover:decoration-blue-400 transition-all"
            >

              mașină la schimb gratuită

            </NuxtLink></strong>.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <UButton
              size="xl"
              class="bg-green-600 hover:bg-green-500 text-white font-bold py-4 md:py-5 shadow-xl shadow-green-900/20 text-base md:text-lg rounded-2xl flex justify-center w-full sm:w-auto transition-transform active:scale-95"
              icon="i-line-md-phone-call-loop"
              to="tel:+40788990011"
            >
              Programează Constatarea
            </UButton>
            <UButton
              size="xl"
              variant="outline"
              color="neutral"
              class="border-2 font-bold py-4 md:py-5 text-base md:text-lg rounded-2xl bg-white dark:bg-slate-900 flex justify-center w-full sm:w-auto transition-transform active:scale-95"
              to="https://wa.me/40788990011"
              target="_blank"
              icon="i-line-md-chat"
            >
              Trimite poze pe WhatsApp
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <FloatingActionBar />
  </div>
</template>
