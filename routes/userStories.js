const express = require('express');
const UserStory = require('../models/UserStory');
const router = express.Router();

// Create a new user story
router.post('/', async (req, res) => {
  const userStory = new UserStory(req.body);
  try {
    const savedStory = await userStory.save();
    res.status(201).send(savedStory);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all user stories
router.get('/', async (req, res) => {
  try {
    const stories = await UserStory.find();
    res.send(stories);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;