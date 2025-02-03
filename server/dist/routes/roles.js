"use strict";
// import { Router } from "express";
// import { createRole, getRoles, getRolesByID } from "../handlers/roles";
Object.defineProperty(exports, "__esModule", { value: true });
// const router = Router();
// router.get("/", getRoles);
// router.get("/:id", getRolesByID);
// router.get("/", createRole);
// export default router;
const Roles_1 = require("../models/Roles");
async function getAllRoles() {
    try {
        const roles = await Roles_1.Role.findAll(); // Récupère tous les rôles de la table
        return roles;
    }
    catch (error) {
        console.error("❌ Erreur lors de la récupération des rôles :", error);
        throw error;
    }
}
exports.default = getAllRoles;
