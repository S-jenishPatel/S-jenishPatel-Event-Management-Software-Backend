const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../controllers/usersController");

router.route("/").get(getAllUsers);

router.route("/:username").get(getUserById);

module.exports = router;
