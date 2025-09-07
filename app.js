const express = require('express');
const mongoose = require('mongoose');
const userStoriesRoute = require('./routes/userStories');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/user-stories', userStoriesRoute);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/agile-coaching-tool';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));