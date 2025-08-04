const express = require("express");
const router = express.Router();
const Data = require("../models/Data");

router.post("/receive", async (req, res) => {
  try {
    const { phone, volume, band, validity } = req.body;
    const newData = new Data({ phone, volume, band, validity });
    await newData.save();
    res.status(200).json({ message: "Data received and saved." });
  } catch (err) {
    res.status(500).json({ error: "Error saving data." });
  }
});

router.post("/share", async (req, res) => {
  const { recipient, volume, validity } = req.body;
  // Simulate sharing logic (you can integrate SMS/API later)
  res.status(200).json({ message: `Data shared to ${recipient}` });
});

module.exports = router;