"use strict";
const express = require("express");
const State = require("../models/stateModel");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/list", async (req, res) => {
  const states = await State.find({});
  res.send(states);
});

router.post("/add", (req, res) => {
  const state = new State();
  state.name = req.body.name;
  state.save((err, doc) => {
    if (!err) {
      console.log("State " + doc.name + " added");
    } else console.log("Error :" + err);
  });
});

module.exports = router;
