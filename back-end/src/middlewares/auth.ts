import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user } = req.cookies;

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).send("JWT_SECRET não configurado");
  }

  try {
    const decoded = jwt.verify(user, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Usuario não autenticado" });
    return;
  }
};
