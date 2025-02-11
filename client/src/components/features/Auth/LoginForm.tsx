import { Button, FormControl, TextInput } from "@primer/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, validation } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await login(email, password);
    if (response?.success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="sm:bg-white p-6 rounded-2xl sm:shadow-lg w-96 max-w-sm">
      <h2 className="text-2xl font-semibold text-center mb-10">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormControl required disabled={loading}>
          <FormControl.Label>Email</FormControl.Label>
          <TextInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email input"
            block
          />
          {!validation.email.valid && (
            <FormControl.Validation variant="error">{validation.email.message}</FormControl.Validation>
          )}
          <FormControl.Caption>Entrez votre adresse email professionnelle</FormControl.Caption>
        </FormControl>

        <FormControl required disabled={loading}>
          <FormControl.Label>Password</FormControl.Label>
          <TextInput
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password input"
            block
          />
          {!validation.password.valid && (
            <FormControl.Validation variant="error">{validation.password.message}</FormControl.Validation>
          )}
          <FormControl.Caption>Minimum 6 caractères</FormControl.Caption>
        </FormControl>

        <Button type="submit" variant="primary" className="w-full" disabled={loading}>
          {loading ? "Connexion en cours..." : "Login"}
        </Button>
      </form>
    </div>
  );
};
