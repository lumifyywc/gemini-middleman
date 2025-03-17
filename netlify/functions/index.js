
// // app.js

// const express = require('express');
// const serverless = require('serverless-http');
// const fetch = (...args) =>
//   import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const cors = require('cors');

// const app = express();


// app.use(cors());
// app.use(express.json());

// // Define a POST endpoint that forwards the request to Google Gemini
// app.post('/.netlify/functions/app', async (req, res) => {
//   try {
//     console.log("hello");
//     // Replace with the actual Google Gemini endpoint URL and ensure your API key is correct
//     const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC_I38Yz4t4R8Ba3On13F2rolTv_f9Rt6w';

//     // Forward the request data; add your authentication headers as needed
//     const response = await fetch(geminiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(req.body)
//     });
    
//     // Parse and send the JSON response from Google Gemini back to the client
//     const data = await response.json();
//     res.status(response.status).json(data);
//   } catch (error) {
//     console.error('Error forwarding the request:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Define a simple GET endpoint for testing purposes.
// app.get('/', (req, res) => {
//   res.send('Server is up and running!');
// });

// // Export the serverless handler for deployment.
// // The serverless-http package wraps the Express app so it can be used as a serverless function.
// module.exports.handler = serverless(app);

//app.js

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("App is running..");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

