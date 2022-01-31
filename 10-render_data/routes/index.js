const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  let obj = {
    name: "Fatih",
    age: 28,
    married: false,
    skills: ["HTML", "CSS", "Javascript"],
    address: {
      country: "Germany",
      city: "Leipzig",
      street: "Grünau",
      zipcode: 42007,
    },
  };
  res.render("index", obj);
});

module.exports = router;
