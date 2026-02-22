import Link from "next/link";

export default function EnedisConnectDemo() {
  const clientId = "IQdz6isGOxBk93U5eqaTqnsJ0d0a";
  const redirectUri = "https://atmocity.com/enedis-callback"; 
  const state = "atmocity1";

  const authorizeUrl =
    "https://mon-compte-particulier.enedis.fr/dataconnect/v1/oauth2/authorize" +
    `?client_id=${clientId}` +
    "&response_type=code" +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${state}` +
    "&duration=P1Y";

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center space-y-6">

        <h1 className="text-2xl font-semibold text-slate-900">
          Connexion Enedis
        </h1>

        <p className="text-slate-600">
          Autorisez Atmocity à accéder à vos données de consommation Enedis.
        </p>

        <a
          href={authorizeUrl}
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800 transition shadow-sm w-full"
        >
          Autoriser l’accès à mes données Enedis
        </a>

        <p className="text-sm text-slate-500">
          Après autorisation, un message affichera le code ou la confirmation de liaison.
        </p>

      </div>
    </main>
  );
}