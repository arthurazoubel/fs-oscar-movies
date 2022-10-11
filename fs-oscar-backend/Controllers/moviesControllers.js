const moviesModel = require("../Models/moviesModel");

// GET ALL MOVIES
const gettAllMovies = async (req, res) => {
    const allMovies = await moviesModel.find({}).sort({title: -1})
    try {
        res.status(200).json(allMovies)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}


// GET A SINGLE MOVIE
const getSingleMovie = async (req, res) => {
    const {id} = req.params
    const movie = await moviesModel.findById(id)

    if(!movie) {
        return res.status(400).jason({error: 'This movie is not on our database'})
    } else {
        try {
            res.status(200).json(movie)
        }
        catch (error) {
            res.status(400).json({error: error.message})
        } 
    }
}

// ADD A MOVIE
const addNewMovie = async (req, res) => {
    const {title, director, length, storyline} = req.body;
    try {
        const newMovie = await moviesModel.create({title, director, length, storyline});
        res.status(200).json(newMovie)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// UPDATE A MOVIE
const updateMovie = async (req, res) => {
    res.send('UPDATING SOME MOVIE FROM THE DATABASE')
}

// DELETE A MOVIE

const deleteMovie = async (req, res) => {
    res.send('DELETING SOME MOVIE FROM THE DATABASE')
}


module.exports = {gettAllMovies, getSingleMovie, addNewMovie, updateMovie, deleteMovie}