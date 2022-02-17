const express = require('express');
const { adminHome, logout, logoutPost } = require('../models/admin');

const router = express.Router();


router.get('/',adminHome);
router.get('/logout', logout);
router.post('/logout', logoutPost)

module.exports = router