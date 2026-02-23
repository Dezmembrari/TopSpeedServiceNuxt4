<script setup lang="ts">
useSeoMeta({
  title: 'Mașină la Schimb Gratuită București/Ilfov | Top Speed Service',
  titleTemplate: null,
  description: 'Ai fost lovit în trafic? Repară mașina pe RCA-ul vinovatului la Top Speed Service și primești o mașină la schimb gratuită, fără reclame pe ea, pe toată durata reparației.',
  ogTitle: 'Mașină la Schimb Gratuită pe RCA | Top Speed Service',
  ogDescription: 'Nu rămâne pieton. Îți oferim mașină de înlocuire gratuită, elegantă și fără reclame colantate, decontată direct de asigurator.',
  ogImage: '/images/og-masina-schimb.jpg'
})

const steps = [
  {
    title: 'Deschidem Dosarul',
    desc: 'Vii la noi cu documentele și formularul de constatare amiabilă (sau procesul verbal de la poliție). Ne ocupăm de deschiderea dosarului de daună pe RCA-ul vinovatului.',
    icon: 'i-heroicons-document-text',
    color: 'blue'
  },
  {
    title: 'Lăsați Mașina Avariată',
    desc: 'După acceptul de intrare în reparație de la asigurator, lăsați mașina avariată în siguranță la noi în service pentru a fi reparată.',
    icon: 'i-heroicons-wrench-screwdriver',
    color: 'orange'
  },
  {
    title: 'Plecați cu Mașina la Schimb',
    desc: 'Primiți pe loc cheile de la mașina de înlocuire. O puteți folosi gratuit pe toată perioada în care mașina dumneavoastră se află în reparație.',
    icon: 'i-heroicons-key',
    color: 'green'
  }
]

const faqs = [
  {
    q: 'Cine plătește pentru mașina la schimb?',
    a: 'Costul închirierii este decontat 100% de către compania de asigurări a șoferului vinovat, conform normelor A.S.F. Nu veți plăti nimic din buzunar.'
  },
  {
    q: 'Mașinile au colantări sau reclame pe ele?',
    a: 'Absolut deloc. Știm că discreția este importantă, așa că mașinile noastre la schimb nu au niciun fel de reclamă, autocolant sau logo pe ele. Nimeni nu va ști că folosiți o mașină de la service.'
  },
  {
    q: 'Cât timp pot păstra mașina?',
    a: 'Aveți dreptul la mașina de înlocuire pe toată perioada de reparație a autovehiculului dumneavoastră, calculată conform devizului tehnologic aprobat de asigurator.'
  },
  {
    q: 'Ce se întâmplă cu combustibilul?',
    a: 'Mașina la schimb vi se predă cu plinul făcut sau cu o anumită cantitate de combustibil. Singura dumneavoastră obligație este să o returnați cu aceeași cantitate.'
  },
  {
    q: 'Pot primi mașină la schimb dacă reparația e pe CASCO?',
    a: 'Acordarea mașinii la schimb pe polița CASCO depinde strict de clauzele contractului dumneavoastră (unele polițe includ acest beneficiu, altele nu). Pe RCA-ul vinovatului, însă, este un drept garantat prin lege.'
  }
]
</script>

<template>
  <main class="min-h-screen bg-gray-50 dark:bg-[#030712] pt-24 pb-16">
    <section class="relative py-12 md:py-20 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <UContainer class="relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-bold text-sm mb-6 border border-green-200 dark:border-green-800/30 shadow-sm">
            <UIcon
              name="i-heroicons-check-circle-solid"
              class="w-5 h-5"
            />
            <span>Serviciu 100% Decontat prin RCA</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Ai dreptul la <span class="text-blue-700 dark:text-blue-500">Mașină la Schimb.</span><br class="hidden md:block">
            Nu rămâne pieton.
          </h1>

          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            La Top Speed Service, îți oferim o <strong>mașină de înlocuire gratuită</strong> pe toată durata reparației. Costurile sunt suportate integral de asigurarea RCA a șoferului vinovat. Tu îți continui viața normal, noi îți reparăm mașina.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              size="xl"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-transform active:scale-95 flex justify-center"
              icon="i-line-md-phone-call-loop"
              to="tel:+40788990011"
            >
              Verifică disponibilitatea
            </UButton>
            <UButton
              size="xl"
              variant="outline"
              color="neutral"
              class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 font-bold px-8 py-4 rounded-xl flex justify-center text-gray-900 dark:text-white hover:bg-white dark:hover:bg-slate-800"
              icon="i-line-md-chat"
              to="https://wa.me/40788990011"
              target="_blank"
            >
              Întreabă pe WhatsApp
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-8 md:py-12">
      <UContainer class="max-w-4xl">
        <div class="bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl border border-gray-200 dark:border-slate-700 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />

          <div class="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/50 shadow-sm">
            <UIcon
              name="i-heroicons-eye-slash"
              class="w-8 h-8 text-blue-600 dark:text-blue-400"
            />
          </div>

          <div class="text-center md:text-left z-10">
            <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              Discreție totală. Fără mașini colantate.
            </h3>
            <p class="text-gray-600 dark:text-slate-300 font-medium leading-relaxed text-sm md:text-base">
              Spre deosebire de alte service-uri, noi nu folosim clienții noștri pe post de panouri publicitare. Îți oferim o mașină elegantă, curată, <strong>fără absolut nicio reclamă, autocolant sau logo al service-ului pe ea</strong>. Conduci cu demnitate, iar nimeni nu va ști că mașina ta personală se află în reparații.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-8">
      <UContainer class="max-w-4xl">
        <div class="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
          <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-orange-900/50 flex items-center justify-center shrink-0 border border-orange-100 dark:border-orange-800/50 shadow-sm">
            <UIcon
              name="i-heroicons-scale"
              class="w-7 h-7 md:w-8 md:h-8 text-orange-500"
            />
          </div>
          <div>
            <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Este dreptul tău legal garantat de A.S.F.
            </h3>
            <p class="text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-sm md:text-base">
              Conform Normei 20/2017 art. 25 emise de Autoritatea de Supraveghere Financiară, orice persoană păgubită într-un accident rutier <strong>are dreptul la o mașină de înlocuire</strong> din clasă similară sau inferioară pe perioada cât mașina proprie este imobilizată în service. Noi ne ocupăm de toată birocrația decontării!
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-12 md:py-20">
      <UContainer class="max-w-5xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-black text-gray-900 dark:text-white mb-4">
            Cum funcționează?
          </h2>
          <p class="text-gray-600 dark:text-gray-400 font-medium">
            Procesul este simplu, transparent și fără bătăi de cap.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <span class="absolute -bottom-4 -right-2 text-[120px] font-black text-gray-100 dark:text-slate-800/40 leading-none select-none pointer-events-none z-0">
              {{ index + 1 }}
            </span>

            <div class="relative z-10">
              <div
                class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/20"
                :class="{
                  'bg-blue-600 text-white': step.color === 'blue',
                  'bg-orange-500 text-white': step.color === 'orange',
                  'bg-green-600 text-white': step.color === 'green'
                }"
              >
                <UIcon
                  :name="step.icon"
                  class="w-7 h-7"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-12 bg-white dark:bg-slate-900 border-y border-gray-200 dark:border-slate-800">
      <UContainer class="max-w-3xl">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-black text-gray-900 dark:text-white mb-4">
            Întrebări Frecvente
          </h2>
        </div>

        <div class="flex flex-col gap-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-5 md:p-6 border border-gray-100 dark:border-slate-700/50"
          >
            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-3">
              <UIcon
                name="i-heroicons-question-mark-circle"
                class="w-6 h-6 text-blue-500 shrink-0 mt-0.5"
              />
              {{ faq.q }}
            </h4>
            <p class="text-gray-600 dark:text-gray-300 font-medium ml-9">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="py-16 md:py-24">
      <UContainer class="max-w-4xl text-center">
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
          Ai nevoie urgentă de o mașină?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 font-medium">
          Sună-ne acum pentru a verifica disponibilitatea flotei și pentru a programa o constatare.
        </p>
        <UButton
          size="xl"
          class="bg-green-700 hover:bg-[#1e5713] text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-green-900/30 transition-transform active:scale-95 text-lg"
          icon="i-line-md-phone-call-loop"
          to="tel:+40788990011"
        >
          0788 990 011
        </UButton>
      </UContainer>
    </section>

    <LazyHomeContactSection />
    <FloatingActionBar />
  </main>
</template>
