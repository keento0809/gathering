const express = require("express");
const app = express();
// configure dotenv
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ msg: "test succeeded" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
