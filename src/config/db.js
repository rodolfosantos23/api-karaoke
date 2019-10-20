const mongoose = require("mongoose");

module.exports = {
  connect() {
    mongoose.connect("mongodb://localhost:27017/karaoke", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  }
};
