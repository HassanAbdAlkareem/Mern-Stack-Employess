const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    salary: { type: String },
    birthday: { type: String },
    imageEmployee: {
      type: String,
      // default:
      // "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F99%2FSample_User_Icon.png&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&tbnid=SBUlgl2FWFFpQM&vet=12ahUKEwiTx7GCvtz2AhUP7rsIHWk3C04QMygGegUIARDBAQ..i&docid=vEf3EbQkmklkOM&w=512&h=512&q=image%20user&ved=2ahUKEwiTx7GCvtz2AhUP7rsIHWk3C04QMygGegUIARDBAQ"
    },
    jobTitle: { type: String },
    country: { type: String },
    city: { type: String },
  },
  { timesTamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
