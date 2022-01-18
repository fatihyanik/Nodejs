const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    //getting all products
    //for any request we send all products
    if (req.url === "/style.css") {
      //send css file
      fs.readFile("./style.css", (error, data) => {
        if (error) throw error;
        res.end(data.toString());
      });
    } else {
      fs.readFile("./products.json", (error, data) => {
        if (error) {
          res
            .writeHead(200, { "content-type": "text/html" })
            .end("<h2>Internal server error</h2>");
          console.log(error);
        } else {
          let container = `<div class="container">`;
          let products = JSON.parse(data.toString());
          //console.log(products)
          // loop for each product inside generate a div for each item
          products.forEach((product) => {
            container += `<div class="product"><h2>${product.brand}</h2><p>Prise:${product.prise}</p></div>`;
          });
          container += `</div>`;
          console.log(container);
          fs.readFile("./index.html", (err, html) => {
            if (err) {
              res
                .writeHead(200, { "content-type": "text/html" })
                .end("<h2>Internal server error</h2>");
              console.log(err);
            } else {
              res.writeHead(200, { "content-type": "text/html" });
              res.end(html.toString().replace("@@", container));
            }
          });
        }
      });
    }
  })
  .listen(3000, () => console.log("The server is running on port 3000"));
