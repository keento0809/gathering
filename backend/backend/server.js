"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("Express + Typescript Server");
});
// const express = require("express");
// const app = express();
// configure dotenv
// temporary
// const userRoutes = require("./routes/UserRoutes.js");
// const gatheringRoutes = require("./routes/GatheringRoutes");
// const port = process.env.PORT || 8080;
// const cookieParser = require("cookie-parser");
app.use(express_1.default.json());
// app.use(cookieParser());
// app.use("/users", userRoutes);
// app.use("/gatherings", gatheringRoutes);
// test cookie
app.get("/greet", (req, res) => {
    console.log("ooo");
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
