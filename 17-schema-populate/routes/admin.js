const express = require("express");
const Mongo = require("../models/mongo");
const router = express.Router();

router.get("/addauthor", (req, res) => {
  res.render("addAuthor");
});

router.post("/addauthor", (req, res) => {
  // req.body
  const data = {
    name: req.body.name,
    email: req.body.email,
    address: {
      country: req.body.country,
      city: req.body.city,
    },
    phone: req.body.phone,
  };

  console.log(data);
  Mongo.Authors.create(data)
    .then((result) => {
      res.json({ success: "Author was Saved!", result: result });
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
  // store the author
});

module.exports = router;
