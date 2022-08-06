const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  joinGathering: {
    type: Array,
    default: [],
    require: false,
  },
  hostGathering: {
    type: Array,
    default: [],
    require: false,
  },
});

module.exports = mongoose.model("User", userScheme);
