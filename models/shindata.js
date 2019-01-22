const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shindataSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Shindata = mongoose.model("Shindata", shindataSchema);

module.exports = Shindata;
