import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

// Middleware d'authentification JWT
const JWT_SECRET = env.JWT_SECRET || "1";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies["access_token"];

  if (!accessToken) {
    res.status(401).json({ message: "Accès refusé, token manquant" });
    return;
  }

  try {
    const validToken = jwt.verify(accessToken, JWT_SECRET);

    if (validToken) {
      (req as any).authenticate = true;
      return next();
    }
  } catch (error) {
    res.status(400).json({
      message: "Token invalide",
      error: error,
    });
    return;
  }
};

export default verifyToken;

// //Interface pour ajouter `user` à `Request`
// interface AuthenticatedRequest extends Request {
//   user?: {
//     userId: number;
//     email: string;
//     role: string;
//     level?: number;
//   };
// }

// // // Middleware pour vérifier le rôle
// // export const authPage = (permissions: string[]) => {
// //   return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
// //     const userRole = req.user?.role;

// //     if (!userRole) {
// //       res.status(400).json({
// //         success: false,
// //         message: "No role provided",
// //       });
// //       return;
// //     }

// //     if (permissions.includes(userRole)) {
// //       next();
// //       return;
// //     }

// //     res.status(403).json({
// //       success: false,
// //       message: "You are not authorized",
// //     });
// //   };
// // };

// // // Middleware pour vérifier le niveau d'accès
// // export const authDocument = (maxLevel: number) => {
// //   return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
// //     const userLevel = req.user?.level;

// //     if (userLevel === undefined) {
// //       res.status(400).json({
// //         success: false,
// //         message: "No level provided",
// //       });
// //       return;
// //     }

// //     if (userLevel >= maxLevel) {
// //       next();
// //       return;
// //     }

// //     res.status(403).json({
// //       success: false,
// //       message: "Your level is too low",
// //     });
// //   };
// // };
