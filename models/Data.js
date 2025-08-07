const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  phone: String,
  volume: String,
  band: String,
  validity: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Data", dataSchema);
