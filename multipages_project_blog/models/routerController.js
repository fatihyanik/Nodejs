// import emailSender
const emailSender = require("./emailSender");
const {validationResult} = require('express-validator')

const getHome = (req, res) => {
  res.render("index");
};
const getIndex = (req, res) => {
  res.render("index");
};
const getBlog = (req, res) => {
  res.render("blog");
};
const getBlogPost = (req, res) => {
  res.render("blog-post");
};
const getContact = (req, res) => {
  res.render("contact");
};
const getPortfolio = (req, res) => {
  res.render("portfolio");
};
const getPortfolioItem = (req, res) => {
  res.render("portfolio-item");
};
const getUiElements = (req, res) => {
  res.render("ui-elements");
};
const postContact = (req, res) => {
  console.log(req.body);
  emailSender
    .sendEmail(req.body)
    .then((info) => {
      console.log(info);
      res.json({ result: "done" });
    })
    .catch((error) => {
      res.json({ result: "error" });
    });
};
const getRegister = (req,res)=>{
  res.render('register')
};
const postRegister = (req, res) => {
  // check if posted data is valid 
  const errors = validationResult(req)
  if(!errors.isEmpty()){
      res.json({ message: "validation error" })
  } else {
      console.log(req.body);
      //const {fName, lName, username, email, password, birthDate} = req.body
      //registerUser(fName, lName, username, email, password, birthDate).then((result)=>{
         // console.log(result);
          res.json({ message: 'done' })
    //  }).catch(error =>{
    //      console.log(error);
    //      res.json({message: error})
    //  })
  }
  
}

module.exports = {
  getHome,
  getIndex,
  getBlog,
  getBlogPost,
  getContact,
  getPortfolio,
  getPortfolioItem,
  getUiElements,
  postContact,
  getRegister,
  postRegister
};
