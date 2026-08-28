import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from 'bcrypt';


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "E-mail e senha são obrigatórios." });
    }

    const cleanEmail = email.trim().toLowerCase();

    const user = await prisma.user.findFirst({
      // where: { email: email },
      where: { 
        email: { equals: cleanEmail, mode: 'insensitive' } 
      },
    });

    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return;
    }

    const match = await bcrypt.compare(password, user?.password);

    console.log(match);

    if (!match) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // if (user.password !== password) {
    //   return res.status(401).json({ error: "Senha incorreta" });
    // }

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
    });

  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cep } = req.body;
    // ! = verificar se é falso, ou se não envio
    if (!name || !email || !password || !cep) {
      res
        .status(400)
        .json({ message: "Todas as informações são obrigatorias" });
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    // console.log(hash);
    
    const user = await prisma.user.findFirst({
      where: {email: email},
    });

    if (user?.email) {
      res.status(409).json({ message: "E-mail ja cadastrado" });
      return;
    }

    const newUser = await prisma.user.create({
      data: { name: name, email: email, password: hash, cep: cep },
    });
              

    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};
