const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db"); // Connect DB module
//const dataRoutes = require("./routes/dataRoute"); // Import your routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
//app.use("/api", dataRoutes); // All dataRoutes will be prefixed with /api
const dataRoutes = require("./routes/dataRoute"); // ✅ Correct path
app.use("/api", dataRoutes); // ✅ Use route


// Basic root test route
app.get("/", (req, res) => {
  res.send("Welcome to the API. Go to /api to access data routes.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
