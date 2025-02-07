// routes/index.ts
import { Router } from "express";

import authRoutes from "./authRoute";
import userRoutes from "./userRoute";

const router = Router();

// Routes for the API
router.use("/api/users", userRoutes);
router.use("/api/auth", authRoutes);

export default router;
