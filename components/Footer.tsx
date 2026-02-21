export default function Footer() {
    return (
      <footer className="mt-14 border-t border-black/10 bg-white/75 backdrop-blur-md">
        <div className="max-w-[1100px] mx-auto px-4 py-6 text-center text-[#0b1f3a] space-y-2">
  
          <div className="text-[15px] font-semibold">
            <strong>Atmocity</strong> — Pilotage énergétique intelligent
          </div>
  
          <div className="text-[13px] opacity-80">
            © 2026 Atmocity • Tous droits réservés.
          </div>
  
          <nav className="flex flex-wrap justify-center gap-2 text-[13px] font-semibold text-[#0b3a84]">
            <a href="/mentions-legales" className="hover:underline">
              📍 Mentions légales
            </a>
            <span className="opacity-50">•</span>
            <a href="/politique-de-confidentialite" className="hover:underline">
              📍 Politique de confidentialité (RGPD)
            </a>
            <span className="opacity-50">•</span>
            <a href="/conditions-generales" className="hover:underline">
              📍 Conditions générales d’utilisation
            </a>
          </nav>
  
        </div>
      </footer>
    );
  }