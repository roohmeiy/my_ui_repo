const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
  res.send('Hello from Node.js demo app!!!!!!!!!!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3500`);
});
