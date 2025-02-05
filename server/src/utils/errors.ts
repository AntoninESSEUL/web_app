import { NextFunction, Request, Response } from "express";

export class ApiError extends Error {
  constructor(public status: number, message: string, public details?: any) {
    super(message);
    this.name = "ApiError";
  }

  static notFound(message: string): ApiError {
    return new ApiError(404, message);
  }

  static badRequest(message: string, details?: any): ApiError {
    return new ApiError(400, message, details);
  }

  static internal(message: string = "Internal server error"): ApiError {
    return new ApiError(500, message);
  }
}

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      details: error.details,
    });
  }

  console.error("Unexpected error:", error);
  return res.status(500).json({
    status: 500,
    message: "Internal server error",
  });
};
