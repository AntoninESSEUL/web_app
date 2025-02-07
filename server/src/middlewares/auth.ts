import { NextFunction, Request, Response } from "express";

// Middleware pour vérifier le rôle (chaîne de caractères)
export const authPage = (permissions: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Récupération du rôle utilisateur depuis le corps de la requête
    const userRole = req.body.role.name as string | undefined;

    // Vérification que le rôle est bien fourni dans la requête
    if (!userRole) {
      res.status(400).json({
        success: false,
        message: "No role provided",
      });
      return;
    }

    // Si le rôle est autorisé, on passe au middleware suivant
    if (permissions.includes(userRole)) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "You are not authorized",
      });
    }
  };
};

// Middleware pour vérifier le niveau (nombre)
export const authDocument = (maxLevel: number) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Récupération du niveau utilisateur depuis le corps de la requête
    const userLevel = req.body.level.level as number | undefined;

    if (userLevel === undefined) {
      res.status(400).json({
        success: false,
        message: "No level provided",
      });
      return;
    }

    if (userLevel >= maxLevel) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: `Your level is too low`,
      });
    }
  };
};
