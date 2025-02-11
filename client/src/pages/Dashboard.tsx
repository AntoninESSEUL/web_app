import React, { useEffect, useState } from "react";

interface User {
  name: string;
  firstName: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold">Dashboard {user ? `${user.firstName} ${user.name}` : ""}</h1>
    </div>
  );
};

export default Dashboard;
