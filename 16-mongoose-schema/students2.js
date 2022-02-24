const mongoose = require("mongoose");
const { log } = require("console");

mongoose.connect("mongodb://localhost:27017/test", (error) => {
  if (error) throw error;
  log("Connected To MongoDB");
});

const students_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [5, "Length should be more than 5"],
      maxLength: [20, "Length should be less than 20"],
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
    skills: {
        type: [{// for each item inside}
            type: String,
            minLength :2,
            maxLength: 10
        }],
        validate: [
            (arr) => arr.length<=3,
            `Should be less than 3 items`
        ]
    },
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
          minLength: [5, "street must be more than 5"],
          maxLength: [20, "street must be less than 20"],
        },
      },
    },

  {
    collection: "students",
  }
);

const Students = mongoose.model("Students", students_schema);
let student_1 = {
    name: 'Murat',
    email: 'fatih1@gmail.com',
    matrik_id: "RB3456",
    class_id: 2,
    skills: ["Javascript", "HTML", "CSS"],
    address: {
        country: "Germany",
        city: "Leipzig",
        street: "Mainheimer"
    }
}
Students.create([{...student_1, email: 'abc@abc.gdabc'}, {...student_1, email: "new@nemdf.gmail"}]).then(result=>{
    log("Success",result)
}).catch(error => log(error.message))