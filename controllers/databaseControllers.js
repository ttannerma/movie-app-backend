const databasePath = "./data/database.json";
const fs = require("fs");

const getAllMovies = (req, res) => {
  try {
    fs.readFile(databasePath, (err, moviesBuffer) => {
      res.send(JSON.parse(moviesBuffer));
    });
  } catch {
    res.status(500).send("Error while getting all movies");
  }
};

const addSingleMovie = (req, res) => {
  try {
    const newMovie = req.body;
    // Read all data from file
    fs.readFile(databasePath, (err, moviesBuffer) => {
      // Convert buffer to json
      const allMovies = JSON.parse(moviesBuffer);
      // Create new list which includes existing movies and new movie
      const updatedMovies = [...allMovies, newMovie];

      const stringifiedData = JSON.stringify(updatedMovies);
      // Write updated movies to file
      fs.writeFile(databasePath, stringifiedData, () => {
        res.status(200).send("Succesfully added movie");
      });
    });
  } catch {
    res.status(500).send("Error while adding movie");
  }
};

const deleteSingleMovie = () => {};

module.exports = {
  getAllMovies,
  addSingleMovie,
};
