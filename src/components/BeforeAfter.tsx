import { useRef, useState, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

interface SliderCase {
  before: string;
  after: string;
  label: string;
  description: string;
}

const getCases = (language: 'fr' | 'ar') => [
  {
    before: '/صورة_بدون_نص_1.jpeg',
    after: '/صورة_بدون_نص_2.jpeg',
    label: language === 'fr' ? 'Traitement Orthodontique' : 'العلاج التقويمي',
    description: language === 'fr'
      ? 'Correction complète de l\'alignement dentaire avec un appareil moderne.'
      : 'تصحيح كامل لمحاذاة الأسنان باستخدام جهاز حديث.',
  },
  {
    before: '/1776626707933.jpeg',
    after: '/1776626699128.jpeg',
    label: language === 'fr' ? 'Pose de Couronnes' : 'وضع التيجان',
    description: language === 'fr'
      ? 'Réhabilitation complète de la mâchoire supérieure avec couronnes céramiques.'
      : 'إعادة تأهيل كاملة للفك العلوي باستخدام تيجان خزفية.',
  },
  {
    before: '/صورة_بدون_نص_3.jpeg',
    after: '/صورة_بدون_نص_4.jpeg',
    label: language === 'fr' ? 'Restauration Dentaire' : 'استعادة الأسنان',
    description: language === 'fr'
      ? 'Restauration des dents endommagées pour un sourire éclatant et naturel.'
      : 'استعادة الأسنان التالفة للحصول على ابتسامة متألقة وطبيعية.',
  },
];

function BeforeAfterSlider({ before, after, label, description }: SliderCase) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div
        ref={containerRef}
        className="relative select-none cursor-col-resize overflow-hidden"
        style={{ aspectRatio: '4/3' }}
        onMouseDown={(e) => { isDragging.current = true; updatePos(e.clientX); }}
        onMouseMove={(e) => { if (isDragging.current) updatePos(e.clientX); }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onTouchStart={(e) => { isDragging.current = true; updatePos(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (isDragging.current) updatePos(e.touches[0].clientX); }}
        onTouchEnd={() => { isDragging.current = false; }}
      >
        <img
          src={after}
          alt="Après"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt="Avant"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-cyan-400">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 9H12M6 9L4 7M6 9L4 11M12 9L14 7M12 9L14 11" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
          AVANT
        </div>
        <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          APRÈS
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg mb-1">{label}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { language, isRTL } = useLanguage();
  const { ref, inView } = useInView();
  const cases = getCases(language);

  return (
    <section id="before-after" className="py-24 bg-white" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-50 text-cyan-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            {language === 'fr' ? 'Résultats Réels' : 'نتائج حقيقية'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {language === 'fr' ? (
              <>Transformations <span className="text-cyan-600">Avant / Après</span></>
            ) : (
              <>تحويلات <span className="text-cyan-600">قبل / بعد</span></>
            )}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            {language === 'fr'
              ? 'Faites glisser le curseur pour voir les résultats obtenus par nos patients.'
              : 'اسحب المؤشر لترى النتائج التي حققها مرضانا.'}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {cases.map((c) => (
            <BeforeAfterSlider key={c.label} {...c} />
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          {language === 'fr'
            ? 'Faites glisser le diviseur pour comparer — résultats obtenus au cabinet du Dr. Bourada Ahmed'
            : 'اسحب المقسم للمقارنة - النتائج من عيادة الدكتور بورادة أحمد'}
        </p>
      </div>
    </section>
  );
}
