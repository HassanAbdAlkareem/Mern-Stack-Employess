const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

// my Routes
const routeEmployee = require("./routes/Employee");
const routeAuthUser = require("./routes/authUser");

// middle ware
app.use("/images", express.static(path.join(__dirname, "./images/")));
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://HassanAbdAlkareem:hassan1234@hassanemployees.5hwup.mongodb.net/Employees?retryWrites=true&w=majority"
  )
  .then(() => console.log("db is runinng"))
  .catch((error) => console.log("Some thing is wrong" + error));

// use my routes
app.use("/api/employees", routeEmployee);
app.use("/api/auth", routeAuthUser);

// build server
app.listen(process.env.PORT || 5000, () => {
  console.log("server runing on port");
});
