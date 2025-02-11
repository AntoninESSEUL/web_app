import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import { User } from "../types/auth";

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">
            Profil de {user ? `${user.firstName} ${user.name}` : "Utilisateur"}
          </h1>

          {user ? (
            <div className="space-y-4">
              <div className="p-3 border rounded-lg bg-gray-50">
                <p className="text-gray-600">
                  <strong> Id : </strong>
                  {user.id}
                </p>
                <p className="text-gray-600">
                  <strong>👨‍💻 Nom :</strong> {user.name}
                </p>
                <p className="text-gray-600">
                  <strong>👩‍💻 Prénom :</strong> {user.firstName}
                </p>
                <p className="text-gray-600">
                  <strong>📧 Email :</strong> {user.email}
                </p>
                <p className="text-gray-600">
                  <strong>📞 Téléphone :</strong> {user.phone}
                </p>
              </div>

              <div className="p-3 border rounded-lg bg-gray-50">
                <p className="text-gray-600">
                  <strong>🏢 Entreprise :</strong> {user.company.name}
                </p>

                <p className="text-gray-600">
                  <strong>🔖 Rôle :</strong> {user.role.name}
                </p>
                <p className="text-gray-600">
                  <strong>📈 Niveau :</strong> {user.level.description}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Aucune information utilisateur disponible.</p>
          )}
        </div>
      </div>
    </>
  );
};
