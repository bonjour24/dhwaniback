"use strict";
const express = require("express");
const District = require("../models/districtModel");
const mongoose = require("mongoose");
const router = express.Router();

const { forwardAuthenticated } = require("../config/auth");

router.get("/list", async (req, res) => {
  const districts = await District.find({});
  res.send(districts);
});

router.post("/add", (req, res) => {
  const dist = new District();
  dist.stateName = req.body.stateName;
  dist.districtName = req.body.districtName;
  dist.save((err, doc) => {
    if (!err) {
      console.log("District " + doc.districtName + " added");
    } else console.log("Error :" + err);
  });
});

module.exports = router;
