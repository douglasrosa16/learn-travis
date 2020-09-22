const express = require('express');

const app = express();

app.get("/", (req, res) => {
  return res.send("Learning Travis 2");
})


app.listen(4444);