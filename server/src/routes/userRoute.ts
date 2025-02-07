import { Router } from "express";
import { AppDataSource } from "../config/database";
import { UserController } from "../controllers/userController";

import { Users } from "../models/Users";
import { UserService } from "../services/userService";

const userRepository = AppDataSource.getRepository(Users);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = Router();

router.get("/all", userController.getAll);
router.get("/:id", userController.getById);
router.post("/create", userController.create);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);

export default router;
