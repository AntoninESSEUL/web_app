// routes/index.ts
import { Router } from "express";

import verifyToken from "../middlewares/auth";
import authRoutes from "./authRoute";
import userRoutes from "./userRoute";

const router = Router();

// Routes for the API
router.use("/api/auth", authRoutes);
router.use("/api/users", verifyToken, userRoutes);

export default router;
