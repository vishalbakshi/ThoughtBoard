QUnit.test("User can highlight thoughts by tag", function(assert) {
  $("input[class=thoughtCheckbox]").trigger("click");
  $("select[name=new_tag]").val("0");
  let originalThoughtColor = $(".thought").css("background-color");
  $("input[name=highlight]").trigger("click");

  assert.notEqual(
    $(".thought").css("background-color"),
    originalThoughtColor,
    "Thought div with tag changes color upon clicking `Highlight Thoughts` after tag is selected"
  );
});
