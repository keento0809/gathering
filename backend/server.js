// configure dotenv
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes.js");
const gatheringRoutes = require("./routes/GatheringRoutes");
const authRoutes = require("./routes/AuthRoutes");
const port = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");

// Connect DB
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/gatherings", gatheringRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
