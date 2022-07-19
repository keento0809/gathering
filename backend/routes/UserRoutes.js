const express = require("express");
const router = express.Router();

// test middleware
router.use((req, res, next) => {
  if (req.query.isLoggedIn) {
    next();
  }
  res.json({ error: "Not logged in!" });
});

router.get("/", (req, res) => {
  res.json({ msg: "I'll fetch all users" });
});

module.exports = router;
