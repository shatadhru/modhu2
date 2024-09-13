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
    process.exit(1); // Exiting the process on connection error
  });

module.exports = mongoose;
