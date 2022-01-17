// create a simple web server with multiple routing (home, about, contact, api)
// the data for api located in data.json file

// to create server in nodejs use "http"
require("dotenv").config();
const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http
  .createServer((req, res) => {
    console.log(req);
    if (req.method === "GET") {
      if (req.url !== "/")
        fs.readFile(`./pages${req.url}.html`, (error, data) => {
          if (error) {
            res
              .writeHead(404, { "content-type": "text/html" })
              .end("<h4>Not Found!</h4>");
          } else {
            res
              .writeHead(200, { "content-type": "text/html" })
              .end(data.toString());
          }
        });
      else {
        res.writeHead(301, { "Location": "/home" }).end();
      }
    } else {
      // for other methods
      console.log(req.method);
      console.log(req.url)
      fs.readFile("./data.json", (error, data) => {
        if (error) {
          res
            .writeHead(404, { "content-type": "application/json" })
            .end(JSON.stringify({ error: "error", message: error }));
        } else {
          res
            .writeHead(200, { "content-type": "application/json" })
            .end(data.toString());
        }
      });
    }
  })
  .listen(port, () => {
    // console.log(process.env.PORT)
    console.log(`The server is running on port ${port}`);
  });
