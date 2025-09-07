const express = require('express');
const mongoose = require('mongoose');
const userStoriesRoute = require('./routes/userStories');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/user-stories', userStoriesRoute);

mongoose.connect('mongodb://localhost/agile-coaching-tool', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));