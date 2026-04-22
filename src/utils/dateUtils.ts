export function calculateAge(dateNaissance: string): number {
  if (!dateNaissance) return 0;
  const today = new Date();
  const birth = new Date(dateNaissance);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export function calculateMarriageDuration(dateMariage: string): string {
  if (!dateMariage) return '';
  const today = new Date();
  const marriage = new Date(dateMariage);
  let years = today.getFullYear() - marriage.getFullYear();
  let months = today.getMonth() - marriage.getMonth();
  if (months < 0) { years--; months += 12; }
  if (years === 0 && months === 0) return 'Moins d\'un mois';
  const parts = [];
  if (years > 0) parts.push(`${years} an${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mois`);
  return parts.join(' et ');
}

export function calculateGestationalAge(lmp: string): string {
  if (!lmp) return '';
  const today = new Date();
  const lmpDate = new Date(lmp);
  const diffMs = today.getTime() - lmpDate.getTime();
  if (diffMs < 0) return '';
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;
  return `${weeks} semaine${weeks !== 1 ? 's' : ''} et ${days} jour${days !== 1 ? 's' : ''}`;
}

export function todayString(): string {
  return new Date().toISOString().split('T')[0];
}
