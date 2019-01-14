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
    res.sendFile("/sandbox/views/index.html");
  })
  .post(function(req, res) {
    let formData = {};
    Object.keys(req.body).forEach(function(key) {
      if (!formData[req.body[key]]) {
        formData[req.body[key]] = [key];
      } else {
        formData[req.body[key]].push(key);
      }
    });

    Object.value;
    console.log(formData);
    res.redirect("/");
  });

app.listen(8080, function() {
  console.log("Listening on 8080");
});
