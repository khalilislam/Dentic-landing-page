import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Phone, Heart, Baby, FileText } from 'lucide-react';
import { FormData, FormErrors } from '../types/form';
import { useInView } from '../hooks/useInView';
import SectionA from './form/SectionA';
import SectionB from './form/SectionB';
import SectionC from './form/SectionC';
import SectionD from './form/SectionD';
import SectionE from './form/SectionE';

const WEBHOOK_URL = 'https://n8n.khalilislam.cfd/webhook-test/Docteur_Bourada_Ahmed';

const initialData: FormData = {
  nom: '', prenom: '', dateNaissance: '', age: '', sexe: '', etatCivil: '',
  nationalId: '', profession: '', telephone: '', email: '', adresse: '',
  ville: '', codePostal: '', notifications: [], groupeSanguin: '', refererPar: '',
  nbGrossesses: 0, parite: 0, nbCesariennes: 0, nbAvortements: 0, evbp: 0,
  dateMariage: '', dureeMariage: '', dernieresRegles: '', dateConception: '',
  ageGestationnel: '', observations: '',
};

function validate(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (!data.nom.trim() || data.nom.trim().length < 2) e.nom = 'Le nom doit comporter au moins 2 lettres.';
  if (!data.prenom.trim() || data.prenom.trim().length < 2) e.prenom = 'Le prénom doit comporter au moins 2 lettres.';
  if (!data.dateNaissance) e.dateNaissance = 'La date de naissance est obligatoire.';
  if (!data.sexe) e.sexe = 'Veuillez sélectionner le sexe.';
  if (!data.etatCivil) e.etatCivil = "Veuillez sélectionner l'état civil.";
  if (!data.nationalId.trim()) e.nationalId = "Le numéro national est obligatoire.";
  if (!data.telephone.trim()) {
    e.telephone = 'Le numéro de téléphone est obligatoire.';
  } else if (!/^(\+213|0)[0-9]{9}$/.test(data.telephone.replace(/\s/g, ''))) {
    e.telephone = 'Format invalide. Ex : 0558 88 83 97 ou +213 558 88 83 97';
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    e.email = 'Adresse email invalide.';
  }
  return e;
}

const sections = [
  { id: 'A', icon: User, title: 'Informations Personnelles' },
  { id: 'B', icon: Phone, title: 'Contact & Adresse' },
  { id: 'C', icon: Heart, title: 'Informations Médicales' },
  { id: 'D', icon: Baby, title: 'Informations Grossesse' },
  { id: 'E', icon: FileText, title: 'Observations' },
];

export default function RegistrationForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView();

  const onChange = (field: keyof FormData, value: string | number | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErr = document.querySelector('[data-error]');
      firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setLoading(true);
    setStatus('idle');

    const payload = {
      patient: {
        nom: data.nom, prenom: data.prenom, dateNaissance: data.dateNaissance,
        age: data.age, sexe: data.sexe, etatCivil: data.etatCivil,
        nationalId: data.nationalId, profession: data.profession,
      },
      contact: {
        telephone: data.telephone, email: data.email, adresse: data.adresse,
        ville: data.ville, codePostal: data.codePostal, notifications: data.notifications,
      },
      medical: { groupeSanguin: data.groupeSanguin, refererPar: data.refererPar },
      grossesse: data.sexe === 'Féminin' ? {
        nbGrossesses: data.nbGrossesses, parite: data.parite,
        nbCesariennes: data.nbCesariennes, nbAvortements: data.nbAvortements,
        evbp: data.evbp, dateMariage: data.dateMariage, dureeMariage: data.dureeMariage,
        dernieresRegles: data.dernieresRegles, dateConception: data.dateConception,
        ageGestationnel: data.ageGestationnel,
      } : {},
      observations: data.observations,
      meta: { timestamp: new Date().toISOString(), source: 'landing_page' },
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setStatus('success');
      setData(initialData);
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const sectionProps = { data, errors, onChange };

  return (
    <section id="inscription" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-50 text-cyan-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Inscription en ligne
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Formulaire d'<span className="text-cyan-600">Inscription Patient</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Remplissez ce formulaire pour vous inscrire comme nouveau patient. Nous vous contacterons
            dans les plus brefs délais pour confirmer votre rendez-vous.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {status === 'success' && (
            <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-emerald-800 text-lg">Inscription enregistrée !</p>
                <p className="text-emerald-700 text-sm mt-1">
                  Votre inscription a bien été enregistrée. Nous vous contacterons bientôt.
                </p>
              </div>
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800 text-lg">Une erreur est survenue</p>
                <p className="text-red-700 text-sm mt-1">
                  Veuillez réessayer ou nous contacter au{' '}
                  <a href="tel:0558888397" className="underline font-semibold">0558 88 83 97</a>.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {sections.map(({ id, icon: Icon, title }) => {
              if (id === 'D' && data.sexe !== 'Féminin') return null;
              return (
                <div key={id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div
                    className="flex items-center gap-3 px-6 py-4 border-b border-gray-100"
                    style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-cyan-500 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-cyan-600 font-bold uppercase tracking-wider">Section {id}</span>
                      <p className="font-bold text-gray-800 text-sm leading-tight">{title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    {id === 'A' && <SectionA {...sectionProps} />}
                    {id === 'B' && <SectionB {...sectionProps} />}
                    {id === 'C' && <SectionC {...sectionProps} />}
                    {id === 'D' && <SectionD data={data} onChange={onChange} />}
                    {id === 'E' && <SectionE {...sectionProps} />}
                  </div>
                </div>
              );
            })}

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 font-bold text-white py-4 rounded-2xl transition-all text-base shadow-lg ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-cyan-500 hover:bg-cyan-600 hover:shadow-cyan-500/40 hover:-translate-y-0.5'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer ma demande d'inscription
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
