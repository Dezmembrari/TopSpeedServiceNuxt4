<script setup lang="ts">
useHead({
  title: 'Politica de Confidențialitate | Top Speed Service',
  meta: [{ name: 'robots', content: 'noindex, follow' }]
})
</script>

<template>
  <div class="py-24 md:py-32 bg-gray-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
    <UContainer class="max-w-4xl">
      <UButton
        to="/"
        icon="i-heroicons-arrow-left"
        variant="ghost"
        color="neutral"
        class="mb-8 hover:bg-gray-200 dark:hover:bg-slate-800"
      >
        Înapoi la pagina principală
      </UButton>

      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-800 p-8 md:p-12 lg:p-16">
        <div class="mb-12 border-b border-gray-200 dark:border-slate-800 pb-8">
          <h1 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Politica de <span class="text-green-700">Confidențialitate</span>
          </h1>
          <p class="text-gray-500 font-medium">
            Conform regulamentului GDPR (UE) 2016/679
          </p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Cine suntem?
            </h2>
            <p>
              Top Speed Service (denumită în continuare "noi", "compania" sau "service-ul") colectează și prelucrează datele dumneavoastră personale în conformitate cu legile privind protecția datelor din România și Uniunea Europeană (GDPR).
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Ce date colectăm?
            </h2>
            <p>În cadrul prestării serviciilor auto, putem colecta:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Date de identificare și contact:</strong> Nume, prenume, adresă, telefon, email.</li>
              <li><strong>Date despre vehicul:</strong> Număr de înmatriculare, seria de șasiu (VIN), detalii din talon, polițe RCA/CASCO.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Scopul prelucrării datelor
            </h2>
            <p>Datele sunt utilizate strict pentru:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
              <li>Întocmirea devizelor, facturilor și documentelor legale necesare reparației.</li>
              <li>Deschiderea și gestionarea dosarelor de daună în relația cu societățile de asigurare.</li>
              <li>Comunicarea cu dumneavoastră privind statusul reparației.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Fișiere de tip Cookie și Analiza Traficului (Web Tracking)
            </h2>
            <p>
              Site-ul <strong>topspeedservice.eu</strong> utilizează fișiere de tip cookie și alte tehnologii de urmărire similare (ex: Google Analytics, Meta Pixel) pentru a analiza traficul, a înțelege modul în care vizitatorii interacționează cu platforma noastră și pentru a îmbunătăți experiența utilizatorilor.
            </p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Date colectate automat:</strong> Adresa IP anonimizată, tipul browserului, dispozitivul folosit, paginile vizitate și timpul petrecut pe site. Aceste date au rol pur statistic și nu vă identifică personal.</li>
              <li><strong>Furnizori terți:</strong> Utilizăm servicii precum Google Analytics pentru rapoarte de performanță a site-ului. Acești furnizori pot plasa propriile cookie-uri.</li>
              <li>Vă puteți retrage consimțământul sau puteți bloca utilizarea cookie-urilor în orice moment prin setările browserului dumneavoastră, fără ca acest lucru să vă afecteze capacitatea de a citi conținutul site-ului.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Partajarea datelor cu terți
            </h2>
            <p>
              Nu vindem datele dumneavoastră. Ele pot fi transmise doar către: instituții ale statului (ANAF), societăți de asigurări (strict pentru dosarele de daună) sau furnizori de servicii IT/Contabilitate, sub acorduri stricte de confidențialitate.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Drepturile dumneavoastră
            </h2>
            <p>Conform GDPR, beneficiați de dreptul de acces, intervenție, rectificare, ștergere a datelor ("dreptul de a fi uitat") și dreptul de a vă opune prelucrării.</p>
            <p class="mt-4">
              Pentru exercitarea acestor drepturi, ne puteți contacta la: <a
                href="mailto:office@topspeedservice.eu"
                class="text-green-700 hover:underline font-bold"
              >office@topspeedservice.eu</a>.
            </p>
          </section>
        </div>
      </div>
    </UContainer>
  </div>
</template>
