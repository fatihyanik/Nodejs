const mongoose = require('mongoose');
require('dotenv').config()
// get connection string from dotenv file
const connectionString = process.env.CON;
// build schema for images files
const imageSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    url: String
})
// create image modal from mongoose
const Image = mongoose.model('Image', imageSchema);

// create a method to connect to database
const connect = () => {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve();
        } else {
            mongoose.connect(connectionString, {
                 useNewUrlParser: true, 
                 useUnifiedTopology: true 
                }).then(() => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
        }
    })
}

// insert new image methode
const insertImage = (name, category, description) => {
    
    return new Promise((resolve, reject) => {
        connect().then(() => {
        const newImage = new Image({
            name: name,
            category: category,
            description: description,
            url: ''
        })
        newImage.save().then(() => {
            resolve(newImage)
        }).catch(error => {
            reject(error)
        })
    }).catch(error => {
        reject(error)
    })
    })
}

const updateUrl = (id, url) => {
    return new Promise((resolve, reject) => {
        connect().then(() => {
        Image.updateOne({_id: id}, {$set: {url: url}}).then(() => {
            resolve()
        }).catch(error => {
            reject(error)
        })
    }).catch(error => {
        reject(error)
    })
    })
}

const getImages = async () => {
    await connect();
    return await Image.find();
}

module.exports = {
    insertImage,
    updateUrl,
    getImages
}
