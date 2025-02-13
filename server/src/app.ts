import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import route from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Permet d'envoyer les cookies
  })
);

app.use(express.json());
app.use(cookieParser()); // Lire les cookies
app.use("/", route);

export default app;
