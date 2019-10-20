const express = require("express");
const routes = express.Router();

// Import da controller
const MusicasController = require("./controllers/MusicasController");

// Rota padrão
routes.get("/", (req, res) => res.json({ status: "Ok" }));

// Rotas para Musicas
routes.get("/musicas", MusicasController.index);
routes.get("/musicas/:id", MusicasController.show);

// Exportar rotas
module.exports = routes;
