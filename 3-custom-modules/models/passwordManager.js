const bcrypt = require("bcrypt")

function hash(originalPassword){
    return new Promise((resolve, reject) =>{
        bcrypt.hash(originalPassword, 10, (err, hash) =>{
            if(err){
                reject(err)
            }else{
                resolve(hash)
            }
        })
    })
}

module.exports = {
    hash
}