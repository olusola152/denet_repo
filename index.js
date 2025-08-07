const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");
const dataRoutes = require("./routes/dataRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Use CORS with specific config
app.use(cors({
  origin: "*", // Replace with "https://your-frontend-domain.com" for security
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// ✅ Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve static files from public
app.use(express.static(path.join(__dirname, "public")));

// ✅ Connect to MongoDB
connectDB();

// ✅ API routes
app.use("/api", dataRoutes);

// ✅ Optional route to serve form
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Wow! Welcome to De-net Optimum Communications API.");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
