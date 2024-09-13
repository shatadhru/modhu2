const express = require("express");
const app = express();

const path = require("path");
const User = require("./models/db");
require("dotenv").config();

const routers = require("./routes/main.routes");


app.use(express.json()); // to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

app.use(routers)

app.use(express.static("public"));

const mongoose = require("mongoose");
require("dotenv").config();
const dbURL = process.env.SONTU_DB_MODHU;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to Modhus Server");
  })
  .catch((err) => {
    console.error("Failed to connect to Modhus Server", err);
    process.exit(1);
  });

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./public/404.html"));
});


module.exports = app;
