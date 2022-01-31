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
          console.log(data.toString());
          const tempArr = []
          const categories = JSON.parse(data.toString()).filter(product => {
            if(tempArr.indexOf(product.category) === -1){
              tempArr.push(product.category)
              return true
            }
            return false
          })
         res.render('mainTemplate', {
             title: "Products Page",
             content: "products",
             data: categories

         })
      }
    });
  }else{

  }
});

module.exports = route;
