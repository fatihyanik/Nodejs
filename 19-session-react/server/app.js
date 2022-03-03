const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 5 * 60 * 1000 }
}))

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        req.session.user = { username, password };
        res.json('done');
    } else {
        res.json('error');
    }
})
app.post('/checkuser', (req, res) => {
    if (req.session.user) {
        res.json('done');
    } else {
        res.json('error');
    }
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})