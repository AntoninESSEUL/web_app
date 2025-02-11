import axios from "axios";
import { LoginResponse } from "../types/auth";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

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
};
