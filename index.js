const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); // ✅ Required for safe file paths
const connectDB = require("./db");
const dataRoutes = require("./routes/dataRoute");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// ✅ Connect to MongoDB
connectDB();

// ✅ API Routes
app.use("/api", dataRoutes);

// ✅ Optional: Serve form.html via /form route
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("Wow! Welcome to De-net Optimum Communications API.");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
