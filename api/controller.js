"use strict";
const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const State = require("../models/stateModel");
const Child = require("../models/childModel");
const router = express.Router();

const { forwardAuthenticated } = require("../config/auth");

router.get("/", (req, res) => {
  res.send("Working");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/log" }),
  function (req, res) {
    res.send("Logged In");
    console.log("Logged in");
  }
);

router.get("/users", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }).then((user) => {
    if (user) res.send("Already registered");
    else {
      const user = new User();
      user.username = username;
      user.password = password;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) console.log(err);
          user.password = hash;
          user.save().then(console.log("User Added"));
          res.send(user);
        });
      });
    }
  });
});

// async function createUser() {
//   const user = new User();
//   const password = await bcrypt.hash("hello123", 10);
//   user.username = "Abhay";
//   user.password = password;
//   console.log(user);
//   user.save((err, doc) => {
//     if (!err) {
//       console.log("Signup successful");
//     } else {
//       console.log("error in Signing up -> " + err);
//     }
//   });
// }

module.exports = router;
