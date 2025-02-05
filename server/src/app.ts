import cors from "cors";
import express from "express";
import routes from "./routes";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

export default app;
