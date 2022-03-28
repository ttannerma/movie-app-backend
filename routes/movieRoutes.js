const express = require("express");
const movieRoutes = express.Router();
const { getAllMovies, addSingleMovie } = require("../utils/databaseUtils");

movieRoutes.get("/movies", getAllMovies);
movieRoutes.post("/movie", addSingleMovie);

module.exports = movieRoutes;
