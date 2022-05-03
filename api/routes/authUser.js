const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const token = jwt.sign({ id: user._id }, "PRIVATE_KEY");
    await user.save();
    res.status(200).send({ data: user, token: token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//
module.exports = router;
