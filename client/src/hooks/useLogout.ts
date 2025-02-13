import { useNavigate } from "react-router-dom";
import { authApi } from "../services/auth";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await authApi.logout();
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return logout;
};
