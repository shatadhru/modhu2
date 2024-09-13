const mongoose = require("mongoose");

// Define the user schema without `re_password`
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
