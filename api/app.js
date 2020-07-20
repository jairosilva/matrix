const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const repositoriosRoutes = require("./routes/repositorios");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", repositoriosRoutes);

app.listen(8080);
