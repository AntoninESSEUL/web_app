// import express, { Request, Response } from "express";
// import rolesRouter from "./routes/roles";

import sequelize from './db_connection';  // Assure-toi du bon chemin vers le fichier
import getAllRoles from './routes/roles';

async function displayRoles() {
  try {
    // Attend que la connexion soit établie avant de récupérer les rôles
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie!");

    const roles = await getAllRoles();
    console.log("Liste des rôles :", roles.map(role => role.get('name')));
  } catch (error) {
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
