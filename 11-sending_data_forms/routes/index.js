const express = require("express");
const router = express.Router();
const Persons = require('../models/person')

/* const persons = [
  {
    id: 0,
    name: "Ahmad",
    age: 30
  },
  {
    id: 1,
    name: "Mostafa",
    age: 55
  },
  {
    id: 2,
    name: "Rami",
    age: 20
  },
  {
    id: 3,
    name: "Barry",
    age: 20
  }
]; */

router.get("/", (req, res) => {
  res.send(req.url);
});

router.get("/persons", (req, res) => {
  // res.render("index", { data: persons });
  Persons.getAllPersons().then(persons=>{
    res.render("index", { data: persons });
  }).catch(error => {
    res.json(error)
  })
});

router.get("/persons/:id", (req, res) => {
  // res.json
  let id = req.params["id"];
  //let person = persons.find((p) => p.id == id);
  // res.json(person);
  //res.render('person', {person:person})
  Persons.getPersonById(id).then(person=>{
    res.render('person', {person:person})
  }).catch(error=>{
    res.json(person);
  })
});

router.get('/add', (req,res)=>{
    res.render('add')
})

router.post('/add', (req,res)=>{
    res.json(req.body)
})


module.exports = router;
