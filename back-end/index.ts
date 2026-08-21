import express, { type Request, type Response } from "express";
import cors from "cors";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
app.use(express.json());
app.use(cors());
connection();
// console.log(process.env.DATABASE_URL)
app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "E-mail e senha são obrigatórios." });
    }

    const user = await prisma.user.findFirst({
      where: { email: email },
    });
    

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    res.status(200).json({ message: "Login realizado com sucesso", user });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password, cep } = req.body;
    // ! = verificar se é falso, ou se não envio
    if (!name || !email || !password || !cep) {
      res
        .status(400)
        .json({ message: "Todas as informações são obrigatorias" });
      return;
    }

    const user = await prisma.user.findFirst({
      where: {email: email},
    });

    if (user?.email) {
      res.status(409).json({ message: "E-mail ja cadastrado" });
      return;
    }

    const newUser = await prisma.user.create({
      data: { name: name, email: email, password: password, cep: cep },
    });
              

    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

// INICIA O LOCALHOST
//  npx tsx index.ts = é o comando que você usa no terminal para executar um arquivo TypeScript diretamente, sem precisar compilá-lo manualmente para JavaScript antes.

// node --watch index.ts = tenta executar o arquivo TypeScript diretamente usando o próprio manipulador de scripts nativo do Node.js com a flag de recarregamento automático (--watch).
