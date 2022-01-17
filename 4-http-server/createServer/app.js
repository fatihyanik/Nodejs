// to create server in nodejs use "http" 
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    console.log(req.headers)
    console.log(req.url)
    // store req.headers in file
    fs.writeFile("req.json", JSON.stringify(req.headers), error => {
        if(error) throw error
        console.log("header saved!")
    })
    res.end("Hello world")
})
//console.log(http)

server.listen(3000, () => {
    console.log(`The server is running on port 3000`)
})

// if sudo npm not found
// sudo apt install npm
// to install nodemon global
// sudo npm -i -g nodemon