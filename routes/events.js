const express = require("express");
const router = express.Router();
const {
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} = require("../controllers/eventsController");

router
  .route("/")
  .get(getAllEvents)
  .post(createNewEvent)
  .put(updateEvent)
  .delete(deleteEvent);

router.route("/:id").get(getEventById);

module.exports = router;
