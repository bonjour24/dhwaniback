const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sex: { type: String, required: true },
  dob: { type: String, required: true },
  father: { type: String, required: true },
  mother: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
});

module.exports = mongoose.model("Child", childSchema);
