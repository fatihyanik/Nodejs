const express = require("express");
const route = express.Router();
const fs = require("fs");

route.get("/", (req, res) => {
  //console.log(req.query)
  if (!req.query.category) {
    fs.readFile("./data/products.json", (error, data) => {
      if (error) {
        res.render("mainTemplate", {
          title: "Products Page",
          content: "products",
          category: null
        });
      }else{
          console.log(data.toString())
         res.render('mainTemplate', {
             title: "Products Page",
             content: "products",
             data: JSON.parse(data.toString())

         })
      }
    });
  }else{

  }
});

module.exports = route;
