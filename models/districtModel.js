const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  stateName: { type: String, required: true },
  districtName: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("District", districtSchema);
