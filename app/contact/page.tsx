"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const slots = [
  "Aujourd’hui 16:00",
  "Aujourd’hui 17:30",
  "Dem. 10:00",
  "Dem. 14:30",
];

export default function ContactPage() {
    
        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState<string | null>(null);
        const [selectedSlot, setSelectedSlot] = useState<string>("");
        const formRef = useRef<HTMLFormElement | null>(null);
      
        async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
          e.preventDefault();
          setMessage(null);
          setLoading(true);
          
          const form = new FormData(e.currentTarget); // ✅ toujours le bon form
          
          const payload = {
            name: String(form.get("name") || ""),
            email: String(form.get("email") || ""),
            org: String(form.get("org") || ""),
            sites: String(form.get("sites") || ""),
            slot: selectedSlot,
            page: "/contact",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
          };
      
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
        
            const text = await res.text();
            let data: any = null;
            try { data = JSON.parse(text); } catch {}
        
            if (!res.ok || !data?.ok) {
              setMessage(data?.error || text || `Erreur HTTP ${res.status}`);
              return;
            }
            
        
            setMessage("✅ Merci ! On vous recontacte sous 24h.");
            //e.currentTarget.reset();
            setSelectedSlot("");
          } catch (err: any) {
            setMessage(`Erreur réseau: ${err?.message || err}`);
          } finally {
            setLoading(false);
          }
        }
  return (
    <main className="relative min-h-[calc(100vh-96px)]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/page_daccueil.png"
          alt="Atmocity background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/55 to-white/70" />
      </div>

      <section className="mx-auto max-w-6xl px-6 pt-14 pb-20">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-5 flex justify-center">
            <div className="rounded-2xl bg-white/65 backdrop-blur px-6 py-3 shadow-sm ring-1 ring-white/40">
              <Image
                src="/images/logo-atmocity.png"
                alt="Atmocity"
                width={220}
                height={70}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-700">
            Assurez votre conformité et financez d’autres projets
            <br className="hidden md:block" />
            grâce à vos économies.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Left: form */}
          <div className="rounded-3xl bg-white/55 backdrop-blur-xl shadow-xl ring-1 ring-white/50">
            <div className="p-7 md:p-9">
              <h2 className="text-2xl font-semibold text-slate-900">
                Planifiez votre échange en 15 minutes
              </h2>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <Field icon="👤" placeholder="Nom" name="name" />
                <Field icon="✉️" placeholder="E-mail" name="email" type="email" />
                <Field icon="🏢" placeholder="Organisation" name="org" />
                <Field icon="📍" placeholder="Nombre de sites" name="sites" />

                <div className="pt-2">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200/70" />
                    <p className="text-sm text-slate-600">Ou réservez un créneau</p>
                    <div className="h-px flex-1 bg-slate-200/70" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSlot(s)}
                        className={[
                            "rounded-xl px-4 py-2 text-sm shadow-sm ring-1 transition",
                            selectedSlot === s
                              ? "bg-blue-700 text-white ring-blue-700"
                              : "bg-white/70 hover:bg-white text-slate-700 ring-slate-200/60",
                          ].join(" ")}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  {selectedSlot && (
            <p className="mt-3 text-sm text-slate-600">
              Créneau sélectionné : <span className="font-semibold">{selectedSlot}</span>
            </p>
          )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-3 w-full rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 shadow-lg shadow-blue-700/20 transition"
                >
                  {loading ? "Envoi..." : <>Envoyer <span className="ml-2">›</span></>}
                </button>
                {message && (
          <p className="text-sm text-slate-700 bg-white/70 ring-1 ring-slate-200/60 rounded-xl p-3">
            {message}
          </p>
        )}
                <p className="text-xs text-slate-500">
                  En envoyant ce formulaire, vous acceptez d’être recontacté par Atmocity.
                </p>
              </form>
            </div>
          </div>

          {/* Right: reasons + contact info */}
          <div className="rounded-3xl bg-white/55 backdrop-blur-xl shadow-xl ring-1 ring-white/50">
            <div className="p-7 md:p-9">
              <h2 className="text-2xl font-semibold text-slate-900">
                Pourquoi nous contacter ?
              </h2>

              <ul className="mt-5 space-y-3 text-slate-800">
                <Li>Détection d’économies potentielles</Li>
                <Li>Accès à votre tableau de bord en DEMO</Li>
                <Li>Chiffrage technique et financier sur-mesure</Li>
              </ul>

              <div className="mt-7 space-y-3 rounded-2xl bg-white/60 ring-1 ring-slate-200/60 p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700/10 text-blue-800">
                    📞
                  </span>
                  <p className="text-slate-800">
                    <span className="font-semibold">Téléphone :</span>{" "}
                    <span className="text-slate-600">à renseigner</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700/10 text-blue-800">
                    ✉️
                  </span>
                  <p className="text-slate-800">
                    <span className="font-semibold">Email :</span>{" "}
                    <a
                      href="mailto:contact@atmocity.com"
                      className="text-blue-800 underline underline-offset-2"
                    >
                      contact@atmocity.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white/60 ring-1 ring-slate-200/60 p-5">
                <h3 className="font-semibold text-slate-900">
                  Ce que vous recevez après la demande :
                </h3>
                <ul className="mt-3 space-y-2 text-slate-800">
                  <Li2>Une étude personnalisée pour détecter vos économies</Li2>
                  <Li2>L’accès à notre plateforme de pilotage en démonstration</Li2>
                </ul>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                Temps de réponse moyen : <span className="font-semibold">24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Small components */
function Field({
  icon,
  placeholder,
  name,
  type = "text",
}: {
  icon: string;
  placeholder: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/70 ring-1 ring-slate-200/60 px-4 py-3">
      <span className="text-slate-500">{icon}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
      />
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-700/10 text-blue-800">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function Li2({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

