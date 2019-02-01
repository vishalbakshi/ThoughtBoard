QUnit.test("User can highlight thoughts by tag", function(assert) {
  // select the test tag from the tag dropdown
  $("select[name=new_tag]").val("0");

  // capture the original thought div color to test after highlight
  let originalThoughtColor = $(".thought").css("background-color");

  // click on element "Highlight Thoughts"
  $("input[name=highlight]").trigger("click");

  // test if color of thought div changed
  assert.notEqual(
    $(".thought").css("background-color"),
    originalThoughtColor,
    "Thought div with tag changes color upon clicking `Highlight Thoughts` after tag is selected"
  );
});

QUnit.test(
  "Highlighted thought gets un-highlighted if it does not have a tag the user wants to highlight",
  function(assert) {
    // Define two tags for testing
    let tag0 = "0";
    let tag1 = "1";

    // Select first tag to highlight
    $("select[name=new_tag]").val(tag0);

    // capture the original thought div color to assert after highlight
    let originalThoughtColor = $("span[name=" + tag0 + "]")
      .parent("div")
      .css("background-color");

    // click on element "Highlight Thoughts"
    $("input[name=highlight]").trigger("click");

    // select the next tag
    $("select[name=new_tag]").val(tag1);

    // click on element "Highlight Thoughts"
    $("input[name=highlight]").trigger("click");
    let finalThoughtColor = $("span[name=" + tag0 + "]")
      .parent("div")
      .css("background-color");

    assert.notEqual(
      finalThoughtColor,
      originalThoughtColor,
      "Highlighted thought gets un-highlighted if it does not have a tag the user wants to highlight"
    );

    // test if
  }
);
