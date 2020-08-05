$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 500);
});

ScrollReveal({ duration: 2000 }).reveal(".site-title-desc");
ScrollReveal({ duration: 2000 }).reveal(".skills");

$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
