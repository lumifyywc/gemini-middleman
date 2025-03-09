// Install Express via the Replit package manager or add it to your package.json

const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const app = express();

const cors = require('cors');

app.use(cors());

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Define an endpoint that forwards the POST request to Google Gemini
app.post('/', async (req, res) => {
  try {
    console.log("hello");
    // Replace with the actual Google Gemini endpoint URL
    const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC_I38Yz4t4R8Ba3On13F2rolTv_f9Rt6w';

    // Forward the request data; add your authentication headers as needed
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    
    // Parse the JSON response from Google Gemini
    const data = await response.json();

    // Send the received data back to the client
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error forwarding the request:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Start the server on the designated port
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

