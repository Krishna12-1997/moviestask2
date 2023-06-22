const data = require('../data.js');
const asyncHandler = require("express-async-handler")


const getMovies = asyncHandler(async (req, res) => {
    res.json(data)
});


module.exports =  getMovies