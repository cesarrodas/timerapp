const express = require('express');
const app = new express();
const port = 7000;

app.use(express.static("./dist"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

