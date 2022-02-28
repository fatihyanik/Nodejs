const express = require('express')
const { default: mongoose } = require('mongoose')
const Mongo = require('../models/mongo')
const router = express.Router()



router.get('/addauthor', (req, res)=>{
    res.render('addAuthor')
})

router.post('/addauthor', (req, res)=>{
    // req.body
    const data = {
        name: req.body.name,
        email: req.body.email,
        address : {
            country: req.body.country,
            city: req.body.city
        },
        phone: req.body.phone
    }
    
    console.log(data)
    Mongo.Authors.create(data).then(result=>{
        res.json({success: "Author was Saved!", result: result})
    }).catch(error=>{
        res.json({error: error.message})
    })
    // store the author
})


// add book route
router.get('/addbook', (req, res)=>{
    // getting all authors
    Mongo.Authors.find({}, (error, authors)=>{
        if(error){
            res.json({error: error})
        }else{
            res.render("addBook", {authors: authors})
        }
    })
})

// add new book
router.post('/addbook', (req, res)=>{
    console.log(req.body)
    Mongo.Books.create({...req.body, author: new mongoose.Types.ObjectId(req.body.author)}).then(result=>{
        res.json({success: `Book "${req.body.title}" wass added Successfuly`, result: result})
    }).catch(error=>{
        res.json({error: error.message})
    })
})






module.exports = router