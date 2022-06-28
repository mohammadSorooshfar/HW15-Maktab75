function blink() {
  $("p").fadeOut(500);
  $("p").fadeIn(500);
}
setInterval(blink, 1200);
