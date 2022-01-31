const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("mainTemplate", {
    title: "About Page",
    content: "about",
  });
});

module.exports = route;
