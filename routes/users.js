const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserByUsername,
} = require("../controllers/usersController");

router.route("/").get(getAllUsers);

router.route("/:username").get(getUserByUsername);

module.exports = router;
