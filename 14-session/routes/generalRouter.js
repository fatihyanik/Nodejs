const express = require('express');

const router = express.Router();

const {login, aboutUs} = require('../models/general');

router.get('/', login);
router.get('/login', login);
router.get('/aboutus', aboutUs);


module.exports = router