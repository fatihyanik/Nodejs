const express = require('express');
const { addToDo, getToDos, deleteToDo, addprogress, getProgress } = require('./models/db');
require('dotenv').config();
const path = require('path');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.post('/addtodo', (req, res) => {
    const {content} = req.body;
    console.log(req.body);
    addToDo(content).then(result => {
        res.json({error: null, id: result.insertId})
    }).catch(error => {
        res.json({error: error.message})
    })
})

app.post('/gettodos', (req, res) => {
    getToDos().then(data => {
        res.json({error: null, list: data})
    }).catch(error => {
        res.json({error: error.message})
    })
})

app.post('/mv_todo_progress', async (req, res) => {
    const todoId = req.body.id;
    const content = req.body.content;
    try {
        await deleteToDo(todoId);
        const result = await addprogress(content);
        res.json({error: null, id: result.insertId})
    } catch (error) {
        res.json({error: error.message})
    }
})
app.post('/getprogress', (req, res) => {
    getProgress().then(data => {
        res.json({error: null, list: data})
    }).catch(error => {
        res.json({error: error.message})
    })
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(port, () => {
    console.log(`application is listening to port ${port}`);
})