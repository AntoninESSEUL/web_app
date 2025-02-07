import { Router } from "express";
import { AppDataSource } from "../config/database";
import { AuthController } from "../controllers/authController";
import { authDocument, authPage } from "../middlewares/auth";
import { Users } from "../models/Users";
import { AuthService } from "../services/authService";

const userRepository = AppDataSource.getRepository(Users);
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const router = Router();

router.post("/login", authController.login);
router.get("/test", authPage(["Admin"]), authDocument(50), (req, res) => {
  res.json({ message: "this folder" });
});

export default router;
