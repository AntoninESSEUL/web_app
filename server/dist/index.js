"use strict";
// import express, { Request, Response } from "express";
// import rolesRouter from "./routes/roles";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = __importDefault(require("./db_connection")); // Assure-toi que le chemin est correct
const roles_1 = __importDefault(require("./routes/roles")); // Assure-toi que le chemin est correct
async function displayRoles() {
    try {
        await db_connection_1.default.authenticate(); // Vérifie la connexion à la base de données
        console.log("Connexion à la base de données réussie!");
        const roles = await (0, roles_1.default)();
        console.log("Liste des rôles :", roles.map(role => role.name));
    }
    catch (error) {
        console.error("Erreur lors de la connexion ou de l'affichage des rôles :", error);
    }
}
displayRoles();
// const app = express();
// app.use("/api/roles", rolesRouter);
// const PORT = 3000;
// app.get("/api/roles", (request: Request, response: Response) => {});
// app.listen(PORT, () => {
//   console.log(`Running on Port ${PORT}`);
// });
