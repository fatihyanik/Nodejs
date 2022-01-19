const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/contactme', (req,res)=>{
    res.send("<h1>contact with fatih</h1>")
})

app.get('/about', (req,res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(port, () => {
    console.log(`node application is listening to port: ${port} `);
})