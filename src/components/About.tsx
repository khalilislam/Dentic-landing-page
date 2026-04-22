import { Award, GraduationCap, Users, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const getStats = (language: 'fr' | 'ar') => [
  { icon: Users, value: '500+', label: language === 'fr' ? 'Patients traités' : 'مريض تم علاجهم' },
  { icon: Award, value: '10+', label: language === 'fr' ? "Ans d'expérience" : 'سنوات الخبرة' },
  { icon: Star, value: '4.9', label: language === 'fr' ? 'Note moyenne' : 'متوسط التقييم' },
  { icon: GraduationCap, value: '100%', label: language === 'fr' ? 'Soins de qualité' : 'جودة العلاج' },
];

export default function About() {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const stats = getStats(language);
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-white" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-48 h-48 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #0891b2, transparent)' }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100">
              <img
                src="/gemini-3-pro-image-preview-2k_a_هذه_الصورة_صورة_سيلف.png"
                alt="Docteur Bourada Ahmed"
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-900/80 to-transparent p-6">
                <p className="text-white font-bold text-xl">Dr. Bourada Ahmed</p>
                <p className="text-cyan-300 text-sm">
                  {language === 'fr' ? 'Chirurgien Dentiste — Oued Rhiou' : 'طبيب أسنان — أولاد رهيو'}
                </p>
              </div>
            </div>
            <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-cyan-500 text-white rounded-2xl p-4 shadow-xl`}>
              <GraduationCap className="w-8 h-8 mb-1" />
              <p className="font-bold text-sm">
                {language === 'fr' ? 'Diplômé' : 'حاصل على الشهادة'}
              </p>
              <p className="text-cyan-100 text-xs">
                {language === 'fr' ? 'Université d\'Alger' : 'جامعة الجزائر'}
              </p>
            </div>
          </div>

          <div>
            <span className="inline-block bg-cyan-50 text-cyan-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              {language === 'fr' ? 'À propos du médecin' : 'عن طبيب الأسنان'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {language === 'fr' ? (
                <>Des Soins Dentaires <span className="text-cyan-600">Personnalisés</span> et Modernes</>
              ) : (
                <>علاجات أسنان <span className="text-cyan-600">مخصصة</span> وحديثة</>
              )}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'fr' ? (
                <>
                  Le <strong className="text-gray-800">Docteur Bourada Ahmed</strong>, Chirurgien Dentiste diplômé,
                  exerce à Oued Rhiou (Wilaya de Relizane) avec plus de 10 ans d'expérience dans le domaine
                  de la dentisterie moderne.
                </>
              ) : (
                <>
                  <strong className="text-gray-800">الدكتور بورادة أحمد</strong>، طبيب أسنان متخصص، يمارس مهنته في أولاد رهيو (ولاية الرليزانة) بخبرة تزيد عن 10 سنوات في مجال طب الأسنان الحديث.
                </>
              )}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {language === 'fr' ? (
                <>
                  Son cabinet dispose d'équipements de dernière génération pour vous garantir des soins
                  de haute qualité dans un environnement sûr, propre et accueillant. Sa priorité : votre
                  confort et votre santé bucco-dentaire.
                </>
              ) : (
                <>
                  يتمتع عيادته بأحدث التجهيزات لضمان علاجات عالية الجودة في بيئة آمنة ونظيفة وودية. أولويته: راحتك وصحة فمك وأسنانك.
                </>
              )}
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
              <strong>{language === 'fr' ? 'Note :' : 'ملاحظة:'}</strong> {language === 'fr' ? 'La biographie complète et les diplômes du médecin seront ajoutés prochainement.' : 'السيرة الذاتية الكاملة وشهادات الطبيب سيتم إضافتها قريبا.'}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 bg-sky-50 rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900 text-lg leading-none">{value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
