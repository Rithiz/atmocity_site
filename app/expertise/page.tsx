// app/expertise/page.tsx
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    slug: "collectivites",
    title: "Collectivités",
    subtitle: "Décret Tertiaire :",
    subtitle2: "comprendre vos obligations et sécuriser votre trajectoire 2030",
    icon: "/images/collectivite.png",
    bullets: [
      "–40 % d’ici 2030",
      "–50 % d’ici 2040",
      "–60 % d’ici 2050",
      "Plateforme OPERAT (ADEME) : déclarations obligatoires",
    ],
    footer: "Transformez votre conformité en levier pour vos projets.",
  },
  {
    slug: "syndics-coproprietes",
    title: "Syndics & Copropriétés",
    subtitle: "Charges énergétiques :",
    subtitle2: "passer de la réaction à l’anticipation",
    icon: "/images/copro.png",
    bullets: [
      "Hausse incomprise des charges",
      "Analyse des périodes d’inoccupation",
      "Comparatif des consommations entre immeubles",
      "Corrélation DJU (climat)",
    ],
    footer: "Prenez le contrôle et sécurisez vos décisions.",
  },
  {
    slug: "entreprises",
    title: "Entreprises",
    subtitle: "Performance énergétique :",
    subtitle2: "un levier direct sur votre marge",
    icon: "/images/entreprise.png",
    bullets: ["Marge opérationnelle", "Compétitivité", "Image environnementale", "KPI groupe & alertes"],
    footer: "Identifiez rapidement vos économies potentielles.",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden pb-32 min-h-130">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/page_daccueil.png"
      alt=""
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/40 to-slate-50" />
  </div>

  <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 text-center">

    <div className="mx-auto mt-6 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        Documentation / Expertise
      </h1>
      <p className="mt-4 text-base md:text-lg text-slate-700">
        Meilleures pratiques, décryptages et conseils concrets pour optimiser
        votre gestion énergétique.
      </p>
    </div>

    {/* CARDS PREMIUM */}
    <div className="relative mt-14 grid gap-6 md:grid-cols-3 text-left -mb-24">
      {cards.map((c) => (
        <article
          key={c.slug}
          className="relative flex flex-col h-full rounded-3xl overflow-hidden shadow-xl bg-white/80 backdrop-blur border border-white/40 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image en fond */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${c.icon})` }}
          />

          <div className="relative z-10 flex flex-col h-full p-7">
            <h2 className="text-center text-xl font-semibold text-slate-900">
              {c.title}
            </h2>

            <p className="mt-4 text-center text-slate-800 font-medium">
              {c.subtitle}
            </p>
            <p className="text-center text-slate-700">{c.subtitle2}</p>

            <hr className="my-5 border-slate-200" />

            <ul className="space-y-2 text-slate-700">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-5">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-slate-700">
                {c.footer}
              </div>

              <div className="mt-5 flex justify-center">
                <Link
                  href={`/expertise/${c.slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800 transition"
                >
                  Lire l&apos;article <span className="ml-2">›</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>



      {/* CARDS */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
       

        {/* CHECKLIST CTA */}
        <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-sm p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14">
              <Image src="/images/logo_donnees.png" alt="" fill className="object-contain" />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">
                Savez-vous quelles actions énergétiques prioriser dès maintenant ?
              </p>
              <p className="text-slate-700">
                Une checklist claire, par profil (collectivité, syndic, entreprise).
              </p>
            </div>
          </div>

          <Link
            href="/expertise/checklist"
            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800 transition whitespace-nowrap"
          >
            Découvrez nos checklists <span className="ml-2">›</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
