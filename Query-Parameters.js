// Query Parameters

// Query parameters are key-value pairs that appear after the ? in a URL.

// They are automatically parsed by Express and available in req.query.

// Example URL: http://example.com/search?q=express&page=2

// In this URL, q=express and page=2 are query parameters that can be accessed as req.query.q and req.query.page.

const express = require('express');
const app = express();
const port = 8080;

// Route handling query parameters
app.get('/search', (req, res) => {
  // Access query parameters using req.query
  const { q, category } = req.query;
  res.send(`Search query: ${q}, Category: ${category || 'none'}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
