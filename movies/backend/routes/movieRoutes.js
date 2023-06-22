const express = require('express');

const getMovies = require('../controller/movieController');
const router = express.Router();

router.route('/').get(getMovies);


module.exports =  router