const User = require("../model/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { username, password, name, mobile, email, imageURL } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }

  const duplicate = await User.findOne({ username: username }).exec();
  if (duplicate) {
    return res.status(409).json({ message: "Username already exists" });
  }

  try {
    const hashedPwd = await bcrypt.hash(password, 10);

    const result = await User.create({
      username: username,
      password: hashedPwd,
      name: name,
      mobile: mobile,
      email: email,
      imageURL: imageURL,
    });
    console.log(result);

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = handleNewUser;
