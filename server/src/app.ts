import cors from "cors";
import express from "express";
import route from "./routes";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/", route);

// Important : le middleware d'erreur doit être le dernier middleware
//app.use(errorHandler);

export default app;
