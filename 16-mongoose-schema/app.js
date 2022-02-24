const mongoose = require("mongoose");
const { Schema } = require("mongoose");
// connect to mongoDb
mongoose.connect("mongodb://localhost:27017/bookstore", (error) => {
  if (error) {
    // handle error
    console.log(error);
  } else {
    console.log(`Connected to MongoDb`);
  }
});

// create Schema for users collections
const users_schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [10, `Email  required 10 at lest`],
      maxlength: [50, "Email must be less than 50 characters"],
      // costum validator for email syntax
      validate: {
          validator: em=>{
            const EmailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
            return EmailRegEx.test(em)? true: false
          },
          message:"Not a valid Email",
      }
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: [18, "must be more than 18"],
      max: [50, "must be less than 50"],
      // custom validator even numbers only
      validate: {
        validator: (n) => {
          if (n % 2 === 0) {
            return true;
          } else {
            return false;
          }
        },
        message: "Age must be even only!",
      },
    },
    active: {
      type: Boolean,
      required: false,
    },
    address: {
      /*
            object, Required
                country: string, min:5, max:20, required, 
                city: string, min:5, max:20, required,
                zipCode: number, 5 digits, required
        */
      country: {
        type: String,
        required: true,
        minlength: [5, "Country must be more than 5"],
        maxlength: [20, "Country must be less than 20"]
      },
      city: {
        type: String,
        required: true,
        minlength: [5, "city must be more than 5"],
        maxlength: [20, "city must be less than 20"]
      },
      zipCode:{
          type: Number,
          required: true,
          // max 99999, min 10000
          validate: {
              validator: zc=>{
                return zc>=10000 && zc<=99999
              },
              message: 'zipCode must be 5 digits'
          }
      }
    },
  },
  {
    collection: "users",
  }
);
// define the model for users
const users_model = mongoose.model("users", users_schema);
// insert user
let user_1 = {
  name: "John",
  email: "aaa@learn-to.codes",
  password: "1234",
  age: 20,
  active: true,
  address: {
    country: "Germany",
    city: "Hamburg",
    zipCode: 12345,
  },
};

// INSERTING
// users_model.create(user_1, (error, result) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     console.log(result);
//   }
// });
// looking for some data
// users_model.find({name: "Mostafa"}).then(result=>{
//     console.log(result)
// }).catch(error=>{
//     console.log(error)
// })

// update: name, email, zipCode for one document
users_model.updateOne({email: "zzz@zzz.zzz"}, {
    $set: {name: "Edited_Name", email: "aaaz@zzz.zzz", "address.zipCode": 99001}
},{
    runValidators: true
}, (error, result)=>{
    if(error){
        console.log(error.message)
    }else{
        console.log(result)
    }
})

