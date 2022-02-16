const express = require('express');
require('dotenv').config();
const path = require('path');
const session = require('express-session'); // require express session

const generalRouter = require('./routes/generalRouter')

const app = express();

const port = process.env.PORT || 3000;

// configure session
app.use(session({
  secret: 'my website',
  cookie: {maxAge: 10 * 1000} // maxAge should be in millisecond
}))

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(generalRouter)


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})



