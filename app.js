const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('<h2>Welcome to AWS!</h2>');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
