const express = require("express");
const logger = require("morgan");
const fs = require('fs')
const app = express();
// setting the port
app.set("port", process.env.PORT || 3000);
// setting a view engine ...
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// Set public folder
app.use('/public', express.static(__dirname + '/public'))
// add bootstrap folder from node_modules
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap"))
app.use('/jquery', express.static(__dirname + "/node_modules/jquery"))
app.use(logger("dev"));

// getting main request
app.get("/", (req, res) => {
  //console.log(req.query)
  // res.sendFile(__dirname+'/index.html')
  let products = [{
      name: "BMW",
      model: 2000,
      fuel: "Diesel"
    },
    {
      name: "Ford",
      model: 2005,
      fuel: "Benzin"
    },
    {
      name: "Opel",
      model: 2010,
      fuel: "Gas"
    },
    {
      name: "Audi",
      model: 2020,
      fuel: "Diesel"
    },
  ];
  res.render("index", {
    title: "Home",
    content: "This is home page",
    dark: req.query.dark==="true" ? true : false,
    data: products
  });
});

app.get("/about", (req, res) => {
  // res.sendFile(__dirname+'/about.html')
  res.render("about", {
    title: "About",
    content: "This is About page",
    dark: req.query.dark==="true" ? true : false,
  });
});

app.get("/services", (req, res) => {
  // res.sendFile(__dirname+'/services.html')
  res.render("services", {
    title: "Services",
    content: "This is Services page",
    dark: req.query.dark==="true" ? true : false,
  });
});

app.get("/products", (req, res) => {
  // to read GET method params req.query
  console.log(req.query)
  // to read POST data req.body
  // res.sendFile(__dirname+'/services.html')
  fs.readFile('./products.json', (error, data)=>{
    if(error){
      res.render('index', {
        title: "error",
        dark: req.query.dark==="true" ? true : false,
        content: "Internal Server Error",
        data: null
      })
    }else{
      res.render("products", {
        title: "Products",
        content: "This is Products page",
        dark: req.query.dark==="true" ? true : false,
        data: JSON.parse(data.toString())
      });
    }
  })

});

app.get("/api", (req, res) => {
  res.json([{
    name: "Mostafa",
    age: 30,
  }, ]);
});

app.listen(app.get("port"), () => {
  console.log(`The server is running on Port: ${app.get("port")}`);
});