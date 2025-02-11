import { BaseStyles, Button, FormControl, TextInput } from "@primer/react";
import axios from "axios";
import React, { useState } from "react";

interface LoginResponse {
  success: boolean;
  user?: {
    id: number;
    name: string;
    firstName: string;
    email: string;
    phone: string;
    role: string;
    company: string;
    level: string;
  };
  message?: string;
  error?: string;
}

interface ValidationState {
  email: {
    valid: boolean;
    message: string;
  };
  password: {
    valid: boolean;
    message: string;
  };
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState<ValidationState>({
    email: { valid: true, message: "" },
    password: { valid: true, message: "" },
  });

  const validateForm = (): boolean => {
    const newValidation: ValidationState = {
      email: { valid: true, message: "" },
      password: { valid: true, message: "" },
    };

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newValidation.email = { valid: false, message: "L'email est requis" };
    } else if (!emailRegex.test(email)) {
      newValidation.email = { valid: false, message: "Format d'email invalide" };
    }

    // Validation mot de passe
    if (!password) {
      newValidation.password = { valid: false, message: "Le mot de passe est requis" };
    } else if (password.length < 6) {
      newValidation.password = {
        valid: false,
        message: "Le mot de passe doit contenir au moins 6 caractères",
      };
    }

    setValidation(newValidation);
    return Object.values(newValidation).every((field) => field.valid);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3000/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redirection après connexion réussie
        window.location.href = "/dashboard";
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Erreur de connexion";
        setValidation((prev) => ({
          ...prev,
          password: { valid: false, message: errorMessage },
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseStyles>
      <div className="flex items-center justify-center h-screen bg-white sm:bg-gray-100">
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
      </div>
    </BaseStyles>
  );
}

export default App;
