require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 5000;





// MongoDB Connection
mongoose.connect('mongodb+srv://advay:advay@cluster0.gsco8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
   
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Schema and Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);




// Manually Insert Data
const insertContact = async () => {
  const newContact = new Contact({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    message: 'Hello, this is a test message.',
  });

  try {
    await newContact.save();
    console.log('Contact inserted successfully:', newContact);
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting contact:', error);
    mongoose.connection.close();
  }
};

// Run insert function
insertContact();

// Routes
app.post('/api/contact', async (req, res) => {
  if(req.isAuthenticated()){
  try {
    const { name, email, phone, message } = req.body;

    // Create and save new contact
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send back success response with saved data
    res.status(201).json({
      message: 'Contact saved successfully',
      contact: newContact, // Returning the saved contact
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
  } else {
    res.status(401).send('Access denied');
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
