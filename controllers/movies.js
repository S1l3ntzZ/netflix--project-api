const { movies, newMovies, actionMovies, getMovie } = require("../models/movies");

//export

exports.movies = (req, res) => {
    res.send(movies);
};

exports.newMovies = (req, res) => {
    res.send(newMovies)
};

exports.actionMovies = (req, res) => {
    res.send(actionMovies)
};

exports.getMovie = (req, res) => {
    const id = req.params.id
    const findMovie = movies.find((movie) => movie.id === id);
    res.send(findMovie)
};