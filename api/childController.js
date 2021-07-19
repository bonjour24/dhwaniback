"use strict";
const express = require("express");
const Child = require("../models/childModel");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/list", async (req, res) => {
  const children = await Child.find({});
  res.send(children);
});

router.post("/add", (req, res) => {
  const child = new Child();
  child.name = req.body.name;
  child.father = req.body.father;
  child.mother = req.body.mother;
  let date = req.body.dob;
  let parts = date.split("-");
  let mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  child.dob = mydate.toDateString();
  child.state = req.body.state;
  child.sex = req.body.sex;
  child.district = req.body.district;
  child.save((err, doc) => {
    if (!err) {
      console.log("Child " + doc.name + " added");
    } else console.log("Error :" + err);
  });
});

module.exports = router;
