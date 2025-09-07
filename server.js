const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Agile Coaching Tool!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});