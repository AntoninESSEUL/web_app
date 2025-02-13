import axios from "axios";
import { useState } from "react";
import { authApi } from "../services/auth";
import { LoginResponse, ValidationState } from "../types/auth";
import { validateEmail, validatePassword } from "../utils/validators";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState<ValidationState>({
    email: { valid: true, message: "" },
    password: { valid: true, message: "" },
  });

  const validateForm = (email: string, password: string): boolean => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setValidation({
      email: emailValidation,
      password: passwordValidation,
    });

    return emailValidation.valid && passwordValidation.valid;
  };

  const login = async (email: string, password: string): Promise<LoginResponse | null> => {
    if (!validateForm(email, password)) {
      return null;
    }

    setLoading(true);
    try {
      const response = await authApi.login(email, password);
      if (!response.success) {
        setValidation((prev) => ({
          ...prev,
          password: { valid: false, message: response.message || "Échec de la connexion" },
        }));
        return null;
      }

      return response;
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);

      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Erreur de connexion";
        setValidation((prev) => ({
          ...prev,
          password: { valid: false, message: errorMessage },
        }));
      }

      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    validation,
    setValidation,
  };
};
