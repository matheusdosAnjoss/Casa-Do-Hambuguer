import express, { type Request, type Response } from "express";
import cors from "cors";
import { connection } from "./src/db.js";
import { router } from "./src/routers.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
connection();

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

// INICIA O LOCALHOST
//  npx tsx index.ts = é o comando que você usa no terminal para executar um arquivo TypeScript diretamente, sem precisar compilá-lo manualmente para JavaScript antes.

// node --watch index.ts = tenta executar o arquivo TypeScript diretamente usando o próprio manipulador de scripts nativo do Node.js com a flag de recarregamento automático (--watch).
