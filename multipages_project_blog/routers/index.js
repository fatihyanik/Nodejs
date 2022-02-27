const express = require("express");
// import body from express-validator to set inputs rules
const {body} = require('express-validator')
const { getHome, getIndex, getBlog, getBlogPost, getContact, getPortfolio, getPortfolioItem, getUiElements, postContact, getRegister, postRegister } = require("../models/routerController");

const router = express.Router();

router.get("/", getHome);
router.get("/index", getIndex);
router.get("/blog",getBlog);
router.get("/blog-post", getBlogPost);
router.get("/contact", getContact);
router.get("/portfolio",getPortfolio);
router.get("/portfolio-item", getPortfolioItem);
router.get("/ui-elements",getUiElements);
router.get("/register", getRegister);
router.post('/register',
// set express-validator rules
body('fName').isLength({min: 2, max: 50}).notEmpty().isAlpha(),
body('lName').isLength({min: 2, max: 50}).notEmpty().isAlpha(),
body('username').isLength({min: 4, max: 50}).notEmpty().isAlpha(),
body('email').isLength({min: 5, max: 50}).notEmpty().isEmail(),
body('password').isLength({min: 8, max: 20}).notEmpty(),
body('birthDate').notEmpty().isDate()
, postRegister)

/* app.post('/contact', (req, res)=>{
    console.log(req.body);
    emailSender.sendEmail(req.body, (data) => {
      res.json(data)
    })
  }) */

router.post("/contact", postContact);

module.exports = router;
