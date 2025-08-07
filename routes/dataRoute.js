const express = require("express");
const router = express.Router();
const Data = require("../models/Data"); // ✅ Correct relative path to modelbb

// ✅ GET route for testing (e.g., http://localhost:5000/api/)
router.get("/", (req, res) => {
  res.status(200).json({ message: "API is working" });
});

// ✅ POST route to receive and save data
router.post("/receive", async (req, res) => {
  try {
    const { phone, volume, band, validity } = req.body;
    console.log("Received from client:", req.body); // 🐞 DEBUG LOG

    if (!phone || !volume || !band || !validity) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newData = new Data({ phone, volume, band, validity });
    await newData.save();

    res.status(200).json({ message: "Data received and saved successfully." });
  } catch (err) {
    console.error("Error saving data:", err); // 🐞 DEBUG LOG
    res.status(500).json({ error: "Server error while saving data." });
  }
});

// ✅ POST route to simulate data sharing
router.post("/share", async (req, res) => {
  try {
    const { recipient, volume, validity } = req.body;

    if (!recipient || !volume || !validity) {
      return res.status(400).json({ error: "All fields are required for sharing" });
    }

    // Simulate sharing logic
    res.status(200).json({ message: `Data (${volume} valid for ${validity}) shared with ${recipient}.` });
  } catch (err) {
    console.error("Error sharing data:", err);
    res.status(500).json({ error: "Server error during data sharing." });
  }
});

module.exports = router;
