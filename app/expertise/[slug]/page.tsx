// app/expertise/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
const articles = {
  collectivites: {
    title: "Décret Tertiaire : comprendre vos obligations",
    subtitle: "Transformer la contrainte réglementaire en opportunité budgétaire",
    content: (
      <>
        <h2>🎯 Les objectifs du Décret Tertiaire</h2>
        <p>
          Le Décret Tertiaire impose une réduction progressive des consommations
          d’énergie finale pour les bâtiments tertiaires existants.
        </p>
        <ul>
          <li>–40 % d’ici 2030</li>
          <li>–50 % d’ici 2040</li>
          <li>–60 % d’ici 2050</li>
        </ul>
      </>
    ),
  },

  "syndics-coproprietes": {
    title: "Charges énergétiques : passer de la réaction à l’anticipation",
    subtitle: "La transparence énergétique devient un avantage concurrentiel",
    content: (
      <>
        <p>Dans les copropriétés, l’énergie représente souvent le premier poste de charges.</p>
        <h2>Problématiques fréquentes</h2>
        <ul>
          <li>Hausse incomprise des charges</li>
          <li>Surconsommations chaufferies collectives</li>
          <li>Difficulté à justifier en AG</li>
        </ul>
      </>
    ),
  },

  entreprises: {
    title: "Performance énergétique : un levier direct sur votre marge",
    subtitle: "Ce que vous ne mesurez pas vous coûte. Ce que vous pilotez devient un avantage compétitif.",
    content: (
      <>
        <p>
          La consommation énergétique impacte directement la marge opérationnelle,
          la compétitivité et l’image environnementale.
        </p>
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
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900">{article.title}</h1>
      <p className="mt-4 text-lg text-slate-600">{article.subtitle}</p>

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
