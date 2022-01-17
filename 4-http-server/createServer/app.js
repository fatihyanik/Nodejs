// to create server in nodejs use "http"
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.url);
  // store req.headers in file
  fs.writeFile("req.json", JSON.stringify(req.headers), (error) => {
    if (error) throw error;
    //console.log("header saved!")
  });
  if (req.url === "/") {
    res.writeHead(200, { "content-Type": "text/html" });
    //res.end("<h1>Welcome from Nodejs Server</h1>")
    fs.readFile("index.html", (error, data) => {
      if (error) throw error;
      res.end(data.toString());
    });
  } else if (req.url === "/home") {
    // redirect to /home
    res.writeHead(301, { Location: "/" }).end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h3>No resource found</h3>");
  }
  // api ===> req.json

});
//console.log(http)

server.listen(3000, () => {
  console.log(`The server is running on port 3000`);
});

// if sudo npm not found
// sudo apt install npm
// to install nodemon global
// sudo npm -i -g nodemon
