const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static("views/index.html"));

app.set("view engine", "pug");

app
  .route("/")
  .get(function(req, res) {
    res.send("Hello World!");
  })
  .post(function(req, res) {});

app.listen(8080, function() {
  console.log("Listening on 8080");
});
