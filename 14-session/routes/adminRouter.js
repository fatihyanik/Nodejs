const express = require('express');
const { adminHome } = require('../models/admin');

const router = express.Router();


router.get('/',adminHome);

module.exports = router