import { FormData } from '../../types/form';
import { calculateMarriageDuration, calculateGestationalAge, todayString } from '../../utils/dateUtils';

interface Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string | number | string[]) => void;
}

const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

const inputDateClass =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 bg-white transition-all';

function NumberSpinner({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-xl font-bold transition-colors"
          aria-label={`Diminuer ${label}`}
        >
          −
        </button>
        <span className="flex-1 text-center font-bold text-gray-800 text-lg">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-xl font-bold transition-colors"
          aria-label={`Augmenter ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function SectionD({ data, onChange }: Props) {
  const handleMarriage = (val: string) => {
    onChange('dateMariage', val);
    if (val) onChange('dureeMariage', calculateMarriageDuration(val));
  };

  const handleLMP = (val: string) => {
    onChange('dernieresRegles', val);
    if (val) onChange('ageGestationnel', calculateGestationalAge(val));
  };

  return (
    <div className="space-y-6">
      <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 text-sm text-pink-700">
        Cette section concerne uniquement les patientes de sexe féminin.
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <NumberSpinner
          label="Nombre de grossesses (G)"
          value={data.nbGrossesses}
          onChange={(v) => onChange('nbGrossesses', v)}
        />
        <NumberSpinner
          label="Parité (P)"
          value={data.parite}
          onChange={(v) => onChange('parite', v)}
        />
        <NumberSpinner
          label="Nb. de césariennes"
          value={data.nbCesariennes}
          onChange={(v) => onChange('nbCesariennes', v)}
        />
        <NumberSpinner
          label="Nb. d'avortements"
          value={data.nbAvortements}
          onChange={(v) => onChange('nbAvortements', v)}
        />
        <NumberSpinner
          label="EVBP (Enfants Vivants Bien Portants)"
          value={data.evbp}
          onChange={(v) => onChange('evbp', v)}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Date de mariage</label>
          <input
            type="date"
            value={data.dateMariage}
            max={todayString()}
            onChange={(e) => handleMarriage(e.target.value)}
            className={inputDateClass}
            aria-label="Date de mariage"
          />
        </div>
        <div>
          <label className={labelClass}>Durée du mariage (calculée)</label>
          <input
            type="text"
            value={data.dureeMariage}
            readOnly
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-gray-50 cursor-not-allowed"
            placeholder="—"
            aria-label="Durée du mariage"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Date des Dernières Règles (LMP)</label>
          <input
            type="date"
            value={data.dernieresRegles}
            max={todayString()}
            onChange={(e) => handleLMP(e.target.value)}
            className={inputDateClass}
            aria-label="Date des dernières règles"
          />
        </div>
        <div>
          <label className={labelClass}>Âge gestationnel (calculé)</label>
          <input
            type="text"
            value={data.ageGestationnel}
            readOnly
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-gray-50 cursor-not-allowed"
            placeholder="—"
            aria-label="Âge gestationnel"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Date de conception</label>
        <input
          type="date"
          value={data.dateConception}
          max={todayString()}
          onChange={(e) => onChange('dateConception', e.target.value)}
          className={inputDateClass}
          aria-label="Date de conception"
        />
      </div>
    </div>
  );
}
