const express = require('express');
const path = require('path');
require('dotenv').config();
// import express-fileupload npm library
const fileUpload = require('express-fileupload');
const { insertImage, updateUrl, getImages } = require('./models/db');
const app = express();


app.use(express.urlencoded({extended: false}))
app.use(express.json());

// use express-fileupload as a middleware
app.use(fileUpload({
    limits: {fileSize: 2 * 1024 * 1024},
    abortOnLimit: true
}))
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index');
})
// app.POST('/savedata', (req, res) => {
//     console.log(req.body);
//     console.log(req.files);
//     // save the file inside public folder
//     // mv method to save the file in some folder in our application directory
//     req.files.userImage.mv(path.join(__dirname, 'public', req.files.userImage.name))
//     .then(() => {
//         res.json('done')
//     }).catch(error => {
//         res.json(error.message)
//     })
// })


app.post('/savedata', (req, res) => {
    const {name, category, description} = req.body;
    const image = req.files.file;
    insertImage(name, category, description ).then((result) => {
        // get file extension
        const fileExtension = image.name.split('.').pop();
        // save image file to uploads folder
        image.mv(path.join(__dirname, 'public','uploads', `${result._id}.${fileExtension}`)).then(() => {
            updateUrl(result._id, `/uploads/${result._id}.${fileExtension}`).then(() => {
                res.json('done')
            }).catch(error => {
                res.json(error.message)
            })
        }).catch(error => {
            res.json(error.message)
        })
        // mv will work even if you did not call the promise
        // const promise1 = image.mv(path.join(__dirname, 'public','uploads', `${result._id}.${fileExtension}`))
        // const promise2 = updateUrl(result._id, `/uploads/${result._id}.${fileExtension}`)
        // Promise.all([promise1, promise2]).then(() => {
        //     res.json('done')
        // }).catch(errors => {
        //     res.json(errors)
        // })


    }).catch(error => {
        res.json(error.message)
    })
})

app.get('/images', async (req, res) => {
    try {
        const data = await getImages()
        res.render('images', {data})
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})