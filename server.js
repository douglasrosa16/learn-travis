const express = require('express');

const app = express();

var porta = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return res.send("Learning Travis 2");
})


app.listen(porta);