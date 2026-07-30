import express from "express";
import cors from "cors";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
app.use(express.json());
app.use(cors());
connection();
// console.log(process.env.DATABASE_URL)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "E-mail e senha são obrigatórios." });
    }

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

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

// INICIA O LOCALHOST
//  npx tsx index.ts = é o comando que você usa no terminal para executar um arquivo TypeScript diretamente, sem precisar compilá-lo manualmente para JavaScript antes.

// node --watch index.ts = tenta executar o arquivo TypeScript diretamente usando o próprio manipulador de scripts nativo do Node.js com a flag de recarregamento automático (--watch).
