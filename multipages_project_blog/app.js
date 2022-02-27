const express = require("express");
require("dotenv").config();
const path = require("path");

// get router
const router = require('./routers/index');

const app = express();


const port = process.env.PORT || 3000;

// add middleware to get the data using POST request
app.use(express.urlencoded({ extended: false })); // false it wil queryString parser
app.use(express.json());

// set public folder
app.use(express.static(path.join(__dirname, "public")));

// set ejs as view engine
app.set("view engine", "ejs");
// set views folder path
app.set("views", "views");

app.use('/', router)


app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
