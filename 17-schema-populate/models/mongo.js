/**
 * create authors schema, connect to YOUR/MONGO/DB/bookstore
 * authors:
 *      1- name: String [5, 50], required
 *      2- email: String [5, 50], required, unique
 *      3- phone: String [4, 12]
 *      4- address: {
 *          country: String [2, 10], required
 *          city:  String [2, 10], required
 *      }
 */
 const mongoose = require("mongoose");

 // connect
 // in localhost:
 // mongodb://localhost:27017/bookstore
 mongoose.connect(
   `mongodb+srv://${process.env.USER_ATLAS}:${process.env.PASSWORD}@cluster0.b7jkv.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
   (error) => {
     if (error) throw error;
     console.log("Connected to MONGODB");
   }
 );

 /**
  * Authors Schema
  */
 const author_schema = new mongoose.Schema(
   {
     name: { type: String, required: true, maxlength: 50, minlength: 5 },
     email: {
       type: String,
       required: true,
       maxlength: 50,
       minlength: 5,
       unique: true,
       validate: [
         (em) => {
           const EmailRegEx =
             /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
           return EmailRegEx.test(em);
         },
         "Not a valid Email",
       ],
     },
     phone: { type: String, maxlength: 12, minlength: 4 },
     address: {
       country: { type: String, required: true, maxlength: 50, minlength: 2 },
       city: { type: String, required: true, maxlength: 50, minlength: 2 },
     },
   },
   {collection: "authors"}
 );
 const Authors = mongoose.model('Authors', author_schema);
 //////////////////////////////////////////////////
 
 
 module.exports = {Authors}