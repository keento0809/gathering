const mongoose = require("mongoose");

const gatheringScheme = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  capacity: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  location: {
    type: Object,
    require: true,
  },
  isFull: {
    type: Boolean,
    require: true,
  },
  host: {
    type: Array,
    default: [],
    require: true,
  },
  participants: {
    type: Array,
    default: [],
    require: true,
  },
});

module.exports = mongoose.model("Gathering", gatheringScheme);
