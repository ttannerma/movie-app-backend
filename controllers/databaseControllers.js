const databasePath = "./data/database.json";
const fs = require("fs");

const getAllMovies = (req, res) => {
  try {
    fs.readFile(databasePath, (err, moviesBuffer) => {
      res.send(JSON.parse(moviesBuffer));
    });
  } catch (err) {
    res.status(500).send(err);
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
        // Send 200 response
        res.status(200).send({});
      });
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllMovies,
  addSingleMovie,
};
