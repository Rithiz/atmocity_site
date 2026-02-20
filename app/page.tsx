// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const segments = [
  {
    title: "Collectivités",
    tagline: "Transformez vos obligations\nénergétiques en levier budgétaire.",
    desc:
      "Pilotez la performance de vos bâtiments publics\net dégagez des économies pour vos projets communaux.",
    cta: "Demander une démo collectivités",
    href: "/contact",
    bg: "/images/collectivite.png",
    image: "/images/article-collectivites.png",
  },
  {
    title: "Syndics & Copropriétés",
    tagline: "Reprenez le contrôle\ndes charges énergétiques.",
    desc:
      "Apportez transparence et comparaisons claires\nà vos copropriétaires.",
    cta: "Demander une démo syndics",
    href: "/contact",
    bg: "/images/copro.png",
    image: "/images/articles-syndics.png",
  },
  {
    title: "Entreprises",
    tagline: "Transformez vos consommations\nen avantage compétitif.",
    desc:
      "Réduisez vos coûts énergétiques\net optimisez votre bilan carbone.",
    cta: "Demander une démo entreprises",
    href: "/contact",
    bg: "/images/entreprise.png",
    image: "/images/article-entreprises.png",
  },
];

const strategy = [
  {
    icon: "/images/logo_0.png",
    title: "Zéro investissement requis",
    desc: "Pas de capteurs, pas de travaux,\nmise en place sans frais.",
  },
  {
    icon: "/images/logo_donnees.png",
    title: "Traitement des données\nEnedis / GRDF",
    desc: "Analyse automatique en utilisant\nvos compteurs actuels.",
  },
  {
    icon: "/images/logo_bouclier.png",
    title: "Confidentialité",
    desc: "Données 100% hébergées en France\net sécurisées.",
  },
  {
    icon: "/images/logo_IA_et_donnees.png",
    title: "Rapports intelligents\navec IA",
    desc: "Générez des rapports clairs et pertinents\ngrâce à l’intelligence artificielle.",
  },
];

const steps = [
  {
    n: "1",
    title: "Connexion données",
    desc:
      "Nous nous connectons à vos données Enedis / GRDF.\nAucune installation nécessaire.",
  },
  {
    n: "2",
    title: "Tableau de bord",
    desc:
      "Un tableau de bord clair vous montre votre consommation\net les optimisations possibles.",
  },
  {
    n: "3",
    title: "Alertes & rapports avec IA",
    desc:
      "Vous recevez des alertes et rapports détaillés optimisés par l’IA\npour exploiter les économies possibles.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
  <Image
    src="/images/page_daccueil.png"
    alt="Atmocity"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-linear-to-b from-white/65 via-white/55 to-white/40" />

  <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-blue-900">
            Le défi énergétique augmente.
          </h1>

          <p className="mt-3 text-xl md:text-2xl text-slate-700">
            Arrêtez de subir vos dépenses énergétiques. <br className="hidden md:block" />
            Commencez à les rentabiliser.
          </p>

          <div className="mx-auto mt-7 max-w-3xl text-slate-700">
            <p className="text-base md:text-lg">
              Nous transformons vos données de consommation en économies mesurables {" "} <br></br>
              <span className="italic">
              — sans installation de capteurs, sans travaux, sans investissement initial —
              </span>
            </p>
          </div>

          {/* CARDS PREMIUM (images en fond) */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            
            {segments.map((s) => (
              <article
                key={s.title}
                className="relative flex flex-col h-full overflow-hidden rounded-2xl shadow-lg border border-white/40 bg-white/30 backdrop-blur
             transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image en fond */}
                <div className="absolute inset-0">
                  <Image src={s.bg} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/70 to-white/90" />
                </div>

                <div className="relative flex flex-col h-full p-6 md:p-7">
                  {/* ILLUSTRATION CENTRÉE */}
                  <div className="flex justify-center mb-4">
                    <div className="relative h-28 w-28 md:h-32 md:w-32">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-contain drop-shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-900 text-center">
                    {s.title}
                  </h3>

                  <div className="mt-4 text-center text-blue-900/90 font-medium whitespace-pre-line">
                    {s.tagline}
                  </div>

                  <div className="mt-6 h-px bg-blue-900/10" />

                  <p className="mt-5 text-center text-slate-700 whitespace-pre-line">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-6 flex justify-center">
                    <Link
                      href={s.href}
                      className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800 transition shadow-sm"
                    >
                      {s.cta} <span className="ml-2">›</span>
                    </Link>
                  </div>

                 
                </div>
              </article>
            ))}
          </div>

          {/* Bandeau */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-white/40 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-linear-to-r from-blue-900 to-blue-700 px-6 py-4 text-white text-lg md:text-xl font-semibold">
              Chaque kWh optimisé devient une marge de manœuvre <span className="italic">pour votre territoire</span>.
            </div>
            <div className="bg-white/65 px-6 py-3 text-slate-700">
              Suivi et alertes en temps réel • Comparaisons détaillées • Rapports sur mesure
            </div>
          </div>
        </div>
      </section>

      {/* STRATÉGIE GAGNANTE */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/page_daccueil.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/60 to-white/70" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Stratégie gagnante
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {strategy.map((it) => (
              <div
                key={it.title}
                className="rounded-2xl bg-white/65 backdrop-blur border border-slate-200 shadow-sm p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="relative h-60 w-60 md:h-60 md:w-60">
                    <Image
                      src={it.icon}
                      alt={it.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 whitespace-pre-line">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 whitespace-pre-line">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>

          {/* COMMENT ÇA MARCHE */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Comment ça marche ?
            </h2>

            <div className="mt-10 rounded-2xl bg-white/65 backdrop-blur border border-slate-200 shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                {steps.map((st, idx) => (
                  <div
                    key={st.n}
                    className={`p-8 text-left ${idx < 2 ? "border-b md:border-b-0 md:border-r border-slate-200" : ""}`}
                  >
                    <div className="flex items-center gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <div className="h-9 w-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-semibold">
                        {st.n}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {st.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-slate-700 whitespace-pre-line">
                      {st.desc}
                    </p>
                  </div>
                ))} 
              </div>
            </div>

            {/* LOGOS (placeholders: mets tes assets si tu en as) */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-80">
              <span className="text-slate-500 font-semibold transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">EDF</span>
              <span className="text-slate-500 font-semibold transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">ENEDIS</span>
              <span className="text-slate-500 font-semibold transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">GRDF</span>
              <span className="text-slate-500 font-semibold transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">Dalkia</span>
            </div>

            

          </div>
        </div>
      </section>
    </main>
  );
}
