const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  phone: String,
  volume: String,
  band: String,
  validity: String,
}, { timestamps: true });

module.exports = mongoose.model("Data", dataSchema);