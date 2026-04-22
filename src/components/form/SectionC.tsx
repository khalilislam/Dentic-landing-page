import { FormData, FormErrors } from '../../types/form';

interface Props {
  data: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: string | number | string[]) => void;
}

const inputClass = () =>
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 bg-white transition-all';

const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

export default function SectionC({ data, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Groupe sanguin</label>
          <select
            value={data.groupeSanguin}
            onChange={(e) => onChange('groupeSanguin', e.target.value)}
            className={inputClass()}
            aria-label="Groupe sanguin"
          >
            <option value="">-- Inconnu --</option>
            {['A+', 'A−', 'B+', 'B−', 'AB+', 'AB−', 'O+', 'O−'].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Référé par</label>
          <input
            type="text"
            value={data.refererPar}
            onChange={(e) => onChange('refererPar', e.target.value)}
            className={inputClass()}
            placeholder="Ami, médecin, réseaux sociaux…"
            aria-label="Référé par"
          />
        </div>
      </div>
    </div>
  );
}
