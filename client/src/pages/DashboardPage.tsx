import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";

interface User {
  name: string;
  firstName: string;
}

export const DashboardPage: React.FC = () => {
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
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold">Dashboard {user ? `${user.firstName} ${user.name}` : ""}</h1>
      </div>
    </>
  );
};
