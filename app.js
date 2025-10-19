// app.js

require('dotenv').config();
const express = require("express");
const connectDB = require("./src/config/db.js");
const userRoute = require("./src/routes/user.route.js")



const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();
app.use('/api/v1',userRoute);
// Simple Route
app.get("/", (req, res) => {
  res.send("Hello from Express + MongoDB (Connected via db.js)!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
