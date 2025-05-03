require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // To handle cross-origin requests (CORS)
app.use(express.json()); // To parse JSON requests

// MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

// Check if the MongoDB URI is valid
if (!mongoURI) {
  console.error("MongoDB URI not found. Please set the MONGODB_URI in your .env file.");
  process.exit(1); // Exit the process if the URI is missing
}

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Define the email schema
const emailSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true,
    match: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/  // Simple regex for email validation
  }
});

// Create a model for emails
const Email = mongoose.model('Email', emailSchema);

// POST route for handling email submissions
app.post('/api/emails', async (req, res) => {
  const { email } = req.body;  // Extract email from the request body
  console.log('Received email:', email);  // Log the email for debugging

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Create a new email document and save it to MongoDB
    const newEmail = new Email({ email });
    await newEmail.save();  // Save to the database

    res.status(200).json({ message: 'Email received and saved successfully' });
  } catch (err) {
    console.error('Error saving email:', err);
    res.status(500).json({ error: 'Failed to save email' });
  }
});

// Sample Route (you can update this with your actual routes)
app.get('/', (req, res) => {
  res.send('Hello from Future Coders Camp API!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
