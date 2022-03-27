const express = require("express");
const router = express.Router();
const fs = require("fs");
const movieRoutes = require("./movieRoutes");

router.use(movieRoutes);

module.exports = router;
