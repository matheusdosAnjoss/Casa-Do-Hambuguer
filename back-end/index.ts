import express from "express";
import { connection } from "./src/db.js";

const app = express();
connection()
// console.log(process.env.DATABASE_URL)
app.get("/", (req, res) => {
    res.send("Hello World");
    console.log("Sevidor conectado");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000 -2");
});

// node --watch index.ts = tenta executar o arquivo TypeScript diretamente usando o próprio manipulador de scripts nativo do Node.js com a flag de recarregamento automático (--watch).

//  npx tsx index.ts = é o comando que você usa no terminal para executar um arquivo TypeScript diretamente, sem precisar compilá-lo manualmente para JavaScript antes.
