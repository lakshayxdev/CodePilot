require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes=require("./routes/authRoutes");
const aiRoutes=require("./routes/aiRoutes");
const historyRoutes=require("./routes/historyRoutes");
const dashboardRoutes=require("./routes/dashboardRoutes");

const connectDB = require("./config/db");


const app = express();

// Connect Database
connectDB();


// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Test Route
app.get("/", (req, res) => {
 res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});