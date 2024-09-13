const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = "mongodb+srv://modhu_database_sontube:ZtjBYI57W6oJWeSm@cluster0.4vtdh.mongodb.net/Modhus_chatApp"

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
