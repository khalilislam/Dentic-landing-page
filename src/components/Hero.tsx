import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export default function Hero() {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 45%, #0891b2 100%)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className={`relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center ${isRTL ? 'rtl' : ''}`}>
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-200 text-sm font-medium">
              {language === 'fr' ? 'Cabinet ouvert — Prenez rendez-vous' : 'العيادة مفتوحة - احجز موعداً'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            {language === 'fr' ? (
              <>Un Sourire Parfait <span className="text-cyan-400">Commence Ici</span></>
            ) : (
              <>ابدأ رحلتك نحو <span className="text-cyan-400">ابتسامة مثالية</span></>
            )}
          </h1>

          <p className="text-sky-100 text-lg leading-relaxed mb-8 max-w-lg">
            {language === 'fr' ? (
              <>
                Le <strong className="text-white">Docteur Bourada Ahmed</strong>, Chirurgien Dentiste à Oued Rhiou,
                vous offre des soins dentaires de qualité dans un cadre moderne et bienveillant.
              </>
            ) : (
              <>
                <strong className="text-white">الدكتور بورادة أحمد</strong>، طبيب أسنان متخصص في أولاد رهيو،
                يقدم لك خدمات طب الأسنان عالية الجودة في بيئة حديثة وودية.
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => scrollTo('#inscription')}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              {language === 'fr' ? 'Prendre Rendez-vous' : 'احجز موعدا الآن'}
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10"
            >
              {language === 'fr' ? 'Nos Services' : 'خدماتنا'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href="tel:0558888397"
              className="flex items-center gap-2 text-sky-200 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              0558 88 83 97
            </a>
            <span className="flex items-center gap-2 text-sky-200">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {language === 'fr' ? 'Oued Rhiou, Relizane (48)' : 'أولاد رهيو، ولاية الرليزانة (48)'}
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(8,145,178,0.3) 0%, transparent 70%)',
                transform: 'scale(1.3)',
              }}
            />
            <div className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/1776627944940-019da746-6bd3-769f-8494-32156aa71e6e.png"
                alt="Docteur Bourada Ahmed"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className={`absolute -bottom-4 ${isRTL ? '-right-4' : '-left-4'} bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3`}>
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <span className="text-cyan-600 text-xl">🦷</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">
                  {language === 'fr' ? '+500 Patients' : '+500 مريض'}
                </p>
                <p className="text-gray-500 text-xs">
                  {language === 'fr' ? 'Satisfaits' : 'راضون'}
                </p>
              </div>
            </div>
            <div className={`absolute -top-4 ${isRTL ? '-left-4' : '-right-4'} bg-cyan-500 text-white rounded-2xl shadow-xl px-4 py-2 text-center`}>
              <p className="font-extrabold text-2xl leading-none">10+</p>
              <p className="text-xs text-cyan-100">
                {language === 'fr' ? "Ans d'expérience" : 'سنوات خبرة'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
