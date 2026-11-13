import { Router, type Request, type Response } from "express";
import { prisma } from "../db.js";

// Controller responsável por buscar e retornar todos os produtos
export const getProducts = async (req: Request, res: Response) => {
  try {
    // Busca todos os registros da tabela 'product' no banco
    const products = await prisma.product.findMany();

    // Se a lista vier vazia, retorna erro 400 (Bad Request)
    if (products.length === 0) {
      res.status(400).json({ message: "Não foram encontrados produtos" });
      return;
    }

    // Retorna os produtos encontrados em formato JSON (status 200)
    res.json(products);
      
  } catch (erro) {
    // Captura falhas inesperadas e retorna erro 500 (Internal Server Error)
    res.status(500).json({ message: "Erro no sevidor" });
  }
};