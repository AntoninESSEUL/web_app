import axios from "axios";
import { LoginResponse } from "../types/auth";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Login
export const authApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/auth/login`,

      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  },

  logout: async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
      document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
      throw error; // On relance l'erreur pour que le hook puisse la gérer
    }
  },
};
