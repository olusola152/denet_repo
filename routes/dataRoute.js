const express = require("express");
const router = express.Router();
const Data = require("../models/Data"); // ✅ Mongoose model

// ✅ GET route to test API
router.get("/", (req, res) => {
  res.status(200).json({ message: "API is working" });
});

// ✅ POST route to save form data
router.post("/receive", async (req, res) => {
  try {
    const { phone, volume, band, validity } = req.body;
    console.log("📩 Received from client:", req.body); // Debug log

    if (!phone || !volume || !band || !validity) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newData = new Data({ phone, volume, band, validity });
    const savedData = await newData.save(); // Await and store result
    console.log("✅ Saved to MongoDB:", savedData); // Confirm insert

    res.status(200).json({ message: "Data received and saved successfully." });
  } catch (err) {
    console.error("❌ Error saving data:", err); // Log error
    res.status(500).json({ error: "Server error while saving data." });
  }
});

// ✅ (Optional) Simulate data sharing
router.post("/share", async (req, res) => {
  try {
    const { recipient, volume, validity } = req.body;

    if (!recipient || !volume || !validity) {
      return res.status(400).json({ error: "All fields are required for sharing" });
    }

    // Simulate sharing logic
    res.status(200).json({ message: `Data (${volume} valid for ${validity}) shared with ${recipient}.` });
  } catch (err) {
    console.error("❌ Error sharing data:", err);
    res.status(500).json({ error: "Server error during data sharing." });
  }
});

module.exports = router;
