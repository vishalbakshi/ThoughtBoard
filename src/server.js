const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static("views/index.html"));

app.set("view engine", "pug");

// Placeholders for a database
// thoughts holds thoughtID: thought text pairs
// categories holds categoryID: category text pairs
// Both need starting points and counters for ID
let thoughts = {};
var categories = {};
let thoughtID = 0;
let categoryID = 0;

app
  .route("/")
  .get(function(req, res) {
    res.render("index3", { thoughts: thoughts, categories: categories });
  })
  .post(function(req, res) {
    /*
    Object.keys(req.body).forEach(function(key) {
      if (formData[req.body[key]] === undefined) {
        let newObj = {};
        newObj[key] = thoughts[key];
        formData[req.body[key]] = newObj;
      } else {
        formData[req.body[key]][key] = thoughts[key];
      }
    });
    */
    res.render("index3", { thoughts: thoughts, categories: categories });
  });

app.route("/newthought").post(function(req, res) {
  thoughts["thought" + thoughtID] = [req.body.thought];
  thoughtID++;
  res.render("index3", { thoughts: thoughts, categories: categories });
});

app.route("/newcategory").post(function(req, res) {
  categories["category" + categoryID] = req.body.category;
  categoryID++;
  res.render("index3", { thoughts: thoughts, categories: categories });
});

app.route("/sort").post(function(req, res) {
  console.log(req.body["new-category"]);
  for (let key in req.body) {
    // If a key of the request is a thoughtID
    // then either push the category on if none currenty exists
    // or replace the current category with the new one
    if (thoughts[key] !== undefined) {
      if (thoughts[key][1] !== undefined) {
        thoughts[key][1] = categories[req.body["new_category"]];
      } else {
        thoughts[key].push(categories[req.body["new_category"]]);
      }
    }
  }
  console.log(thoughts);
  res.render("index3", { thoughts: thoughts, categories: categories });
});

app.route("/deletethoughts").post(function(req, res) {
  thoughts = {};
  res.render("index3", { thoughts: thoughts, categories: categories });
});

app.route("/deletecategories").post(function(req, res) {
  categories = {};
  res.render("index3", { thoughts: thoughts, categories: categories });
});

app.listen(8080, function() {
  console.log("Listening on 8080");
});
