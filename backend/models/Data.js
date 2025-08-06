const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  phone: String,
  volume: String,
  band: String,
  validity: String,
});

module.exports = mongoose.model("Data", dataSchema);
