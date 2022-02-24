/*
    in mongoose
    1- connect to MongoDb schools database
    2- create collections students with following fields:
        a- name: String [5, 20] required
        b- email: String [12, 50] required email expression
        c  matrik_id: String [6] required, first two letters and the rest is numbers, unique (ex: RB4567)
        d- class_id: Number [less than 100] required
        e- skills: Array of Strings (NOT REQUIRED)
        f- address Object
                1- country: String [5, 20] required
                2- city: String [5, 20] required
                3- street: String [5, 20] NOT REQUIRED
        g- age: Number [12, 18] required

*/

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/schools", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to MongoDB");
  }
});

const students_schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [5, `Name must be 10 characters at lest`],
      maxLength: [20, "Name must be less than 20 characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: [12, "Length should be more than 12"],
      maxLength: [50, "Length should be less than 50"],
      validate: {
        validator: (em) => {
          const EmailRegEx =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
          return EmailRegEx.test(em);
        },
        message: "Not a valid Email",
      },
    },
    matrik_id: {
      type: String,
      length: 6,
      required: true,
      validate: {
        validator: (mk) => {
          const mkReg = /[A-Z]{2}\d{4}/;
          return mkReg.test(mk);
        },
        message: "Not a valid Matrik Number",
      },
    },
    class_id: {
      type: Number,
      required: true,
      maxLength: [100, "Name must be less than 100 characters"],
    },
    skills: {},
    address: {
      country: {
        type: String,
        required: true,
        minLength: [5, "Country must be more than 5"],
        maxLength: [20, "Country must be less than 20"],
      },
      city: {
        type: String,
        required: true,
        minLength: [5, "city must be more than 5"],
        maxLength: [20, "city must be less than 20"],
      },
      street: {
        type: String,
        minLength: [5, "city must be more than 5"],
        maxLength: [20, "city must be less than 20"],
      },
    },
  },
  {
    collection: "students",
  }
);

// define the model for users
const students_model = mongoose.model("students", students_schema);
// insert user
let student_1 = {
  name: "John",
  email: "aaa@learn-to.codes",
  matrik_id: "1234",
  class_id: 20,
  skills: true,
  address: {
    country: "Germany",
    city: "Hamburg",
    zipCode: 12345,
  },
};
