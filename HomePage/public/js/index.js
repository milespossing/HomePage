$(document).ready(function() {
  $(window).scroll(function(e) {
    var s = $(window).scrollTop(),
      opacityVal = (s / 200);
    let v = s > 60 ? 0 : 60 - s;

    $('.scroll-opacity').css('opacity', opacityVal);
    $('.scroll-translate').css('transform','translate(0,'+v+'px)');
  });
});