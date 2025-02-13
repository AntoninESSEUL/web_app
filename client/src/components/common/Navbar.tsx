import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

export const LogoutButton = () => {
  const logout = useLogout();

  return (
    <button onClick={logout} className="hover:underline">
      Déconnexion
    </button>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mon Site</h1>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          {/* 🔥 Utilisation correcte du bouton de déconnexion */}
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
