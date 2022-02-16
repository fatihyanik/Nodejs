const express = require('express');
require('dotenv').config();
const path = require('path');

const generalRouter = require('./routes/generalRouter')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(generalRouter)

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})