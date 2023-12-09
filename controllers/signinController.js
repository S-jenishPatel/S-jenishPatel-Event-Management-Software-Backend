const User = require("../model/User");
const bcrypt = require("bcrypt");

const handleSignin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }

  const foundUser = await User.findOne({ username: username }).exec();

  if (!foundUser) {
    return res.status(401).json({ message: "User not found" });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    return res.json(foundUser);
  } else {
    return res.status(401).json({ message: "Incorrect Passsword" });
  }
};

module.exports = handleSignin;
