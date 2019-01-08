const express = require("express");

const app = express();

app.route("/").get(function(req, res) {
  res.send("Hello!");
});

app.listen(8080, function() {
  console.log("Listening on 8080");
});
