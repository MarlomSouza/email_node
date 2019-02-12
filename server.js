var express = require("express");

var app = express();
app.use(express.static('public'));
app.listen(3000, function() {
  console.log("Express Started on Port 3000");

  app.get("/", function(req, res) {
    res.sendfile("teste.html");
  });
});
