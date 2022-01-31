const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// set public folder
app.use(express.static(path.join(__dirname, 'public')))

// set ejs as view engine
app.set('view engine', 'ejs');
// set views folder path
app.set('views', 'views');

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/blog', (req,res)=>{
    res.render('blog')
})
app.get('/blog-post', (req,res)=>{
    res.render('blog-post')
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})
app.get('/portfolio', (req,res)=>{
    res.render('portfolio')
})
app.get('/portfolio-item', (req,res)=>{
    res.render('portfolio-item')
})
app.get('/ui-elements', (req,res)=>{
    res.render('ui-elements')
})

app.listen(port, ()=>{
    console.log(`app is listening on pot ${port}`);
})
