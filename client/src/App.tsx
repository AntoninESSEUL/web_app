import { BaseStyles, Button, TextInput } from "@primer/react";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <BaseStyles>
      <div className="flex items-center justify-center h-screen bg-white sm:bg-gray-100">
        <div className="sm:bg-white p-6 rounded-2xl sm:shadow-lg w-96 m-4 max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <TextInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <TextInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1"
                required
              />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </BaseStyles>
  );
}

export default App;
