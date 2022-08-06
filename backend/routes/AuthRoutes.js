const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.use("/login", (req, res) => {
  const { email, password } = req.body;
});

router.use("/signup", body("password").isLength({ min: 6 }), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, email, password } = req.body;
  console.log(username, email, password);
});

module.exports = router;
