const express = require ('express');
const path = require('path')
require('dotenv').config();
// import express-fileupload npm library
const fileUpload = require('express-fileupload')
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// use express-fileupload as a middleware
app.use(fileUpload({
    limits: {fileSize: 2 * 1024 * 1024},
    abortOnLimit: true
}))


const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.render('index');
})

app.post('/savedata', (req,res)=>{
    console.log(req.body);
    console.log(req.files);
    // save the file inside public folder
    req.files.userImage.mv(path.join(__dirname, 'public', req.files.userImage.name))
    .then(()=>{
        res.json('done')
    }).catch(error=>{
        res.json(error.message)
    })
})


app.listen(port, ()=>{
    console.log(`Server is running on post ${port}`);
})