export interface LoginResponse {
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

export interface ValidationState {
  email: {
    valid: boolean;
    message: string;
  };
  password: {
    valid: boolean;
    message: string;
  };
}
