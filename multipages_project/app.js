const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();

// import emailSender
const emailSender = require("./models/emailSender");

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

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/blog-post", (req, res) => {
  res.render("blog-post");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});
app.get("/portfolio-item", (req, res) => {
  res.render("portfolio-item");
});
app.get("/ui-elements", (req, res) => {
  res.render("ui-elements");
});

/* app.post('/contact', (req, res)=>{
  console.log(req.body);
  emailSender.sendEmail(req.body, (data) => {
    res.json(data)
  })
}) */

app.post('/contact', (req, res) => {
  console.log(req.body);
  emailSender.sendEmail(req.body).then((info) => {
    console.log(info);
      res.json({result: 'done'})
  }).catch(error => {
      res.json({result: 'error'})
  })
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
