// app/expertise/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const articles = {
  collectivites: {
    title: "Décret Tertiaire : comprendre vos obligations",
    subtitle: "Transformer la contrainte réglementaire en opportunité budgétaire",
    image: "/images/article-collectivites.png",
    content: (
      <>
      <h2 className="text-2xl font-semibold text-slate-900">
        Décret Tertiaire : quels objectifs ?
      </h2>

      <p>
        Le Décret Tertiaire (issu de la loi ELAN) impose une réduction progressive
        des consommations d’énergie finale pour les bâtiments tertiaires existants.
      </p>

      <p className="mt-4 font-medium">Deux options sont possibles :</p>

      <h3 className="mt-6 text-xl font-semibold">1️⃣ Objectif en valeur relative</h3>
      <p>
        Réduction de la consommation par rapport à une année de référence choisie
        entre 2010 et 2019 :
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>–40 % d’ici 2030</li>
        <li>–50 % d’ici 2040</li>
        <li>–60 % d’ici 2050</li>
      </ul>

      <h3 className="mt-6 text-xl font-semibold">2️⃣ Objectif en valeur absolue</h3>
      <p>
        Atteindre un seuil de consommation fixé par arrêté, selon le type
        d’activité exercée dans le bâtiment.
      </p>

      <p className="mt-3 font-medium">
        Chaque collectivité doit choisir la trajectoire la plus adaptée à son patrimoine.
      </p>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold text-slate-900">
        Quels bâtiments sont concernés ?
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Bâtiments tertiaires de plus de 1 000 m²</li>
        <li>Mairies, écoles, gymnases, équipements culturels</li>
        <li>Bâtiments administratifs</li>
        <li>Bâtiments sportifs ou sociaux</li>
        <li>Ensembles immobiliers multi-bâtiments dépassant le seuil cumulé</li>
      </ul>

      <p className="mt-4 text-slate-700">
        ⚠ Les bâtiments mixtes (logement + tertiaire) peuvent être concernés sur leur partie tertiaire.
      </p>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold text-slate-900">
        La plateforme OPERAT
      </h2>

      <p>
        OPERAT (Observatoire de la Performance Énergétique, de la Rénovation et des Actions du Tertiaire),
        gérée par l’ADEME, est la plateforme officielle de déclaration.
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Déclarer ses consommations énergétiques</li>
        <li>Mettre à jour surfaces et activités</li>
        <li>Suivre la trajectoire de réduction</li>
        <li>Justifier des modulations éventuelles</li>
      </ul>

      <p className="mt-4">
        À l’issue de la déclaration, une attestation numérique est délivrée.
      </p>

      <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
        <p className="font-medium">
          OPERAT est un outil déclaratif.
        </p>
        <p>
          Il ne fournit pas d’analyse stratégique consolidée multi-bâtiments.
        </p>
      </div>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold text-slate-900">
        Risques en cas de non-conformité
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Mise en demeure administrative</li>
        <li>Publication du nom (name & shame)</li>
        <li>Pression politique et médiatique</li>
      </ul>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
        <p className="font-semibold text-blue-900">
          Au-delà du risque réglementaire, le véritable risque est budgétaire.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Détecter les dérives de chauffage</li>
          <li>Optimiser les horaires</li>
          <li>Corréler aux conditions climatiques</li>
          <li>Produire des rapports clairs pour les élus</li>
        </ul>
      </div>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold text-slate-900">
        Transformer la contrainte en opportunité
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Moderniser la gestion du patrimoine communal</li>
        <li>Dégager des économies sans investissement immédiat</li>
      </ul>
    </>
    ),
  },

  "syndics-coproprietes": {
    title: "Charges énergétiques : passer de la réaction à l’anticipation",
    subtitle: "La transparence énergétique devient un avantage concurrentiel",
    image: "/images/articles-syndics.png",
    content: (
      <>
      <p>
        Dans les copropriétés, l’énergie représente souvent le premier poste de charges.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">
        Problématiques récurrentes
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Hausse incomprise des charges</li>
        <li>Surconsommations chaufferies collectives</li>
        <li>Difficulté à justifier en assemblée générale</li>
        <li>Décisions prises sans base objective</li>
      </ul>

      <p className="mt-6">
        Pourtant, les données existent déjà via les compteurs Enedis et GRDF.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">
        Bonnes pratiques
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Comparer les consommations entre résidences</li>
        <li>Corréler aux DJU (climat)</li>
        <li>Analyser les périodes nocturnes et week-end</li>
        <li>Identifier les dérives avant surcoûts</li>
      </ul>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
        <p className="font-semibold text-blue-900">
          La transparence énergétique devient un avantage concurrentiel.
        </p>
      </div>
    </>
    ),
  },

  entreprises: {
    title: "Performance énergétique : un levier direct sur votre marge",
    subtitle: "Ce que vous ne mesurez pas vous coûte. Ce que vous pilotez devient un avantage compétitif.",
    image: "/images/article-entreprises.png",
    content: (
      <>
      <p>
        Dans un contexte de hausse des coûts énergétiques et d’exigences RSE,
        la consommation énergétique impacte directement :
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>La marge opérationnelle</li>
        <li>La compétitivité</li>
        <li>L’image environnementale</li>
        <li>Les obligations réglementaires</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">
        Enjeux multi-sites
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Manque de visibilité consolidée</li>
        <li>Difficulté à détecter les dérives</li>
        <li>Absence d’indicateurs pour la direction financière</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">
        Les meilleures organisations
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Pilotent leur coût énergétique par site</li>
        <li>Disposent d’alertes automatiques</li>
        <li>Mesurent le ROI énergétique</li>
        <li>Intègrent des indicateurs carbone</li>
      </ul>
    </>
    ),
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: "collectivites" },
    { slug: "syndics-coproprietes" },
    { slug: "entreprises" },
  ];
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles[slug as keyof typeof articles];
  if (!article) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6">
      <section className="text-center">
      <div className="relative mx-auto w-104 h-104">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      <h1 className="text-4xl font-bold text-blue-900">{article.title}</h1>
      <p className="mt-4 text-lg text-slate-600">{article.subtitle}</p>
      </section>
      <div className="mt-10 space-y-6 text-slate-800 leading-relaxed">
        {article.content}
      </div>
      <Link
  href="/expertise"
  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition"
>
  <span className="text-lg">←</span>
  Retour à l’expertise
</Link>
    </main>
  );
}
