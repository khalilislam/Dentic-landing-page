export interface FormData {
  nom: string;
  prenom: string;
  dateNaissance: string;
  age: number | '';
  sexe: 'Masculin' | 'Féminin' | '';
  etatCivil: string;
  nationalId: string;
  profession: string;
  telephone: string;
  email: string;
  adresse: string;
  ville: string;
  codePostal: string;
  notifications: string[];
  groupeSanguin: string;
  refererPar: string;
  nbGrossesses: number;
  parite: number;
  nbCesariennes: number;
  nbAvortements: number;
  evbp: number;
  dateMariage: string;
  dureeMariage: string;
  dernieresRegles: string;
  dateConception: string;
  ageGestationnel: string;
  observations: string;
}

export interface FormErrors {
  [key: string]: string;
}
