const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static("views/index.html"));

app.set("view engine", "pug");

let thoughts = {};

app
  .route("/")
  .get(function(req, res) {
    //let thoughts = {};
    console.log("GET received");
    res.render("index2", { thoughts: thoughts });
  })
  .post(function(req, res) {
    console.log(req.body);
    if (!thoughts[req.body["category"]]) {
      thoughts[req.body["category"]] = [req.body["thought"]];
    } else {
      thoughts[req.body["category"]].push(req.body["thought"]);
    }
    console.log(thoughts);
    res.redirect("/");
  });

app.listen(8080, function() {
  console.log("Listening on 8080");
});
