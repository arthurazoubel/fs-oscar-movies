const express = require('express');
const router = express.Router();


router.get('/allmovies', (req, res) => {
    res.send('SENDING ALL THE MOVIES FROM THE DATABASE')
});

router.get('/:id', (req, res) => {
    res.send('GETTING SOME MOVIE FROM THE DATABASE')
});

router.post('/newmovie', (req, res) => {
    res.send('POSTING SOME MOVIE INTO THE DATABASE')
});

router.put('/:id', (req, res) => {
    res.send('UPDATING SOME MOVIE FROM THE DATABASE')
});

router.delete('/:id', (req, res) => {
    res.send('DELETING SOME MOVIE FROM THE DATABASE')
});

module.exports = router