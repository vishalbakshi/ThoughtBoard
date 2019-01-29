QUnit.test("User can assign a tag to a thought", function(assert) {
  $("input[class=thoughtCheckbox]").trigger("click");
  $("select[name=new_tag]").val($(".thought > span").attr("class"));
});
QUnit.test("User can highlight thoughts by tag", function(assert) {
  $("input[class=thoughtCheckbox]").trigger("click");
  $("select[name=new_tag]").val($(".thought > span").attr("class"));
});
