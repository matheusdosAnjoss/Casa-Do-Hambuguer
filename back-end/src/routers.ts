import { Router } from "express";
import { login, register } from "./controller/user-controller.js";


export const router = Router()

//Rostas de usuarios
router.post("/login", login);
router.post("/register", register);

