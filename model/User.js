const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "Guest",
  },
  mobile: {
    type: Number,
  },
  email: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  eventsParticipating: {
    type: [{ type: String }],
  },
});

module.exports = mongoose.model("User", userSchema);
