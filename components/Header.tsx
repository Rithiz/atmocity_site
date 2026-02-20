"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/a-propos" },
  { label: "Documentation / Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Ferme le menu quand on navigue
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Empêche le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
  <Image
    src="/images/logo-atmocity.png"
    alt="Atmocity"
    width={380}
    height={120}
    priority
    className="h-20 sm:h-24 w-auto"
  />
</Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-3">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "px-5 py-2 rounded-full transition font-medium whitespace-nowrap",
                  isActive
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-blue-50 text-blue-900 hover:bg-blue-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA DESKTOP */}
        <Link href="/contact" className="hidden md:block shrink-0">
          <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition shadow-sm">
            Demander une démo
          </button>
        </Link>

        {/* BOUTON MOBILE */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-900 hover:bg-blue-100 ring-1 ring-blue-100"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icône hamburger */}
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={[
                "block h-0.5 w-5 bg-blue-900 transition",
                open ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-blue-900 transition",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-blue-900 transition",
                open ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      {/* OVERLAY + DRAWER MOBILE */}
      {open && (
        <div className="md:hidden">
          {/* Overlay */}
          <button
            aria-label="Fermer le menu"
            className="fixed inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-[86%] max-w-sm bg-white shadow-xl border-l border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <span className="text-slate-900 font-semibold">Menu</span>
              <button
                className="h-10 w-10 rounded-xl bg-blue-50 text-blue-900 hover:bg-blue-100 ring-1 ring-blue-100"
                aria-label="Fermer"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 grid gap-2">
              {nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "px-4 py-3 rounded-2xl transition font-medium",
                      isActive
                        ? "bg-blue-700 text-white"
                        : "bg-blue-50 text-blue-900 hover:bg-blue-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-2 pt-3 border-t border-gray-200">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <button className="w-full bg-blue-700 text-white px-5 py-3 rounded-2xl hover:bg-blue-800 transition shadow-sm">
                    Demander une démo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}