const express = require('express');
const app = new express();
const path = require('path');
const port = 7000;

app.use(express.static(path.resolve(__dirname, 'dist')))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

