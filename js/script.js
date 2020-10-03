$(".navbar-nav a").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top,
    menuHeight = $('.navbar-nav').innerHeight();
    console.log(menuHeight)
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight,
    }, 500);
});
