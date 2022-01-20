const express = require('express');

const servicesRouter = express.Router();

// root / will be /services
servicesRouter.get('/', (req,res)=>{
    res.send('this is services page')
})
// route for /services/service1
servicesRouter.get('/service1', (req,res)=>{
    res.send('this is service1')
})
// route for /services/service2
servicesRouter.get('/service2', (req,res)=>{
    res.send('this is service2')
})
// route for /services/service3
servicesRouter.get('/services3', (req,res)=>{
    res.send('this is services3')
})

module.exports = servicesRouter;