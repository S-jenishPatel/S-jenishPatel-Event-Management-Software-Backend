const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  typeOfEvent: {
    type: String,
  },
  date: {
    type: String,
  },
  maxMembers: {
    type: Number,
  },
  imageURL: {
    type: String,
  },
  teams: {
    type: [[{ type: String }]],
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
