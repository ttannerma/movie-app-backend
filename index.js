const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const bodyParser = require("body-parser");
const routes = require("./routes/routes");

// Initialize .env variables
dotenv.config();

// Initialize app
const app = express();

// Extract body portion of incoming requests and expose it to req.body
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
