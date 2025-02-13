import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import createToken from "../services/jwtService";

export class AuthController {
  constructor(private authService: AuthService) {}

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        console.log("Email et le mot de passe sont requis");
        res.status(400).json({ success: false, message: "Email et le mot de passe sont requis" });
        return;
      }

      const user = await this.authService.validateUser(email, password);

      if (!user) {
        console.log("Email ou mot de passe incorrect");
        res.status(400).json({ success: false, message: "Email ou mot de passe incorrect" });
        return;
      }

      const accessToken = createToken(user);
      res.cookie("access_token", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 jours
        httpOnly: true,
      });

      console.log("Connexion réussie, token généré:", accessToken);

      res.json({
        success: true,
        message: "Connexion réussie",
        token: accessToken,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erreur lors de la connexion",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  };

  logout = (req: Request, res: Response) => {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // en prod, utiliser HTTPS
      sameSite: "strict",
    });
    res.status(200).json({ message: "Déconnexion réussie" });
  };
}
