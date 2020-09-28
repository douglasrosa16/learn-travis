const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

app.set("view engine","html");

nunjucks.configure("views",{
  express: app,
  noCache: true
});

var port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return res.render("home");
});


app.listen(port);