require('dotenv').config()
const express = require('express');
const PORT = 9000

const moviesRoutes = require('./Routes/moviesRoutes')
const usersRoutes = require('./Routes/usersRoutes')

// Creating an Express App
const app = express();



//Middlewares
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Creating routes
app.use('/movies', moviesRoutes)
app.use('/users', usersRoutes)



app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})