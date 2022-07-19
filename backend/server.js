const express = require("express");
const app = express();
// configure dotenv
require("dotenv").config();
const userRoutes = require("./routes/UserRoutes");
const gatheringRoutes = require("./routes/GatheringRoutes");
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/gatherings", gatheringRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
