const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { bcrypt } = require("bcrypt");
const jwt = require("jsonwebtoken");
const { nextTick } = require("process");

const saltRounds = 10;

router.use(
  "/login",
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find the corresponded user
    const loggedInUser =
      // Check hash password
      bcrypt.compare(password);
    // const hashedPassword = await bcrypt.hash(password, saltRounds);

    let token;

    try {
      token = await jwt.sign(email, process.env.TOKEN_SECRET, {
        expiresIn: "180000",
      });

      // add userData to DB

      res.status(200).json(token);
    } catch (err) {
      console.log(err);
      res.status(400);
      throw new Error("Error! Something went wrong.");
      // return next(error);
    }
  }
);

router.use(
  "/signup",
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    console.log(username, email, password);
  }
);

module.exports = router;
