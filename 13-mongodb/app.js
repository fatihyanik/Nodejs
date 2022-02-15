const mongoose = require('mongoose');
const Users = require('./Users');
mongoose.connect('mongodb://localhost/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}/* , ()=>{
    console.log("MongoDb Connected ...");
} */)

mongoose.connection.on('open', ()=>{
    console.log("MongoDb Connected ...");
}).on('error',error=>{
    console.log(error);
})

// get all data from users
Users.find().then(u=>{
    //console.log(u);
}).catch(error=>{
    console.log(error);
})

// insert a new user, if email not exist
// check if email exist
Users.find({email: "rrr@rrr.rr"}).then(u=>{
    if(u.length>0){ // email exist
        console.log(`The Email is already exist`);
    }else{ // email not exist
        Users.create({
            first_name: "NODEJS",
            last_name: "EXPRESS",
            email: "rrr@rrr.rr",
            password: 123,
            phone: 123,
            age: 12
        }).then(p=>{
            console.log(p);
        }).catch(error=>{
            console.log(error);
        })
    }
}).catch(error=>{
    console.log(error);
})
