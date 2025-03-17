// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";
const cors = require('cors'); //new

const api = express();

api.use(express.json());
app.use(cors()); //new

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));




router.post('/app', async (req, res) => {
    try {
      console.log("hello from router");
      const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC_I38Yz4t4R8Ba3On13F2rolTv_f9Rt6w';
  
      // Dynamic import for node-fetch (ESM module)
      const fetch = (...args) =>
        import('node-fetch').then(({ default: fetch }) => fetch(...args));
  
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Error forwarding the request:', error);
      res.status(500).json({ error: error.message });
    }
  });


api.use("/api/", router);

export const handler = serverless(api);
