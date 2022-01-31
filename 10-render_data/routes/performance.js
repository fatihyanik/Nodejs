const express = require('express');
const os = require('os');
const router = express.Router();

router.get('/', (req,res)=>{
    let info = {
        time: new Date().getTime(),
        freemem: os.freemem,
        cpus : os.cpus(),
        node_version: process.version,
        os_version: os.version()
    }
    res.render('performance', info)
})

module.exports= router
