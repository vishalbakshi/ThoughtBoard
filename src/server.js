const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static("views/index.html"));
app.use(express.static("public"));
app.set("view engine", "pug");

// Placeholders for a database
// thoughts holds thoughtID: thought text pairs
// tags holds tagID: tag text pairs
// Both need starting points and counters for ID

// { thoughtID: thought}
let thoughts = {};

// { tagID: tag }
var tags = {};

let thoughtID = 0;
let tagID = 0;

app
  .route("/")
  .get(function(req, res) {
    res.render("index", { thoughts: thoughts, tags: tags });
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
    res.render("index", { thoughts: thoughts, tags: tags });
  });

app.route("/newthought").post(function(req, res) {
  thoughts["thought" + thoughtID] = [req.body.thought];
  thoughtID++;
  console.log(thoughts);
  res.render("index", { thoughts: thoughts, tags: tags });
});

app.route("/newtag").post(function(req, res) {
  tags["tag" + tagID] = req.body.tag;
  tagID++;
  res.render("index", { thoughts: thoughts, tags: tags });
});

app.route("/sort").post(function(req, res) {
  console.log(req.body["new-tag"]);
  for (let key in req.body) {
    // If a key of the request is a thoughtID
    // then either push the tag on if none currenty exists
    // or replace the current tag with the new one
    if (thoughts[key] !== undefined) {
      if (thoughts[key][1] !== undefined) {
        thoughts[key][1] = tags[req.body["new_tag"]];
      } else {
        thoughts[key].push(tags[req.body["new_tag"]]);
      }
    }
  }
  console.log(thoughts);
  res.render("index", { thoughts: thoughts, tags: tags });
});

app.route("/addtag").post(function(req, res) {
  console.log(req.body["new-tag"]);
  // If a key of the request is a thoughtID
  // then push the tag into thoughts array
  for (let key in req.body) {
    if (thoughts[key] !== undefined) {
      if (thoughts[key][1] === undefined) {
        thoughts[key][1] = [tags[req.body["new_tag"]]];
      } else {
        thoughts[key][1].push(tags[req.body["new_tag"]]);
      }
    }
  }
  console.log(thoughts);
  console.log(tags);
  res.render("index", { thoughts: thoughts, tags: tags });
});

app.route("/deletethoughts").post(function(req, res) {
  thoughts = {};
  res.render("index", { thoughts: thoughts, tags: tags });
});

app.route("/deletetags").post(function(req, res) {
  tags = {};
  res.render("index", { thoughts: thoughts, tags: tags });
});

app.listen(8080, function() {
  console.log("Listening on 8080");
});
