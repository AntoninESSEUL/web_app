// Define type for API response
export interface ApiResponse<T> {
  status: number;
  data?: T;
  message?: string;
  error?: string;
}
