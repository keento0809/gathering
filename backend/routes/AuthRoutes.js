const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { bcrypt } = require("bcrypt");
const jwt = require("jsonwebtoken");
const { nextTick } = require("process");
const { findOne } = require("../models/UserModel");
const { User } = require("../models/UserModel");

const saltRounds = 10;
const expiresIn = { expiresIn: "180000" };

async function generateAccessToken(userEmail) {
  return await jwt.sign({ userEmail }, process.env.TOKEN_SECRET, expiresIn);
}

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
    const loggedInUser = await User.findOne({ email });
    // Check hash password
    const checkHash = await bcrypt.compare(password, loggedInUser.password);

    if (loggedInUser && checkHash) {
      const token = await generateAccessToken(email);

      const { _id, username, email, joinGathering, hostGathering } =
        loggedInUser;

      res.status(200).json({
        _id,
        username,
        email,
        token,
        joinGathering,
        hostGathering,
      });
    } else {
      res.status(400).json({ error: "Invalid credentials" });
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

    // Check existing user
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ error: "User has already existed." });
    }

    // Create hashed password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Generate Token
    const token = await generateAccessToken(email);

    if (token && hashedPassword) {
      // send userInfo to DB
      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
        joinGathering: [],
        hostGathering: [],
      });
      res.status(200).json({
        _id: newUser.id,
        email: newUser.email,
        token: newUser.token,
      });
    } else {
      res.status(400).json({ error: "Failed to login." });
    }
  }
);

module.exports = router;
