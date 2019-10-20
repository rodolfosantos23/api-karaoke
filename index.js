const express = require("express");
const requireDir = require("require-dir");
const cors = require("cors");
const db = require("./src/config/db");

// Iniciando o App - Express
const app = express();
app.use(express.json());

// Evita erros de CORS. Quando em produção pode ser configurado
app.use(cors());

// Adicionando as models para load automático
// Isso é útil caso o projeto cresça e tenha mais models
requireDir("./src/models");

// Conecta ao DB
db.connect();

// Rotas
app.use("/", require("./src/routes"));

// Roda o servidor
app.listen(3001, () => console.log("Running on port 3001"));
