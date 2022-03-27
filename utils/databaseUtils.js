const databasePath = "./data/database.json";
const fs = require("fs");

const getAllMovies = () => {
  const json = fs.readFileSync(databasePath);
  return JSON.parse(json);
};

module.exports = {
  getAllMovies,
};
