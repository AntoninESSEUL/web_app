import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export class AuthController {
  constructor(private authService: AuthService) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({
          success: false,
          message: "Email et mot de passe requis",
        });
        return;
      }

      const user = await this.authService.validateUser(email, password);

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Email ou mot de passe incorrect",
        });
        return;
      }

      res.json({
        success: true,
        user: {
          id: user.idUser,
          name: user.name,
          firstName: user.firstName,
          email: user.mail,
          phone: user.phone,
          role: user.role,
          company: user.company,
          level: user.level,
        },
      });
      return;
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erreur lors de la connexion",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
      return;
    }
  };
}
