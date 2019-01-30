$(document).ready(function() {
  $("#highlightByTag").click(function(e) {
    let tag = $("select[name=new_tag]").val();

    $(".thought").each(function(idx, thought) {
      if ($(this).has("span[name=" + tag + "]").length) {
        $(this).addClass("selected");
      }
      e.preventDefault();
      return false;
    });
  });
});
