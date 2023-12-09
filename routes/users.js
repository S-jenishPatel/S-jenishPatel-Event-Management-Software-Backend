const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../controllers/usersController");

router.route("/").get(getAllUsers);

router.route("/:id").get(getUserById);

module.exports = router;
