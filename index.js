const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

// Initialize .env variables
dotenv.config();

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
