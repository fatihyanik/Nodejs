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

/**
 * check if password is right
 * @param {String} originalPass the original entered pass
 * @param {String} hash the hashed password from database
 * @returns promise with true or false value
 */
const checkPassword = (originalPass, hash) => {
  /*   return new Promise ((resolve, reject) =>{
        bcrypt.compare(originalPass, hash,(err, result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    }) */
    return bcrypt.compare(originalPass, hash)
}

module.exports = {
    hash,
    checkPassword
}