import { FormData, FormErrors } from '../../types/form';
import { calculateAge, todayString } from '../../utils/dateUtils';

interface Props {
  data: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: string | number | string[]) => void;
}

const inputClass = (error?: string) =>
  `w-full border rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all ${
    error
      ? 'border-red-400 focus:ring-red-200 bg-red-50'
      : 'border-gray-200 focus:ring-cyan-200 focus:border-cyan-400 bg-white'
  }`;

const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

export default function SectionA({ data, errors, onChange }: Props) {
  const handleDateChange = (val: string) => {
    onChange('dateNaissance', val);
    if (val) onChange('age', calculateAge(val));
  };

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Nom (اللقب) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.nom}
            onChange={(e) => onChange('nom', e.target.value)}
            className={inputClass(errors.nom)}
            placeholder="Votre nom de famille"
            aria-label="Nom"
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
        </div>
        <div>
          <label className={labelClass}>
            Prénom (الاسم) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.prenom}
            onChange={(e) => onChange('prenom', e.target.value)}
            className={inputClass(errors.prenom)}
            placeholder="Votre prénom"
            aria-label="Prénom"
          />
          {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Date de naissance <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={data.dateNaissance}
            max={todayString()}
            onChange={(e) => handleDateChange(e.target.value)}
            className={inputClass(errors.dateNaissance)}
            aria-label="Date de naissance"
          />
          {errors.dateNaissance && <p className="text-red-500 text-xs mt-1">{errors.dateNaissance}</p>}
        </div>
        <div>
          <label className={labelClass}>Âge (calculé automatiquement)</label>
          <input
            type="number"
            value={data.age}
            readOnly
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-gray-50 cursor-not-allowed"
            placeholder="—"
            aria-label="Âge"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Sexe <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4 mt-2">
            {(['Masculin', 'Féminin'] as const).map((s) => (
              <label key={s} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sexe"
                  value={s}
                  checked={data.sexe === s}
                  onChange={() => onChange('sexe', s)}
                  className="w-4 h-4 text-cyan-500 focus:ring-cyan-400"
                />
                <span className="text-sm text-gray-700">{s}</span>
              </label>
            ))}
          </div>
          {errors.sexe && <p className="text-red-500 text-xs mt-1">{errors.sexe}</p>}
        </div>
        <div>
          <label className={labelClass}>
            État civil <span className="text-red-500">*</span>
          </label>
          <select
            value={data.etatCivil}
            onChange={(e) => onChange('etatCivil', e.target.value)}
            className={inputClass(errors.etatCivil)}
            aria-label="État civil"
          >
            <option value="">-- Choisir --</option>
            <option>Célibataire</option>
            <option>Marié(e)</option>
            <option>Divorcé(e)</option>
            <option>Veuf·ve</option>
          </select>
          {errors.etatCivil && <p className="text-red-500 text-xs mt-1">{errors.etatCivil}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Numéro National (NIF/NIN) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.nationalId}
            onChange={(e) => onChange('nationalId', e.target.value.replace(/\D/g, ''))}
            className={inputClass(errors.nationalId)}
            placeholder="Numéro d'identité national"
            maxLength={18}
            aria-label="Numéro national"
          />
          {errors.nationalId && <p className="text-red-500 text-xs mt-1">{errors.nationalId}</p>}
        </div>
        <div>
          <label className={labelClass}>Profession / Travail</label>
          <input
            type="text"
            value={data.profession}
            onChange={(e) => onChange('profession', e.target.value)}
            className={inputClass()}
            placeholder="Votre profession (optionnel)"
            aria-label="Profession"
          />
        </div>
      </div>
    </div>
  );
}
