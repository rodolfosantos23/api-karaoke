const mongoose = require("mongoose");

const MusicasSchema = new mongoose.Schema({
  cantor: {
    type: String,
    required: true
  },
  musica: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    required: true
  },
  clipe: {
    type: String,
    required: true
  },
  at: {
    type: String,
    required: true
  }
});

mongoose.model("Musicas", MusicasSchema);
