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

let formData = {};
app
  .route("/")
  .get(function(req, res) {
    //res.sendFile("/sandbox/views/index.html");
    res.render("index", { formData: formData });
  })
  .post(function(req, res) {
    Object.keys(req.body).forEach(function(key) {
      if (formData[req.body[key]] === undefined) {
        let newObj = {};
        newObj[key] = thoughts[key];
        formData[req.body[key]][key] = thoughts[key];
      } else {
        if (formData[req.body[key]][key] === undefined) {
          formData[req.body[key]][key] = thoughts[key];
        }
      }
    });
    console.log(formData);
    //res.redirect("/");
    res.render("index", { formData: formData });
  });

app.listen(8080, function() {
  console.log("Listening on 8080");
});
