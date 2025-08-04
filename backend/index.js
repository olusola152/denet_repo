const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const dataRoute = require("./routes/dataRoute");
app.use("/api", dataRoute);

//mongoose.connect(process.env.MONGO_URI)
 // .then(() => console.log("MongoDB Connected"))
 // .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));