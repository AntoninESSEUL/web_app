// Définition des types réutilisables
export interface Company {
  idCompany: number;
  name: string;
}

export interface Level {
  idLevel: number;
  level: number;
  description: string;
}

export interface Role {
  idRole: number;
  name: string;
}

// Interface utilisateur complète
export interface User {
  id: number;
  name: string;
  firstName: string;
  email: string;
  phone: string;
  role: Role;
  company: Company;
  level: Level;
}

// Réponse de l'API de connexion
export interface LoginResponse {
  success: boolean;
  user?: User;
  message?: string;
  error?: string;
  token: string;
}

// Interface de validation des formulaires
export interface ValidationState {
  email: {
    valid: boolean;
    message: string;
  };
  password: {
    valid: boolean;
    message: string;
  };
}
