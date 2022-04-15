// Preloader
$(window).on("load",function(){
    $(".loader-container").fadeOut(6000);
});



// Back to top button for tutorial pages

var btn = $('#buttontop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});