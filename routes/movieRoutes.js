const express = require("express");
const movieRoutes = express.Router();
const {
  getAllMovies,
  addSingleMovie,
} = require("../controllers/databaseControllers");

movieRoutes.get("/movies", getAllMovies);
movieRoutes.post("/movie", addSingleMovie);

module.exports = movieRoutes;
