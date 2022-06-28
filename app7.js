$("button").on("click", function () {
  $("div").slideToggle("fast");
  $("button").text() == "open"
    ? $("button").text("close")
    : $("button").text("open");
});
