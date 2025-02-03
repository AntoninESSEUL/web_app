// import { Router } from "express";
// import { createRole, getRoles, getRolesByID } from "../handlers/roles";

// const router = Router();

// router.get("/", getRoles);

// router.get("/:id", getRolesByID);

// router.get("/", createRole);

// export default router;

import { Role } from "../models/Roles";

async function getAllRoles(): Promise<Role[]> {
  try {
    const roles = await Role.findAll(); // Récupère tous les rôles de la table
    return roles;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des rôles :", error);
    throw error;
  }
}

export default getAllRoles;

