/**
 * 1- the project should has:
 *  a- views (folder)
 *      1- partials (folder)
 *          a- cssLinks.ejs
 *          b- jsLinks.ejs
 *          c- navbar.ejs
 *          d- footer.ejs
 *      2- content (folder)
 *          e- home.ejs
 *          f- about.ejs
 *          g- products.ejs
 *          h- product.ejs
 *      3- mainTemplate.ejs (file)
 *  b- routes (folder)
 *      1- home.js
 *      2- products.js
 *      3- about.js
 *  c- public (folder)
 *      1- css (folder)
 *          a- style.css
 *      2- js (folder)
 *          a- script.js
 *      3- images (folder)
 *  d- data (folder)
 *     products.json
 * 2- create Server using express
 * 3- set accessible public folder and include bootstrap
 * 4- set the view engine ejs
 * 5- make the following routes
 *      a- "/" home
 *      b- "/about" about
 *      c- "/products" products
 */

const express = require("express");
const logger = require("morgan");
const {log} = require('console')
const path = require('path');
require('dotenv').config();
const Home = require('./routes/home');
const About = require('./routes/about');
const Products = require('./routes/products');


const app = express();
// setting the port
app.set("port", process.env.PORT || 3001);
// setting a view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// use logger
app.use(logger('dev'))
// setting public folder
app.use("/public", express.static(__dirname + "/public"));
// adding bootstrap folder from node_modules
app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap")));
app.use("/jquery", express.static(path.join(__dirname, "node_modules/jquery")));

// settings routes
app.use('/', Home)
app.use('/about', About)
app.use('/products', Products)



// getting main request


app.listen(app.get("port"), () => {
  console.log(`The server is running Port: ${app.get("port")}`);
});
