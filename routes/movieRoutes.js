const express = require("express");
const movieRoutes = express.Router();
const { getAllMovies } = require("../utils/databaseUtils");

movieRoutes.get("/movies", (req, res) => {
  const movies = getAllMovies();
  res.send(movies);
});

module.exports = movieRoutes;
