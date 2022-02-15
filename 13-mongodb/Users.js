const mongoose = require('mongoose');
const {Schema} = require('mongoose')


// define Schema
const usersSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    phone: Number,
    age: Number 
}, {collection:"users"})

// define a model:
const Users = mongoose.model('Users', usersSchema)


module.exports = Users