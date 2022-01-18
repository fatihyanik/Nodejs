// start
const http = require("http");
const fs = require("fs");
const url = require("url");

// getting template
let template = ``;
fs.readFile("./index.html", (error, data) => {
  if (error) throw error;
  template = data.toString();
});

const server = http
  .createServer((req, res) => {
    // getting all products
    // for any request we send all products
    // console.log(url.parse(req.url, true));
    const params = url.parse(req.url, true).query;
    if (params.id) {
      // asking for some product
      fs.readFile("./products.json", (error, data) => {
        if (error) {
          res
            .writeHead(200, { "content-type": "text/html" })
            .end("<h1>Internal Server Error!</h1>");
        } else {
          const products = JSON.parse(data.toString());
          const product = products.find((item) => item.id == params.id);
          //   console.log(product)
          let content = `<div class="product"><h1>${product.brand}</h1>
                            <ul>
                                <li>model: ${product.model}</li>
                                <li>power: ${product.power}</li>
                                <li>gear: ${product.gear}</li>
                                <li>fuel: ${product.fuel}</li>
                                <li>prise: ${product.prise}</li>
                                <li>doors: ${product.doors}</li>
                            </ul></div>
                            <a href="/">Go To all products</a>
                    `;
          res.writeHead(200, { "content-type": "text/html" });
          res.end(template.replace("@@", content).replace("[[", product.brand));
        }
      });
    } else if (params.doors) {
      // return to client all cars which have doors matching
      fs.readFile("./products.json", (error, data) => {
        if (error) {
          res
            .writeHead(200, { "content-type": "text/html" })
            .end("<h1>Internal Server Error</h1>");
        } else {
          const products = JSON.parse(data.toString());
          const product = products.filter((p) => p.doors == params.doors);
          //console.log(product)
          let container = `<div class="container">`;
          if(product.length>0){
              product.forEach((pro) => {
                container += `<div class="product"><h2>${pro.brand}</h2> <p>Prise: ${pro.prise}</p><a href="/?id=${pro.id}">Read more</a></div>`;
              });
              container += `</div> <a href="/">Go To all products</a>`;
              res.writeHead(200, { "content-type": "text/html" });
              res.end(
                template.replace("@@", container).replace("[[", `All Products || ${params.doors}`)
              );
          }else{
            res.writeHead(200, { "content-type": "text/html" });
            res.end(template.replace("@@", "No Product Found!"))
          }
        }
      });
    } else if(params.brand){
        // store the new incoming request params in products.json, you must auto increases the id
        // 1-get products
        // 2-create an object of product (increases id)
        // 3-push to products the new object
        // 4-re-save the products in same file
        fs.readFile("./products.json", (error, data)=>{
            if(error){
                res
                .writeHead(200, { "content-type": "text/html" })
                .end("<h1>Internal Server Error</h1>");
            }else{
                let products = JSON.parse(data.toString());
                let product = params;
                product.id = products[products.length-1].id+1;
                console.log(product);
                products.push(product);
                fs.writeFile("./products.json", JSON.stringify(products), error=>{
                    if(error){
                        res
                        .writeHead(200, { "content-type": "text/html" })
                        .end("<h1>Internal Server Error</h1>");
                    }else{
                        res.writeHead(301, {Location: "/"}).end()
                    }
                })
            }
        })
    }
    
    else {
      fs.readFile("./products.json", (error, data) => {
        if (error) {
          res
            .writeHead(200, { "content-type": "text/html" })
            .end("<h2>Internal server error</h2>");
          console.log(error);
        } else {
          let container = `<div class="container">`;
          let products = JSON.parse(data.toString());
          // console.log(products)
          // loop for each product inside to generate a div for each item
          products.forEach((product) => {
            container += `<div class="product ${product.power>=200 ? "red" :""}"><h2>${product.brand}</h2> <p>Prise: ${product.prise}</p><a href="/?id=${product.id}">Read more</a></div>`;
          });
          container += `</div> <hr>
          <form action="/" method="GET">
            <input type="text" placeholder="Doors" name="doors" /> <br>
            <input type="submit" value="Search" />
            </form>
            <hr/>
          <form action="/" method="GET">
            <input type="text" placeholder="brand" name="brand" /><br/>
            <input type="text" placeholder="model" name="model" /><br/>
            <input type="text" placeholder="power" name="power" /><br/>
            <input type="text" placeholder="gear" name="gear" /><br/>
            <input type="text" placeholder="fuel" name="fuel" /><br/>
            <input type="text" placeholder="prise" name="prise" /><br/>
            <input type="text" placeholder="doors" name="doors" /><br/>
            <input type="submit" value="Insert"/><br/>
          </form>
            `;
          res.writeHead(200, { "content-type": "text/html" });
          res.end(
            template.replace("@@", container).replace("[[", "All Products")
          );
        }
      });
    }
  })
  .listen(3000, () => console.log("The server is running on port 3000."));
