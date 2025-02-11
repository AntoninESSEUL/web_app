import { BaseStyles } from "@primer/react";
import { LoginForm } from "../components/features/Auth/LoginForm";

export const LoginPage = () => {
  return (
    <BaseStyles>
      <div className="flex items-center justify-center h-screen bg-white sm:bg-gray-100">
        <LoginForm />
      </div>
    </BaseStyles>
  );
};
