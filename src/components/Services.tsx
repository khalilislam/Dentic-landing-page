import { Zap, Shield, Smile, Activity, RefreshCw, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

const getServices = (language: 'fr' | 'ar') => {
  if (language === 'fr') {
    return [
      {
        icon: Smile,
        title: 'Traitement Orthodontique',
        description: "Correction de l'alignement dentaire avec des appareils modernes pour un sourire harmonieux et équilibré.",
        color: 'bg-sky-50 text-sky-600',
      },
      {
        icon: Shield,
        title: 'Couronnes & Facettes',
        description: "Restauration et embellissement dentaire avec des couronnes céramiques et des facettes sur mesure.",
        color: 'bg-cyan-50 text-cyan-600',
      },
      {
        icon: Zap,
        title: 'Soins Conservateurs',
        description: "Traitement des caries et soins de canal pour préserver vos dents naturelles le plus longtemps possible.",
        color: 'bg-teal-50 text-teal-600',
      },
      {
        icon: Activity,
        title: 'Parodontologie',
        description: "Traitement des maladies des gencives : détartrage, surfaçage et suivi parodontal personnalisé.",
        color: 'bg-blue-50 text-blue-600',
      },
      {
        icon: RefreshCw,
        title: 'Restauration Dentaire',
        description: "Restauration complète et réparation des dents endommagées avec des matériaux biocompatibles durables.",
        color: 'bg-indigo-50 text-sky-700',
      },
      {
        icon: Eye,
        title: 'Consultation & Diagnostic',
        description: "Bilan bucco-dentaire complet avec radiographies numériques et plan de traitement détaillé.",
        color: 'bg-sky-50 text-sky-700',
      },
    ];
  } else {
    return [
      {
        icon: Smile,
        title: 'العلاج التقويمي',
        description: 'تصحيح محاذاة الأسنان باستخدام أجهزة حديثة للحصول على ابتسامة متناسقة.',
        color: 'bg-sky-50 text-sky-600',
      },
      {
        icon: Shield,
        title: 'التيجان والقشور',
        description: 'استعادة وتحسين الأسنان باستخدام تيجان خزفية وقشور مخصصة.',
        color: 'bg-cyan-50 text-cyan-600',
      },
      {
        icon: Zap,
        title: 'العلاجات الحفاظية',
        description: 'علاج التسوس وعلاجات القنوات للحفاظ على الأسنان الطبيعية.',
        color: 'bg-teal-50 text-teal-600',
      },
      {
        icon: Activity,
        title: 'طب اللثة',
        description: 'علاج أمراض اللثة: التنظيف العميق والكشط والمراقبة الدورية.',
        color: 'bg-blue-50 text-blue-600',
      },
      {
        icon: RefreshCw,
        title: 'استعادة الأسنان',
        description: 'استعادة شاملة وإصلاح الأسنان التالفة باستخدام مواد آمنة وعالية الجودة.',
        color: 'bg-indigo-50 text-sky-700',
      },
      {
        icon: Eye,
        title: 'التشخيص والاستشارة',
        description: 'فحص شامل للفم والأسنان مع الأشعات الرقمية وخطة علاج مفصلة.',
        color: 'bg-sky-50 text-sky-700',
      },
    ];
  }
};

export default function Services() {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const services = getServices(language);
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-24 bg-gray-50" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-50 text-cyan-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            {language === 'fr' ? 'Nos Prestations' : 'خدماتنا'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {language === 'fr' ? (
              <>Des Soins Complets pour <span className="text-cyan-600">Votre Santé Dentaire</span></>
            ) : (
              <>علاجات شاملة لـ <span className="text-cyan-600">صحة أسنانك</span></>
            )}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            {language === 'fr'
              ? 'Du diagnostic au traitement, nous couvrons l\'ensemble des besoins en santé bucco-dentaire avec des techniques modernes et un matériel de pointe.'
              : 'من التشخيص إلى العلاج، نغطي جميع احتياجات صحة الفم والأسنان بتقنيات حديثة ومعدات متقدمة.'}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
