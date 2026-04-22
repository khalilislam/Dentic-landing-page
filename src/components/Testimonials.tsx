import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Karim B.',
    location: 'Oued Rhiou',
    rating: 5,
    text: "Docteur Bourada est un médecin exceptionnel. Très professionnel, à l'écoute et ses soins sont impeccables. Je recommande vivement son cabinet à toute la famille.",
    avatar: 'K',
  },
  {
    name: 'Fatima Z.',
    location: 'Relizane',
    rating: 5,
    text: "J'avais très peur des soins dentaires, mais le docteur m'a mise en confiance dès la première consultation. Cabinet moderne, personnel accueillant. Résultat magnifique !",
    avatar: 'F',
  },
  {
    name: 'Mohamed A.',
    location: 'Chlef',
    rating: 5,
    text: "Pose de couronnes parfaitement réalisée. Le résultat est naturel et mes dents n'ont jamais été aussi belles. Merci Docteur Bourada pour votre expertise.",
    avatar: 'M',
  },
  {
    name: 'Nadia H.',
    location: 'Mostaganem',
    rating: 5,
    text: "Service 5 étoiles. Du premier appel jusqu'à la fin du traitement, tout était parfait. Je viens de loin mais ça vaut vraiment le déplacement.",
    avatar: 'N',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-50 text-cyan-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ce que Disent{' '}
            <span className="text-cyan-600">Nos Patients</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            La confiance de nos patients est notre plus grande fierté.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-cyan-100" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
