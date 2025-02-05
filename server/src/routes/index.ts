import { Request, Response, Router } from "express";
// Importez vos différents routeurs
// import userRoutes from "./userRoutes";
// import productRoutes from "./productRoutes";

const router = Router();

// Route de test de base
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});

// Ajoutez vos routes spécifiques
// router.use('/users', userRoutes);
// router.use('/products', productRoutes);

export default router;
