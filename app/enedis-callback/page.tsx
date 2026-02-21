"use client";

import { useSearchParams } from "next/navigation";

export default function EnedisCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center space-y-4">

        <h1 className="text-2xl font-semibold text-slate-900">
          Résultat de connexion
        </h1>

        {code && (
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-green-800 break-all">
            Code reçu : <strong>{code}</strong>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-red-800">
            Erreur : {error}
          </div>
        )}

        {!code && !error && (
          <p className="text-slate-600">
            Aucune information reçue.
          </p>
        )}
      </div>
    </main>
  );
}