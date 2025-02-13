import React from "react";
import Navbar from "../components/common/Navbar";

export const ProfilePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Profil</h1>
          <p className="text-center text-gray-500">Aucune information utilisateur disponible.</p>
        </div>
      </div>
    </>
  );
};
