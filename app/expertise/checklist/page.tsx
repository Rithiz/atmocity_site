// app/expertise/checklist/page.tsx
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "🏛 Collectivités (Mairies / Communes)",
    blocks: [
      {
        title: "1) Conformité Décret Tertiaire",
        items: [
          "Avez-vous identifié tous les bâtiments concernés (> 1 000 m²) ?",
          "Vos consommations de référence sont-elles définies ?",
          "Êtes-vous inscrit sur la plateforme OPERAT ?",
          "Suivez-vous vos trajectoires 2030 / 2040 / 2050 ?",
          "Disposez-vous d’un tableau consolidé multi-bâtiments ?",
        ],
      },
      {
        title: "2) Pilotage budgétaire",
        items: [
          "Connaissez-vous le coût énergétique par bâtiment ?",
          "Avez-vous identifié les bâtiments les plus énergivores ?",
          "Vos consommations sont-elles corrélées à l’occupation réelle ?",
          "Avez-vous un suivi mensuel consolidé ?",
        ],
      },
      {
        title: "3) Optimisations immédiates (sans travaux)",
        items: [
          "Détection des dérives de chauffage",
          "Analyse des consommations hors période d’occupation",
          "Ajustement des horaires de fonctionnement",
          "Optimisation des consignes de température",
        ],
      },
      {
        title: "4) Gouvernance & reporting",
        items: [
          "Disposez-vous de rapports clairs pour le conseil municipal ?",
          "Pouvez-vous démontrer les économies générées ?",
          "Avez-vous un indicateur carbone associé ?",
        ],
      },
    ],
  },
  {
    title: "🏬 Syndics & Copropriétés",
    blocks: [
      {
        title: "1) Transparence des charges",
        items: [
          "Les copropriétaires comprennent-ils l’évolution des charges ?",
          "Avez-vous un comparatif entre immeubles ?",
          "Disposez-vous d’indicateurs simples à présenter en AG ?",
        ],
      },
      {
        title: "2) Chaufferie & consommations collectives",
        items: [
          "La consommation est-elle cohérente avec les DJU (climat) ?",
          "Détectez-vous les surconsommations anormales ?",
          "Analysez-vous les périodes nocturnes / week-end ?",
        ],
      },
      {
        title: "3) Anticipation des travaux",
        items: [
          "Avez-vous identifié les bâtiments prioritaires ?",
          "Pouvez-vous estimer le ROI avant décision en AG ?",
          "Disposez-vous d’une base chiffrée objective ?",
        ],
      },
      {
        title: "4) Sécurisation des données",
        items: [
          "Les accès aux données Enedis / GRDF sont-ils formalisés ?",
          "Le mandat est-il conforme ?",
          "Les données sont-elles hébergées en France ?",
        ],
      },
    ],
  },
  {
    title: "🏢 Entreprises",
    blocks: [
      {
        title: "1) Vision financière",
        items: [
          "Connaissez-vous le coût énergétique par site ?",
          "Avez-vous un KPI énergie consolidé groupe ?",
          "Mesurez-vous l’impact sur votre marge ?",
        ],
      },
      {
        title: "2) Performance opérationnelle",
        items: [
          "Suivi par bâtiment / entrepôt / site industriel",
          "Alertes automatiques en cas de dérive",
          "Comparaison inter-sites",
        ],
      },
      {
        title: "3) Reporting & RSE",
        items: [
          "Disposez-vous d’indicateurs carbone fiables ?",
          "Vos données sont-elles exploitables pour vos rapports RSE ?",
          "Avez-vous un suivi des progrès réalisés ?",
        ],
      },
      {
        title: "4) ROI & optimisation sans CAPEX",
        items: [
          "Avez-vous identifié les économies sans investissement ?",
          "Savez-vous quelles actions prioriser ?",
          "Disposez-vous d’une estimation chiffrée rapide ?",
        ],
      },
    ],
  },
];

export default function ChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/page_1.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-white/45 via-white/25 to-slate-50" />
        </div>

        <div className="mx-auto max-w-4xl px-6 pt-12 pb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Checklist — Actions énergétiques à prioriser
          </h1>
          <p className="mt-4 text-slate-700">
            Une checklist claire pour identifier vos manques, sécuriser vos décisions
            et déclencher des optimisations rapides.
          </p>
          <div className="mt-6">
            <Link
              href="/expertise"
              className="rounded-xl bg-white/70 border border-slate-200 px-5 py-2 text-slate-800 hover:bg-white transition"
            >
              ← Retour aux articles
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 pb-14">
        <div className="space-y-6">
          {sections.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                {s.title}
              </h2>

              <div className="mt-6 space-y-6">
                {s.blocks.map((b) => (
                  <div key={b.title}>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {b.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {b.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-slate-700">
                          <span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-slate-300 bg-slate-50">
                            ✓
                          </span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-4 text-slate-700">
                Besoin d’un diagnostic rapide ?{" "}
                <Link href="/contact" className="text-blue-700 font-medium hover:underline">
                  Demander une démo
                </Link>
                .
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
