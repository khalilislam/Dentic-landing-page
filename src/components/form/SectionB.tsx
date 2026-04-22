import { FormData, FormErrors } from '../../types/form';

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

export default function SectionB({ data, errors, onChange }: Props) {
  const toggleNotification = (val: string) => {
    const current = data.notifications;
    const updated = current.includes(val) ? current.filter((n) => n !== val) : [...current, val];
    onChange('notifications', updated);
  };

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={data.telephone}
            onChange={(e) => onChange('telephone', e.target.value)}
            className={inputClass(errors.telephone)}
            placeholder="+213 XXXXXXXXX"
            aria-label="Téléphone"
          />
          {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className={inputClass(errors.email)}
            placeholder="exemple@email.com"
            aria-label="Email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Adresse complète</label>
        <textarea
          value={data.adresse}
          onChange={(e) => onChange('adresse', e.target.value)}
          className={inputClass() + ' resize-none'}
          rows={3}
          placeholder="Numéro, rue, quartier..."
          aria-label="Adresse"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Ville</label>
          <input
            type="text"
            value={data.ville}
            onChange={(e) => onChange('ville', e.target.value)}
            className={inputClass()}
            placeholder="Nom de la ville"
            aria-label="Ville"
          />
        </div>
        <div>
          <label className={labelClass}>Code postal</label>
          <input
            type="text"
            value={data.codePostal}
            onChange={(e) => onChange('codePostal', e.target.value.replace(/\D/g, ''))}
            className={inputClass()}
            placeholder="XXXXX"
            maxLength={5}
            aria-label="Code postal"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Notifications préférées</label>
        <div className="flex gap-6 mt-1">
          {['Email', 'SMS'].map((n) => (
            <label key={n} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={data.notifications.includes(n)}
                onChange={() => toggleNotification(n)}
                className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
              />
              <span className="text-sm text-gray-700">{n}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
