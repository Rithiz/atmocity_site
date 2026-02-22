// app/enedis-callback/page.tsx
import Link from "next/link";

export default function EnedisCallbackPage({
  searchParams,
}: {
  searchParams: { code?: string; error?: string; state?: string };
}) {
  const code = searchParams.code;
  const error = searchParams.error;

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-6 py-14">
      <div className="mx-auto max-w-lg rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Connexion Enedis
        </h1>

        <p className="mt-3 text-slate-600">
          Retour d’autorisation Data Connect.
        </p>

        {code && (
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 break-all">
            ✅ Liaison confirmée.<br />
            <span className="font-semibold">Code :</span> {code}
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900 break-all">
            ❌ Erreur : {error}
          </div>
        )}

        {!code && !error && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
            Aucune information reçue (ni <code>code</code>, ni <code>error</code>).
          </div>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/enedis-connect-demo"
            className="rounded-xl bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800 transition"
          >
            Recommencer
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-white px-5 py-3 text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition"
          >
            Accueil
          </Link>
        </div>
      </div>
    </main>
  );
}