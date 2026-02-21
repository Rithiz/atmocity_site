// app/expertise/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const articles = {
  collectivites: {
    article_name:"Collectivités",
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
    article_name:"Syndics-copropriétés",
    title: "Charges énergétiques : passer de la réaction à l’anticipation",
    subtitle: "La transparence énergétique devient un avantage concurrentiel",
    image: "/images/articles-syndics.png",
    content: (
      <>
      
<section className="space-y-6">
  <p className="text-lg md:text-xl leading-relaxed text-slate-700">
    Dans une copropriété, l’énergie constitue souvent <strong className="text-slate-900">le premier poste de charges communes</strong>.
    Pourtant, la gestion reste majoritairement <strong className="text-slate-900">réactive</strong> — et donc coûteuse.
  </p>

 
  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Constat</p>
      <p className="mt-2 text-slate-800 font-medium">
        Les données existent déjà, mais ne sont pas exploitées.
      </p>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Enjeu</p>
      <p className="mt-2 text-slate-800 font-medium">
        Passer de la dépense subie à la décision chiffrée.
      </p>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Impact</p>
      <p className="mt-2 text-slate-800 font-medium">
        Prioriser les actions à fort rendement, sans CAPEX inutile.
      </p>
    </div>
  </div>

 
  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>


  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-semibold">1</span>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        Les problématiques récurrentes
      </h2>
    </div>

    <p className="text-slate-700">
      Les charges augmentent, les copropriétaires demandent des comptes, et les décisions se prennent trop souvent 
      <strong className="text-slate-900">sans base objective</strong>.
    </p>

    <ul className="mt-3 grid gap-3 md:grid-cols-2">
      <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <strong className="text-slate-900">Hausse mal comprise</strong>
        <p className="mt-1 text-slate-700">Difficile d’expliquer l’évolution des charges avec clarté.</p>
      </li>
      <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <strong className="text-slate-900">Surconsommations invisibles</strong>
        <p className="mt-1 text-slate-700">Chaufferies collectives : dérives lentes, factures rapides.</p>
      </li>
      <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <strong className="text-slate-900">AG sous tension</strong>
        <p className="mt-1 text-slate-700">Argumenter des chiffres sans indicateurs robustes est risqué.</p>
      </li>
      <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <strong className="text-slate-900">Travaux “à l’intuition”</strong>
        <p className="mt-1 text-slate-700">Des CAPEX engagés sans preuve de rendement mesurable.</p>
      </li>
    </ul>

    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-slate-800 font-medium">
        Les données existent déjà via <strong>Enedis</strong> et <strong>GRDF</strong>.
      </p>
      <p className="mt-2 text-slate-700">
        L’enjeu n’est pas d’ajouter des capteurs ni de créer du CAPEX supplémentaire :
        <strong className="text-slate-900"> il faut exploiter intelligemment les données disponibles.</strong>
      </p>
    </div>
  </div>


  <div className="space-y-4 pt-2">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-semibold">2</span>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        De la donnée brute à la décision stratégique
      </h2>
    </div>

    <p className="text-slate-700">
      Une analyse structurée transforme un relevé de compteur en <strong className="text-slate-900">pilotage</strong>.
      On ne cherche pas “des jolies courbes” — on cherche <strong className="text-slate-900">des décisions</strong>.
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-900 font-semibold">Ce que l’analyse rend possible</p>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Comparer les consommations entre résidences similaires</li>
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Corréler aux DJU pour neutraliser l’effet climatique</li>
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Repérer l’anormal (nuit / week-end / creux d’occupation)</li>
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Détecter les dérives avant surcoûts structurels</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-900 font-semibold">Résultat attendu</p>
        <div className="mt-4 rounded-xl bg-blue-50 border border-blue-200 p-5">
          <p className="text-blue-900 font-semibold">
            Prioriser les actions selon leur impact financier réel.
          </p>
          <p className="mt-2 text-slate-700">
            Vous passez d’une logique “on subit” à une logique “on arbitre”.
          </p>
        </div>

        <p className="mt-4 text-slate-700">
          Autrement dit : chaque action devient une décision chiffrée, comparable, défendable.
        </p>
      </div>
    </div>
  </div>

 
  <div className="space-y-4 pt-2">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-semibold">3</span>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        ROI : objectiver chaque décision
      </h2>
    </div>

    <p className="text-slate-700">
      Avant d’engager des travaux (isolation, équilibrage hydraulique, régulation, remplacement chaudière),
      il devient possible de construire un <strong className="text-slate-900">modèle économique clair</strong>.
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-900 font-semibold">Méthode</p>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex gap-3"><span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 bg-slate-50">✓</span>Mesurer la perte énergétique actuelle</li>
          <li className="flex gap-3"><span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 bg-slate-50">✓</span>Simuler l’économie potentielle</li>
          <li className="flex gap-3"><span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 bg-slate-50">✓</span>Calculer un ROI réaliste</li>
          <li className="flex gap-3"><span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 bg-slate-50">✓</span>Arbitrer OPEX vs CAPEX</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
        <p className="text-blue-900 font-semibold">À retenir</p>
        <p className="mt-3 text-slate-800 text-lg font-medium leading-relaxed">
          Un projet de rénovation énergétique ne doit plus être voté sur une intuition,
          mais sur <span className="text-blue-900 font-semibold">un modèle économique défendable</span>.
        </p>
      </div>
    </div>
  </div>

 
  <div className="space-y-4 pt-2">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-semibold">4</span>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        Maîtrise du CAPEX et sécurisation des budgets
      </h2>
    </div>

    <p className="text-slate-700">
      Une lecture précise des données permet de réduire l’incertitude — donc de réduire les mauvais investissements.
    </p>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <ul className="grid gap-3 md:grid-cols-2 text-slate-700">
        <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Éviter des travaux prématurés</li>
        <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Prioriser les investissements à fort rendement</li>
        <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Réduire les dépenses inutiles</li>
        <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Optimiser le plan pluriannuel de travaux</li>
      </ul>

      <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-5">
        <p className="text-slate-900 font-semibold">Conclusion</p>
        <p className="mt-2 text-slate-700">
          Le CAPEX devient <strong className="text-slate-900">piloté</strong>, non subi.
        </p>
      </div>
    </div>
  </div>

  
  <div className="space-y-4 pt-2">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-semibold">5</span>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        RSE et valorisation patrimoniale
      </h2>
    </div>

    <p className="text-slate-700">
      La performance énergétique devient un avantage durable — pour la conformité, pour la valeur, pour l’attractivité.
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-900 font-semibold">Enjeux</p>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Responsabilité sociétale</li>
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Anticipation réglementaire</li>
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Valorisation des biens</li>
          <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600"></span>Attractivité pour les acquéreurs</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
        <p className="text-slate-900 font-semibold">Effet long terme</p>
        <p className="mt-3 text-slate-700">
          Une copropriété capable de démontrer sa trajectoire énergétique
          <strong className="text-slate-900"> renforce sa valeur</strong> et sécurise ses décisions futures.
        </p>
      </div>
    </div>
  </div>

 
  <div className="space-y-4 pt-2">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-semibold">6</span>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        Un levier de crédibilité pour le syndic
      </h2>
    </div>

    <p className="text-slate-700">
      Un syndic capable de présenter des indicateurs compréhensibles, des comparaisons objectives,
      des scénarios chiffrés et un suivi mesurable <strong className="text-slate-900">transforme l’AG</strong>.
    </p>

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
      <p className="text-blue-900 font-semibold text-lg">
        La gestion énergétique devient un outil stratégique de pilotage — pas un sujet subi.
      </p>
      <p className="mt-2 text-slate-700">
        Et la transparence devient un avantage concurrentiel.
      </p>
    </div>
  </div>
</section>
    </>
    ),
  },

  entreprises: {
    article_name:"Entreprises",
    title: "Performance énergétique : un levier direct sur votre marge",
    subtitle: "Ce que vous ne mesurez pas vous coûte. Ce que vous pilotez devient un avantage compétitif.",
    image: "/images/article-entreprises.png",
    content: (
      <>
      <section className="space-y-8">

{/* HERO INTRO */}
<div className="space-y-4">
  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
    Performance énergétique : un levier direct sur la marge
  </h2>

  <p className="text-lg text-slate-700 font-medium">
    Ce que vous ne mesurez pas vous coûte. <br />
    Ce que vous pilotez devient un avantage compétitif.
  </p>

  <p className="text-slate-700 leading-relaxed">
    Dans un contexte de volatilité des prix de l’énergie, de pression réglementaire
    et d’exigences RSE accrues, la performance énergétique n’est plus un sujet technique.
    <strong className="text-slate-900"> C’est un enjeu stratégique et financier.</strong>
  </p>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

{/* IMPACT ECONOMIQUE */}
<div className="space-y-6">
  <h3 className="text-2xl font-semibold text-slate-900">
    Un impact direct sur la performance économique
  </h3>

  <p className="text-slate-700">
    La consommation énergétique influence directement :
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    {[
      "La marge opérationnelle",
      "Le résultat d’exploitation",
      "La compétitivité prix",
      "La structure de coûts fixes",
      "La valorisation de l’entreprise",
    ].map((item) => (
      <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="font-medium text-slate-900">{item}</p>
      </div>
    ))}
  </div>

  <div className="rounded-2xl bg-blue-50 border border-blue-200 p-6">
    <p className="text-blue-900 font-semibold">
      Chaque dérive non détectée est une perte silencieuse.
    </p>
    <p className="mt-2 text-slate-700">
      Chaque optimisation devient un gain net.
    </p>
  </div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

{/* ENJEUX ENTREPRISE */}
<div className="space-y-6">
  <h3 className="text-2xl font-semibold text-slate-900">
    Les enjeux récurrents en entreprise
  </h3>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="font-semibold text-slate-900 mb-3">Multi-sites</h4>
      <ul className="space-y-2 text-slate-700">
        <li>Absence de vision consolidée</li>
        <li>Difficulté à comparer les performances</li>
        <li>Manque d’indicateurs homogènes</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="font-semibold text-slate-900 mb-3">Pilotage financier</h4>
      <ul className="space-y-2 text-slate-700">
        <li>Peu de visibilité pour la direction financière</li>
        <li>Pas de corrélation énergie / rentabilité</li>
        <li>Difficulté à prioriser les investissements</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="font-semibold text-slate-900 mb-3">Exploitation</h4>
      <ul className="space-y-2 text-slate-700">
        <li>Dérives invisibles (nuit / week-end)</li>
        <li>Consommations non corrélées à l’activité</li>
        <li>Manque d’alertes automatisées</li>
      </ul>
    </div>

  </div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

{/* ROI ENERGETIQUE */}
<div className="space-y-6">
  <h3 className="text-2xl font-semibold text-slate-900">
    Mesurer le ROI énergétique
  </h3>

  <p className="text-slate-700">
    La performance énergétique doit être traitée comme un actif stratégique.
  </p>

  <ul className="grid gap-3 md:grid-cols-2 text-slate-700">
    {[
      "Identifier les gisements d’économies immédiats",
      "Quantifier les pertes invisibles",
      "Simuler les économies potentielles",
      "Calculer le ROI de chaque action",
      "Arbitrer entre OPEX et CAPEX",
    ].map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
        {item}
      </li>
    ))}
  </ul>

  <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
    <p className="text-blue-900 font-semibold text-lg">
      Un projet énergétique n’est plus une charge.
    </p>
    <p className="text-slate-700 mt-2">
      Il devient un investissement mesurable.
    </p>
  </div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

{/* CAPEX */}
<div className="space-y-6">
  <h3 className="text-2xl font-semibold text-slate-900">
    Maîtrise du CAPEX et optimisation budgétaire
  </h3>

  <ul className="space-y-3 text-slate-700">
    <li>Évaluer l’impact réel sur la consommation</li>
    <li>Prioriser les investissements à fort rendement</li>
    <li>Sécuriser les décisions d’investissement</li>
    <li>Éviter des CAPEX mal dimensionnés</li>
  </ul>

  <p className="font-medium text-slate-900">
    L’énergie passe d’un poste subi à un poste piloté.
  </p>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

{/* RSE */}
<div className="space-y-6">
  <h3 className="text-2xl font-semibold text-slate-900">
    RSE et indicateurs carbone intégrés
  </h3>

  <ul className="space-y-2 text-slate-700">
    <li>Engagements RSE</li>
    <li>Bilans carbone</li>
    <li>Rapports extra-financiers</li>
    <li>Conformité réglementaire</li>
  </ul>

  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <p className="font-semibold text-slate-900 mb-3">
      Les meilleures organisations :
    </p>
    <ul className="space-y-2 text-slate-700">
      <li>Pilotent leur coût énergétique par site</li>
      <li>Disposent d’alertes automatiques</li>
      <li>Intègrent des indicateurs carbone</li>
      <li>Suivent leur trajectoire d’amélioration</li>
    </ul>
  </div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

{/* CONCLUSION */}
<div className="space-y-4">
  <h3 className="text-2xl font-semibold text-slate-900">
    D’un centre de coût à un avantage compétitif
  </h3>

  <p className="text-slate-700">
    L’énergie n’est plus un simple poste de dépense.
    <strong className="text-slate-900"> C’est un levier de performance globale.</strong>
  </p>

  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
    <p className="text-blue-900 font-semibold">
      Une entreprise capable de consolider ses données, anticiper les dérives,
      objectiver ses investissements et démontrer ses gains
      transforme la performance énergétique en avantage concurrentiel durable.
    </p>
  </div>
</div>

</section>
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
    <main className="bg-slate-50">
    <div className="mx-auto max-w-5xl px-6 pt-4 pb-16">
      {/* HERO MAGAZINE */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {/* bandeau subtil */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/60 via-white to-white" />

        <div className="relative p-6 sm:p-10">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between gap-4">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-700">
                Accueil
              </Link>{" "}
              <span className="mx-2">/</span>
              <Link href="/expertise" className="hover:text-slate-700">
                Expertise
              </Link>{" "}
              <span className="mx-2">/</span>
              <span className="text-slate-700 font-medium">{article.article_name}</span>
            </nav>

            <Link
              href="/expertise"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
            >
              <span>←</span> Retour
            </Link>
          </div>

          {/* Hero grid */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center">
            {/* Image (proche header + “magazine cover”) */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-blue-900">
                {article.title}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                {article.subtitle}
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
        <div className="prose prose-slate max-w-none">
          {/* On garde tes styles existants via tailwind classes dans content */}
          <div className="space-y-6 text-slate-800 leading-relaxed">
            {article.content}
          </div>
        </div>

        {/* Footer CTA / retour */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition"
          >
            <span className="text-lg">←</span>
            Retour à l’expertise
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto rounded-xl bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800 transition shadow-sm">
              Demander une démo
            </button>
          </Link>
        </div>
      </section>
    </div>
  </main>
  );
}
