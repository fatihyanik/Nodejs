const express = require("express");
const { log } = require("console");
const path = require("path");
const index = require("./routes/index");
const performance = require("./routes/performance");
const app = express();

// set PORT:
app.set("port", process.env.PORT || 3000);
// set view engine
app.set("view engine", "ejs");
// set views folder
app.use("views", express.static(path.join(__dirname, "views")));
// set public folder
app.use("/public", express.static(path.join(__dirname, "public")));

// handler for '/'
app.use("/", index);
// handle for /performance
app.use("/performance", performance);
app.listen(app.get("port"), () =>
  log(`The server is listening on port ${app.get("port")}`)
);
