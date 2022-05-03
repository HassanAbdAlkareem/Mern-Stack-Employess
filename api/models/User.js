const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timesTamps: true }
);

module.exports = mongoose.model("User", userSchema);
