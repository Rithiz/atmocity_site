import Image from "next/image";
import Link from "next/link";

export default function Apropos() {
  return (
    <main className="bg-white text-gray-800">

{/* HERO = NOTRE VISION + NOTRE MISSION */}
<section className="relative overflow-hidden">
  {/* BG */}
  <Image
    src="/images/page_daccueil.png"
    alt="Notre vision"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/60 to-white/70" />

  <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
    {/* VISION */}
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-blue-900">
        Notre vision
      </h1>

      <p className="mt-6 text-xl text-slate-800 leading-relaxed">
        Chaque kWh optimisé devient une marge de manœuvre budgétaire et
        environnementale.
      </p>

      <p className="mt-6 text-lg text-slate-700">
        Nous croyons que la transition énergétique ne doit pas être subie mais
        pilotée, mesurée et maîtrisée grâce à la donnée.
      </p>
    </div>

    {/* MISSION (dans le HERO) */}
    <div className="mt-14">
      <div className="bg-white rounded-[40px] border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-10 md:p-16 text-center">
        <h2 className="text-4xl font-semibold text-slate-900 mb-8">
          Notre mission
        </h2>

        <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
          Atmocity aide les organisations à{" "}
          <span className="font-semibold text-blue-900">
            réduire leurs coûts énergétiques
          </span>{" "}
          et à{" "}
          <span className="font-semibold text-blue-900">
            décarboner leurs bâtiments
          </span>{" "}
          grâce à l’analyse intelligente des données Enedis / GRDF — sans
          installation de capteurs, sans travaux, sans investissement initial.
        </p>

        {/* Petits rectangles */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white rounded-2xl border border-slate-300 shadow-md p-10">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Décarboner
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              Réduire l’empreinte carbone de façon mesurable et documentée, avec
              un pilotage précis des consommations énergétiques.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-300 shadow-md p-10">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Maîtriser son budget
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              Identifier les dérives, prioriser les actions et générer des
              économies concrètes sans investissements lourds.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* FONDATEUR */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Le fondateur
          </h2>

          <div className="grid md:grid-cols-3 gap-10 items-stretch">

            {/* PHOTO */}
            <div className="bg-gray-50 border rounded-3xl p-6 flex items-center justify-center">
              {/* Remplace par ta vraie photo si souhaité */}
              <div className="text-center">
                <div className="w-36 h-36 rounded-full bg-blue-100 mx-auto mb-6 flex items-center justify-center text-blue-900 font-bold text-3xl">
                  RC
                </div>
                <p className="text-gray-600">
                  Rithi CHHIM
                </p>
              </div>
            </div>


            {/* BIO */}
            <div className="md:col-span-2 bg-white border rounded-3xl p-10 shadow-sm">

              <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                Rithi CHHIM
              </h3>

              <p className="text-lg text-gray-800 mb-6">
                Spécialiste des plateformes data et des architectures décisionnelles,
                Rithi CHHIM conçoit depuis plus de 10 ans des systèmes analytiques
                complexes pour des environnements multi-clients et multi-cloud.
              </p>

              <p className="text-lg text-gray-800 mb-6">
                Avec Atmocity, il applique la puissance de la data et de l’intelligence
                artificielle au pilotage énergétique, afin d’aider collectivités,
                syndics et entreprises à transformer leurs données brutes en décisions
                stratégiques génératrices d’économies.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                <li>Expert en plateformes data (Cloud, BI, Data Engineering)</li>
                <li>Conception de systèmes multi-tenant et décisionnels</li>
                <li>Approche orientée ROI et performance mesurable</li>
                <li>Vision stratégique combinant technologie et impact environnemental</li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
                    Demander une démo
                  </button>
                </Link>

                <Link href="/expertise">
                  <button className="border px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                    Découvrir l’expertise
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* APPROCHE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Notre approche
          </h2>

          <p className="text-gray-700 mb-12">
            Une solution simple, orientée décision, pensée pour l’impact mesurable.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Mise en place rapide
              </h3>
              <p className="text-gray-700">
                Connexion aux données Enedis / GRDF et premières analyses en quelques jours.
              </p>
            </div>

            <div className="bg-gray-50 border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Zéro installation
              </h3>
              <p className="text-gray-700">
                Aucun capteur, aucun travaux, aucune perturbation opérationnelle.
              </p>
            </div>

            <div className="bg-gray-50 border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Décision priorisée
              </h3>
              <p className="text-gray-700">
                Alertes intelligentes, priorisation des actions et reporting clair pour maximiser les économies.
              </p>
            </div>

          </div>
        </div>
      </section>


      

    </main>
  );
}
