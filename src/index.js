const express = require('express')
const mongoose = require('mongoose')
const routeFolder = require('./routeFolder')
const routeOrder = require('./routeOrder')

const app = express()
app.use(express.json());
app.use('/folder',routeFolder)
app.use('/order', routeOrder)

// Database and server connection
mongoose
    .connect('mongodb://localhost:27017/task', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server Running")
        })
    })
    .catch(err => {
        console.log(err.message)
    })
