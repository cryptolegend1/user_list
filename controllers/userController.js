"user strict";
require("dotenv").config();
let User = require("../models/userModel");

exports.add = function (req, res, next) {
  let user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch(next);
};

exports.getlist = function (req, res, next) {
  console.log("ASDF");
  User.find({}, (err, users) => {
    res.json(users);
  });
};
