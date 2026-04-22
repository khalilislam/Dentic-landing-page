import { FormData, FormErrors } from '../../types/form';

interface Props {
  data: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: string | number | string[]) => void;
}

export default function SectionE({ data, errors, onChange }: Props) {
  const max = 1000;
  const remaining = max - data.observations.length;

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        Remarques / Antécédents médicaux
      </label>
      <textarea
        value={data.observations}
        onChange={(e) => {
          if (e.target.value.length <= max) onChange('observations', e.target.value);
        }}
        rows={5}
        className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 resize-none transition-all ${
          errors.observations
            ? 'border-red-400 focus:ring-red-200 bg-red-50'
            : 'border-gray-200 focus:ring-cyan-200 focus:border-cyan-400 bg-white'
        }`}
        placeholder="Décrivez vos antécédents médicaux, allergies, traitements en cours, remarques particulières…"
        aria-label="Observations et antécédents médicaux"
      />
      <div className="flex justify-between items-center mt-1">
        {errors.observations ? (
          <p className="text-red-500 text-xs">{errors.observations}</p>
        ) : (
          <span />
        )}
        <p className={`text-xs ${remaining < 100 ? 'text-orange-500' : 'text-gray-400'}`}>
          {remaining} / {max} caractères restants
        </p>
      </div>
    </div>
  );
}
