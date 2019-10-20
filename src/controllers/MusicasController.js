const mongoose = require("mongoose");
const Musicas = mongoose.model("Musicas");

module.exports = {
  // Index - Mostra a lista de músicas
  // Pode ser utilizado query's para busca
  async index(req, res) {
    const cantor = req.query.cantor ? req.query.cantor : "";
    const musica = req.query.musica ? req.query.musica : "";
    const codigo = req.query.codigo ? req.query.codigo : "";

    const products = await Musicas.find({
      cantor: { $regex: cantor, $options: "i" },
      musica: { $regex: musica, $options: "i" },
      codigo: { $regex: codigo, $options: "i" }
    })
      .limit(300)
      .sort({ musica: 1 });
    return res.json(products);
  },

  // Busca por ID (ID do Mongo)
  async show(req, res) {
    const product = await Musicas.findById(req.params.id);
    return res.json(product);
  }
};
