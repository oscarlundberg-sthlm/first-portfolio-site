$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("p").addClass("test");
    } else {
      $("p").removeClass("test");
    }
  });
});