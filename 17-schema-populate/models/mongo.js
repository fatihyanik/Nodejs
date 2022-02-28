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
  { collection: "authors" }
);
const Authors = mongoose.model("Authors", author_schema);
//////////////////////////////////////////////////

/**
 * create books_schema contains the following:
 * 1- title, String, required, max 50
 * 2- author, ID FOR AUTHOR,
 * 3- pages: Number, required,
 * 4- prise:  Number, required,
 * 5- description: String, required
 *
 * example for one book: {
 * title: 'ANY,
 * author: {
 *   name: 'ANY',
 *   email:'ANY',
 *   address:{
 *     country:'ANY',
 *     city:'ANY'
 *           }
 *     phone:'ANY',
 *     },
 * author: ID FOR AUTHOR
 * pages: Number, required,
 * prise: Number, required,
 * description: String
 * }
 */

const books_schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Authors',
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    prise: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "books" }
);

const Books = mongoose.model("Books", books_schema);

module.exports = { Authors, Books };
