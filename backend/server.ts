import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

// const express = require("express");
// const app = express();
// configure dotenv
// require("dotenv").config();
const userRoutes = require("./routes/UserRoutes");
const gatheringRoutes = require("./routes/GatheringRoutes");
// const port = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/users", userRoutes);
app.use("/gatherings", gatheringRoutes);

// test cookie
app.get("/greet", (req, res) => {
  console.log(req.cookies);
  res.send("HEY THERE!");
});

app.get("/setname", (req, res) => {
  res.cookie("name", "harry");
  res.cookie("animal", "Lion");
  res.send("OK, SEND YOU A COOKIE");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
