const User = require("../model/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) {
    return res.status(204).json({ message: "No Users Found!" });
  }
  res.json(users);
};

const getUserByUsername = async (req, res) => {
  if (!req?.params?.username) {
    return res.status(400).json({ message: "ID is required" });
  }

  const user = await Event.findOne({
    username: req.params.username,
  }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `ID: ${req.params.username} does not match` });
  }

  res.json(user);
};

module.exports = { getAllUsers, getUserByUsername };
