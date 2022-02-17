const express = require('express');
require('dotenv').config();
const path = require('path')

// use cors to let back end application accept requests from none origin apps
const cors = require('cors');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));
app.use(express.json())

const port = process.env.PORT || 4000;

app.use(cors())

app.post('/register', (req, res) => {
    console.log(req.body);
    res.json('done')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})