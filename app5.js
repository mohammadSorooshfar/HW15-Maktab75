$("button").on("click", function () {
  $("button").toggleClass("btn-red");
  if ($("button").hasClass("btn-red")) {
    $("button").text("Log Out");
  } else {
    $("button").text("Log In");
  }
});
