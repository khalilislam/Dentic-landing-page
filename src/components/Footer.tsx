import { Facebook, Instagram, Phone, MapPin, Stethoscope } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Dr. Bourada Ahmed</p>
                <p className="text-cyan-300 text-xs">Chirurgien Dentiste</p>
              </div>
            </div>
            <p className="text-sky-200 text-sm leading-relaxed mb-5">
              Cabinet dentaire moderne à Oued Rhiou. Des soins de qualité dans un cadre bienveillant
              pour toute la famille.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100086928591621"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/docteurbourada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 text-white">Navigation</p>
            <ul className="space-y-2">
              {[
                ['#hero', 'Accueil'],
                ['#about', 'À propos'],
                ['#services', 'Services'],
                ['#before-after', 'Avant / Après'],
                ['#inscription', 'Prendre RDV'],
                ['#contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sky-200 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold mb-4 text-white">Contact</p>
            <div className="space-y-3">
              <a href="tel:0558888397" className="flex items-center gap-2 text-sky-200 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                0558 88 83 97
              </a>
              <div className="flex items-start gap-2 text-sky-200 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Rue Tertag Mohamed, Oued Rhiou,<br />Wilaya de Relizane (48), Algérie</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sky-300 text-xs">
          <p>&copy; {new Date().getFullYear()} Cabinet Dentaire Dr. Bourada Ahmed. Tous droits réservés.</p>
          <p>Oued Rhiou, Wilaya de Relizane, Algérie</p>
        </div>
      </div>
    </footer>
  );
}
