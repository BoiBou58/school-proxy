const express = require('express');
const request = require('request');
const app = express();

// Proxy endpoint
app.use('/', (req, res) => {
  const url = req.query.url; // Get the URL to proxy from the query string
  if (!url) {
    return res.status(400).send('URL parameter is required');
  }

  // Forward the request to the target URL
  request(url).pipe(res);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
