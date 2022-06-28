let count = 0;
$(document).on("keypress", function (e) {
  if (e.which == 13) {
    count++;
    alert(`You pressed enter ${count} times`);
  }
});
