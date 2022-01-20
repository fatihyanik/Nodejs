const express = require('express');
require('dotenv').config();
const app = express();

//import servicesRouter
const servicesRouter = require('./routes/servicesRouter')

const port = process.env.PORT || 3000;
// middleware should be before any route
// any route will start with [/services] should be forwarded to servicesRouter
app.use('/services', servicesRouter)

app.get('/', (req,res)=>{
    res.send('hello')
})
/* app.get('/services', (req,res)=>{
    res.send('this is services pages')
})
app.get('/services/service1', (req,res)=>{
    res.send('this is service 1')
})
app.get('/services/service2', (req,res)=>{
    res.send('this is service 2')
})
app.get('/services/service3', (req,res)=>{
    res.send('this is service 3')
}) */






app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})