$(document).ready(function() {
  // un-highlight all thoughts that are not selected

  $("#highlightByTag").click(function(e) {
    let tag = $("select[name=new_tag]").val();
    $(".thought").each(function(idx, thought) {
      if (!$(this).has("span[name=" + tag + "]").length) {
        $(this).removeClass("selected");
      } else {
        $(this).addClass("selected");
      }
      e.preventDefault();
    });
  });
});
