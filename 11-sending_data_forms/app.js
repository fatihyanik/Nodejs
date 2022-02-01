const express = require("express");
const { log } = require("console");
const path = require("path");

const index = require('./routes/index');

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
// use request json parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("views", express.static(path.join(__dirname, "views")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/', index);

app.listen(app.get("port"), () => {
  log(`the server is listening on port: ${app.get("port")}`);
});
