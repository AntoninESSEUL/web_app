import { Router } from "express";
import userRoutes from "./userRoutes"; // Importation du module utilisateur

const router = Router();

// Route de test
router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// User routes
router.use("/api/users", userRoutes);

export default router;
