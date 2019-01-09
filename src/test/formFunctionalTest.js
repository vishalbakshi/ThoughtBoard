var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var Mocha = require("mocha");
var mocha = new Mocha({ ui: "tdd" });

chai.use(chaiHttp);

test("POST request responds with correct data", function(done) {
  chai
    .request("http://localhost:8080")
    .post("/")
    .type("form")
    .send({
      thought: "test_thought",
      category: "test_category"
    })
    .end(function(err, res) {
      assert.equal(res.status, 200, "Response status should be 200");
      assert.include(res.text, "test_thought");
      assert.include(res.text, "test_category");
      done();
    });
});
