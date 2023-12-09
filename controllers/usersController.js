const User = require("../model/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) {
    return res.status(204).json({ message: "No Users Found!" });
  }
  res.json(users);
};

const getUserById = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "ID is required" });
  }

  const user = await Usere.findOne({ _id: req.params.id }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `ID: ${req.params.id} does not match` });
  }

  res.json(user);
};

module.exports = { getAllUsers, getUserById };
