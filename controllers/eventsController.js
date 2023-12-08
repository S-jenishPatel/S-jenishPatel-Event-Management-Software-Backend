const Event = require("../model/Event");

const getAllEvents = async (req, res) => {
  const events = await Event.find();
  if (!events) {
    return res.status(204).json({ message: "No Events Found!" });
  }
  res.json(events);
};

const createNewEvent = async (req, res) => {
  if (!req?.body?.title || !req?.body?.description) {
    return res
      .status(400)
      .json({ message: "Title and Description are required" });
  }

  try {
    const result = await Event.create({
      title: req.body.title,
      description: req.body.description,
      typeOfEvent: req.body.typeOfEvent,
      date: req.body.date,
      maxMembers: req.body.maxMembers,
      imageURL: req.body.imageURL,
      teams: req.body.teams,
    });

    res.status(201).json({ success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateEvent = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID is required" });
  }

  const event = await Event.findOne({ _id: req.body.id }).exec();

  if (!event) {
    return res
      .status(204)
      .json({ message: `ID: ${req.body.id} does not match` });
  }

  if (req.body?.title) event.title = req.body.title;
  if (req.body?.description) event.description = req.body.description;
  if (req.body?.typeOfEvent) event.typeOfEvent = req.body.typeOfEvent;
  if (req.body?.date) event.date = req.body.date;
  if (req.body?.maxMembers) event.maxMembers = req.body.maxMembers;
  if (req.body?.imageURL) event.imageURL = req.body.imageURL;
  if (req.body?.teams) event.teams = req.body.teams;

  const result = await event.save();
  res.json({ success: true, result: result });
};

const deleteEvent = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID is required" });
  }

  const event = await Event.findOne({ _id: req.body.id }).exec();

  if (!event) {
    return res
      .status(204)
      .json({ message: `ID: ${req.body.id} does not match` });
  }

  const result = await event.deleteOne({ _id: req.body.id });
  res.json({ success: true, result: result });
};

const getEventById = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "ID is required" });
  }

  const event = await Event.findOne({ _id: req.params.id }).exec();

  if (!event) {
    return res
      .status(204)
      .json({ message: `ID: ${req.params.id} does not match` });
  }

  res.json(event);
};

module.exports = {
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent,
  getEventById,
};
