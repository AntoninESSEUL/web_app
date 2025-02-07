import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate("/user");
  };

  const goToAdminPage = () => {
    navigate("/admin");
  };

  const logout = () => {
    // Effacer le token du localStorage
    localStorage.removeItem("token");
    // Rediriger vers la page de connexion
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Si pas de token, rediriger vers la page de connexion
      return;
    }

    // Décoder le token pour vérifier le rôle de l'utilisateur
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Décodage du token JWT
    const userRole = decodedToken.role; // Supposons que le rôle est dans le token sous 'role'

    // Si l'utilisateur est un admin, il peut accéder à la page admin
    if (userRole === "admin") {
      navigate("/admin"); // Rediriger vers la page Admin
    }
    // Si l'utilisateur est un user, il peut accéder à la page utilisateur
    else if (userRole === "user") {
      navigate("/user"); // Rediriger vers la page User
    } else {
      navigate("/login"); // Rediriger vers la page de connexion si le rôle n'est pas autorisé
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-4">
        <h1 className="text-3xl font-bold">Bienvenue sur le tableau de bord</h1>
        <div className="space-x-4">
          <button onClick={goToUserPage} className="text-blue-500">
            Page Utilisateur
          </button>
          <button onClick={goToAdminPage} className="text-blue-500">
            Page Admin
          </button>
          <button onClick={logout} className="text-blue-500">
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
