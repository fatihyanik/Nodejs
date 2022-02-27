const mongoose = require("mongoose");
require("dotenv").config();

// create schema
// get Schema class from mongoose
const Schema = mongoose.Schema;
// create user schema
const userSchema = new Schema({
  fName: {
    type: String,
    required: true,
    minLength: [2, "first name should be more than 2 characters"],
    maxLength: [50, "first name should be less than 50 characters"],
  },
  lName: {
    type: String,
    required: true,
    minLength: [2, "last name should be more than 2 characters"],
    maxLength: [50, "last name should be less than 50 characters"],
  },
  username: {
    type: String,
    required: true,
    minLength: [4, "username should be more than 4 characters"],
    maxLength: [50, "username should be less than 50 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minLength: [5, "email should be more than 5 characters"],
    maxLength: [50, "email should be less than 50 characters"],
  },
  birthDate: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
});

// create mongoose model to connect schema with DV Collection and to be used interact with database
const Users = mongoose.model("users", userSchema);
const connectionString = `mongodb+srv://${process.env.DB_BLOG_USER}:${process.env.DB_BLOG_PASSWORD}@cluster0.b7jkv.mongodb.net/${process.env.DB_BLOG_NAME}?retryWrites=true&w=majority`;

function connect() {
  return new Promise((resolve, reject) => {
    if (mongoose.connection.readyState === 1) {
      // mongoose id already connected
      resolve();
    } else {
      // try to connect
      mongoose
        .connect(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          // connection succeed
          resolve();
        })
        .catch((error) => {
          // connection error
          reject(error);
        });
    }
  });
}
// errors map:
// 0: database connection failed
// 1: register user error

/**
 *
 * @param {String} fName
 * @param {String} lName
 * @param {String} username
 * @param {String} email
 * @param {String} password
 * @param {Date} birthDate
 * @returns promise
 * @error error.number: 0: database connection error
 * @error error.number: 1: save user error username exist
 * @error error.number: 2: save user error email exist
 * @error error.number: 3: save user error unknown
 */

const registerUser = (fName, lName, username, email, password, birthDate) => {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        // connection is established
        // do the query
        const newUser = new Users({
          fName, // fName: fName
          lName,
          username,
          email,
          password,
          birthDate,
          verified: false,
        });
        newUser
          .save()
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            if (error.code === 11000) {
              if (Object.keys(error.keyPattern).includes("username")) {
                reject({ number: 1, error });
              } else {
                if (Object.keys(error.keyPattern).includes("email")) {
                  reject({ number: 2, error });
                } else {
                  reject({ number: 3, error });
                }
              }
            } else {
              reject({ number: 3, error });
            }
          });
      })
      .catch((error) => {
        reject({ number: 0, error });
      });
  });
};

module.exports = {
  registerUser,
};
