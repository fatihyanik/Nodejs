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
 *      3- mainTemplate.ejs
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
 *      products.json
 *
 * 2- create Server using express
 * 3- set accessble public folder and include bootstrap
 * 4- set the view engine ejs
 *
 * 6- make the following routes
 *      a- "/" home
 *      b- "/about" about
 *      c- "/products" products
 */

const express = require("express");
const logger = require("morgan");
const { log } = require("console");
const path = require("path");
require("dotenv").config();
const Home = require("./routes/home");
const About = require("./routes/about");
const Products = require("./routes/products");

const app = express();

// set variables
app.set("port", process.env.PORT || 3001);
// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// use logger
app.use(logger("dev"));
// set public folder
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap"))
);
app.use("/jquery", express.static(path.join(__dirname, "node_modules/jquery")));

// settings routes
app.use("/", Home);
app.use("/about", About);
app.use("/products", Products);
// to set 404 page
app.get("*", (req, res) => {
  res.render("mainTemplate", {
    title: "Not Found",
    content: "error",
    error: "Page Not Found",
  });
});

app.listen(app.get("port"), () => {
  log(`Server is running on port ${app.get("port")}.`);
});
