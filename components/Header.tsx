"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/a-propos" },
  { label: "Documentation / Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/logo-atmocity.png"
            alt="Atmocity"
            width={200}
            height={60}
            priority
            className="h-24 w-auto cursor-pointer"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-4">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-2 rounded-full transition font-medium ${
                  isActive
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="hidden md:block">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition shadow-md">
            Demander une démo
          </button>
        </Link>

      </div>
    </header>
  );
}
