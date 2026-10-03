import { Router } from "express";
import { auth, login, register, logout } from "./controller/user-controller.js";
import { authMiddleware } from "./middlewares/auth.js";


export const router = Router()

//Rostas de usuarios
router.post("/login", login);
router.post("/register", register);
router.get("/me", auth)
router.post("/logout", authMiddleware, logout);
