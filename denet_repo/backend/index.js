const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db"); // Connect DB module
//const dataRoutes = require("./routes/dataRoute"); // Import your routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
// ✅ Middleware (before routes)
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Handles form submissions
app.use(express.json()); // Handles JSON data

// ✅ Optional: Serve static HTML form (e.g., form.html in /public)
app.use(express.static("public"));



// MongoDB connection
connectDB();

// Routes
//app.use("/api", dataRoutes); // All dataRoutes will be prefixed with /api
const dataRoutes = require("./routes/dataRoute"); // ✅ Correct path
app.use("/api", dataRoutes); // ✅ Use route





// Basic root test route
app.get("/", (req, res) => {
  res.send("  Wow ! Welcome to De-net Optimum Communications API.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
