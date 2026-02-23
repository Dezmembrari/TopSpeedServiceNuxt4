<script setup lang="ts">
useHead({
  title: 'Termeni și Condiții | Top Speed Service',
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
            Termeni și <span class="text-blue-700">Condiții</span>
          </h1>
          <p class="text-gray-500 font-medium">
            Ultima actualizare: Februarie 2026
          </p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Dispoziții Generale
            </h2>
            <p>
              Prezentul document stabilește termenii și condițiile de furnizare a serviciilor de către Top Speed Service Auto, cu sediul în Sos. Clinceni, DJ401A 6, Bragadiru, Ilfov. Predarea autovehiculului pentru reparații echivalează cu acceptarea necondiționată a acestor termeni.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Recepția, Constatarea și Devizul Estimativ
            </h2>
            <ul class="list-disc pl-5 space-y-2 mt-2">
              <li>La primirea autovehiculului se întocmește o Fişă de Comandă/Recepţie. Costurile comunicate inițial reprezintă un <strong>deviz estimativ</strong>.</li>
              <li>Dacă în timpul reparațiilor (după demontare) se constată necesitatea unor lucrări suplimentare sau existența unor <strong>vicii ascunse</strong>, clientul va fi informat. Reparațiile suplimentare se vor efectua doar după obținerea acordului (verbal, telefonic sau scris) al clientului.</li>
              <li>Termenele de execuție sunt orientative și depind de complexitatea lucrării și de termenele de livrare ale furnizorilor de piese.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Piese de Schimb și Garanție
            </h2>
            <ul class="list-disc pl-5 space-y-2 mt-2">
              <li>Garanția se acordă <strong>doar pentru piesele de schimb achiziționate prin intermediul service-ului nostru</strong> și pentru manopera aferentă acestora, conform legislației în vigoare (OG 21/1992).</li>
              <li>Ne rezervăm dreptul de a refuza montarea pieselor aduse de client dacă acestea nu corespund normelor de siguranță. Pentru piesele aduse de client, <strong>nu se acordă garanție.</strong></li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Plata și Eliberarea Autovehiculului
            </h2>
            <ul class="list-disc pl-5 space-y-2 mt-2">
              <li>Eliberarea autovehiculului se face doar după <strong>achitarea integrală a facturii</strong> (numerar, card, transfer bancar) sau confirmarea plății de către societatea de asigurări.</li>
              <li>În cazul reparațiilor efectuate în baza unor dosare de daună (RCA/CASCO), dacă societatea de asigurări refuză plata parțial sau total (din motive de franciză, excluderi, culpă comună etc.), <strong>clientul se obligă să achite diferența sau integralitatea facturii</strong> la ridicarea mașinii.</li>
              <li>Service-ul își rezervă <strong>dreptul de retenție</strong> asupra autovehiculului până la recuperarea integrală a contravalorii pieselor și manoperei, conform art. 2495 din Noul Cod Civil.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Limitarea Răspunderii
            </h2>
            <p>
              Clientul are obligația de a lua din autovehicul toate obiectele de valoare (bani, electronice, documente importante) înainte de predarea acestuia. Top Speed Service nu își asumă răspunderea pentru pierderea sau deteriorarea obiectelor personale lăsate în interiorul mașinii.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Date de Contact
            </h2>
            <p>
              Pentru informații suplimentare, ne puteți contacta la <a
                href="mailto:office@topspeedservice.eu"
                class="text-blue-700 hover:underline font-bold"
              >office@topspeedservice.eu</a> sau <a
                href="tel:+40788990011"
                class="text-green-700 hover:underline font-bold"
              >0788 990 011</a>.
            </p>
          </section>
        </div>
      </div>
    </UContainer>
  </div>
</template>
