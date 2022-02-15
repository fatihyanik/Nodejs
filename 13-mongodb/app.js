const mongoose = require("mongoose");
const Users = require("./Users");
mongoose.connect("mongodb://localhost/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
});
// mongoose.createConnection('mongodb://localhost/bookstore',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connection
  .on("open", () => {
    console.log("MongoDb Connected ...");
  })
  .on("error", (error) => {
    console.log(error);
  });

Users.find()
  .then((u) => {
    //console.log(u)
  })
  .catch((error) => {
    console.log(error);
  });

// insert a new user, if email not exist
// check if email exist
// Users.find({email: "rrr@rrr.rrr"}).then(u=>{
//     if(u.length > 0){// email exist
//         console.log(`the Email is already exist`)
//     }else{// email not exist

//     }
// }).catch(error=>{
//     console.log(error)
// })

Users.create({
  first_name: "NODEJS",
  last_name: "EXPRESS",
  email: "rrr@rrr.rrr",
  password: 123,
  phone: "123456",
  age: 32,
})
  .then((p) => {
    console.log(p);
  })
  .catch((error) => {
    console.log(error);
  });

// try to edit one user first_name, age
// Users.findOneAndUpdate({email: "mostafa.othman@digitalcareerinstitute.org"}, {$set: {first_name: "Edited", age:70}}, {new: true}).then(u=>{
//     console.log(u)
// }).catch(error=>{
//     console.log(error)
// })
Users.findOneAndUpdate(
  { email: "fatih@gmail.com" },
  { $set: { first_name: "Edited", age: 50 } },
  { new: true },
  (error, result) => {
    if (error) throw error;
    console.log(result);
  }
);
