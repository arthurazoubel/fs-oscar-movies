const express = require('express');
const router = express.Router();


router.get('/allusers', (req, res) => {
    res.send('SENDING ALL THE USERS FROM THE DATABASE')
});

router.post('/signup', (req, res) => {
    res.send('POSTING A NEW USER INTO THE DATABASE')
});

module.exports = router