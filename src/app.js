import express from "express";
import router from "./routes/index.js";

// Cria a aplicação Express
const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Usa o roteador principal, prefixando com /api
app.use("/api", router);

// Rota raiz simples para teste rápido
app.get("/", (req, res) => {
  res.send("API funcionando");
});

// Define a porta e inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
