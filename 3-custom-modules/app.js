const { toLocal, getCurrentDate } = require("./models/date");
const { email, emailPass, sqlUser } = require("./models/config");
const {hash} = require('./models/passwordManager');

console.log(getCurrentDate());
console.log(toLocal());
console.log(email);
hash('12345678').then(hashedPassword =>{
    console.log(hashedPassword);
}).catch(error =>{
    console.log(error);
})

