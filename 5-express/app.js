// require express
const express = require('express');
require('dotenv').config();
const path = require('path')

const app = express();
// try to get port from .env file
// if cannot we set it to 3000
const port = process.env.PORT || 3000;

// create public middleware
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')))
// create home route
app.get('/', (req, res) => {
    console.log(__dirname)
    //res.send("Hello FBW E05-1");
    // res.sendFile(__dirname + '/views/index.html');
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get('/contactus', (req,res)=>{
    //console.log(req)
    res.send('<h1>this is contact us page</h1>')
})
// task1:
// create a route /about and send the file / views/about.html
app.get('/about', (req, res) => {
    //res.sendFile(__dirname + '/views/about.html')
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

// task2: download some free html templates and try to build backend routes for them




// make app listen to port 3000
app.listen(port, () => {
    console.log(`node application is listening to port : ${port}`);
})