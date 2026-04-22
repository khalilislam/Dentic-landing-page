import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-50 text-cyan-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Localisation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Nous Trouver &{' '}
            <span className="text-cyan-600">Nous Contacter</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-sky-50 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Téléphone</p>
                <a href="tel:0558888397" className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg transition-colors">
                  0558 88 83 97
                </a>
                <p className="text-gray-500 text-sm mt-0.5">Appelez pour un rendez-vous urgent</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-sky-50 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Adresse</p>
                <p className="text-gray-700">Rue Tertag Mohamed</p>
                <p className="text-gray-700">Oued Rhiou, Wilaya de Relizane (48)</p>
                <p className="text-gray-500 text-sm mt-1">Algérie</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-sky-50 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Horaires d'ouverture</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between gap-8 text-gray-700">
                    <span>Samedi – Jeudi</span>
                    <span className="font-medium">08:30 – 18:00</span>
                  </div>
                  <div className="flex justify-between gap-8 text-gray-400">
                    <span>Vendredi</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100086928591621"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/docteurbourada/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.0!2d0.9243!3d35.9647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU3JzUzLjEiTiAwwrA1NSczNS41IkU!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Cabinet Dr. Bourada Ahmed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
