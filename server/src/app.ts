import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

// Important : le middleware d'erreur doit être le dernier middleware
//app.use(errorHandler);

export default app;
