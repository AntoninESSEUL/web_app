import { Router } from "express";
import { AppDataSource } from "../config/database";
import { AuthController } from "../controllers/authController";
import { Users } from "../models/Users";
import { AuthService } from "../services/authService";

const userRepository = AppDataSource.getRepository(Users);
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const router = Router();

router.post("/login", authController.login);
router.post("/logout", authController.logout);

export default router;
