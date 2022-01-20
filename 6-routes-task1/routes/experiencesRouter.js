const express = require('express');

const experiencesRouter = express.Router();
experiencesRouter.get("/", (req,res)=>{
    res.send('this is experiences page');
})
experiencesRouter.get("/frontend", (req,res)=>{
    res.send('<h1>this is my front end skills</h1>');
})
experiencesRouter.get("/backend", (req,res)=>{
    res.send('this is my back end skills');
})
experiencesRouter.get("/programming-language", (req,res)=>{
    res.send('programming language that i know');
})

module.exports = experiencesRouter;