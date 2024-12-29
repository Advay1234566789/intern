require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('MongoDB connection error:', err));
