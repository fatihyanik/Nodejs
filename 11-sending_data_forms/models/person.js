const fs = require('fs');
const path = require('path');

const getAllPersons = () =>{
    return new Promise((resolve, reject) =>{
        fs.readFile(path.join(__dirname, "../data/persons.json"), (error, data)=>{
            if(error){
                reject(error)
            }else{
                resolve(JSON.parse(data.toString()))
            }
        })
    })
}

const getPersonById = id =>{
    return new Promise((resolve,reject)=>{
        getAllPersons().then(data=>{
            let person = data.find(d=>d.id == id)
            resolve(person)
        }).catch(error=>{
            reject(error)
        })
    }) 
}


module.exports = {getAllPersons, getPersonById}