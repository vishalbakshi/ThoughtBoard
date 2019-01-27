$(document).ready(function() {
  $("#highlightByTag").click(function(e) {
    e.preventDefault();
    let tagClass = "." + $("#selectTag").val();
    $(tagClass).addClass("selected");
  });
});
