const express = require('express');

const app = express();

app.get("/", (req, res) => {
  return res.send("Learning Travis");
})


app.listen(4444);