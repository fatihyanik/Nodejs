const express = require("express");

const plRouter = express.Router();

plRouter.get("/", (req, res) => {
  res.send("my programming languages skills");
});
plRouter.get("/js", (req, res) => {
  res.send("my js skills");
});
plRouter.get("/c-sharp", (req, res) => {
  res.send("my c# skills");
});
plRouter.get("/c-plus", (req, res) => {
  res.send("my C+ skills");
});
plRouter.get("/python", (req, res) => {
  res.send("my python skills");
});

module.exports = plRouter;
