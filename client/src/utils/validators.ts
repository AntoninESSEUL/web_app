export const validateEmail = (email: string): { valid: boolean; message: string } => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { valid: false, message: "L'email est requis" };
  }
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Format d'email invalide" };
  }
  return { valid: true, message: "" };
};

export const validatePassword = (password: string): { valid: boolean; message: string } => {
  if (!password) {
    return { valid: false, message: "Le mot de passe est requis" };
  }
  if (password.length < 6) {
    return { valid: false, message: "Le mot de passe doit contenir au moins 6 caractères" };
  }
  return { valid: true, message: "" };
};
