const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static("views/index.html"));

app.set("view engine", "pug");
let thoughts = {
  thought1_id: "Thought 1",
  thought2_id: "Thought 2",
  thought3_id: "Thought 3",
  thought4_id: "Thought 4"
};

var categories = {
  category1: "Category 1",
  category2: "Category 2",
  category3: "Category 3"
};

let formData = {};
app
  .route("/")
  .get(function(req, res) {
    console.log(categories);
    //res.sendFile("/sandbox/views/index.html");
    res.render("index", { formData: formData, categories: categories });
  })
  .post(function(req, res) {
    let formData = {};
    Object.keys(req.body).forEach(function(key) {
      console.log(req.body[key]);
      if (formData[req.body[key]] === undefined) {
        let newObj = {};
        newObj[key] = thoughts[key];
        formData[req.body[key]] = newObj;
      } else {
        formData[req.body[key]][key] = thoughts[key];
      }
    });
    console.log(formData);
    //res.redirect("/");
    res.render("index", { formData: formData, categories: categories });
  });

app.listen(8080, function() {
  console.log("Listening on 8080");
});
