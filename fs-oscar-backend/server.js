require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const PORT = 9000



const moviesRoutes = require('./Routes/moviesRoutes')
const usersRoutes = require('./Routes/usersRoutes')

// Creating an Express App
const app = express();



//Middlewares
app.use(express.json())


/* app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) */

// Creating routes
app.use('/movies', moviesRoutes)
app.use('/users', usersRoutes)


// Connect to the DB
mongoose.connect(process.env.MONGO_URL).
    then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to the DB')
            console.log(`Listening on PORT ${PORT}`)
        })
    }). 
    catch((error) => {
        console.log(error)
    })