import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export default function Navbar() {
  const { language, setLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: language === 'fr' ? 'Accueil' : 'الرئيسية', href: '#hero' },
    { label: language === 'fr' ? 'À propos' : 'من نحن', href: '#about' },
    { label: language === 'fr' ? 'Services' : 'الخدمات', href: '#services' },
    { label: language === 'fr' ? 'Avant / Après' : 'قبل / بعد', href: '#before-after' },
    { label: language === 'fr' ? 'Contact' : 'اتصل بنا', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className={`font-bold text-sm leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Dr. Bourada Ahmed
            </p>
            <p className={`text-xs ${scrolled ? 'text-cyan-600' : 'text-cyan-300'}`}>
              Chirurgien Dentiste
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className={`text-sm font-medium transition-colors hover:text-cyan-500 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
            <button
              onClick={() => setLanguage('fr')}
              className={`text-sm font-semibold px-3 py-1 rounded transition-all ${
                language === 'fr'
                  ? (scrolled ? 'bg-cyan-100 text-cyan-700' : 'bg-white/20 text-white')
                  : (scrolled ? 'text-gray-600 hover:text-cyan-600' : 'text-white/70 hover:text-white')
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`text-sm font-semibold px-3 py-1 rounded transition-all ${
                language === 'ar'
                  ? (scrolled ? 'bg-cyan-100 text-cyan-700' : 'bg-white/20 text-white')
                  : (scrolled ? 'text-gray-600 hover:text-cyan-600' : 'text-white/70 hover:text-white')
              }`}
            >
              AR
            </button>
          </div>
          <button
            onClick={() => handleLink('#inscription')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            {language === 'fr' ? 'Prendre RDV' : 'احجز الآن'}
          </button>
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-gray-700 text-sm font-medium text-left py-1 hover:text-cyan-500 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-2 border-t border-gray-100 pt-3 mt-2">
            <button
              onClick={() => setLanguage('fr')}
              className={`flex-1 text-sm font-semibold py-2 rounded transition-all ${
                language === 'fr'
                  ? 'bg-cyan-100 text-cyan-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`flex-1 text-sm font-semibold py-2 rounded transition-all ${
                language === 'ar'
                  ? 'bg-cyan-100 text-cyan-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              AR
            </button>
          </div>
          <button
            onClick={() => handleLink('#inscription')}
            className="bg-cyan-500 text-white font-semibold py-2 rounded-full text-sm"
          >
            {language === 'fr' ? 'Prendre RDV' : 'احجز الآن'}
          </button>
        </div>
      )}
    </nav>
  );
}
