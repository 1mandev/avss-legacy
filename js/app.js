const footerYear = document.querySelector('#year');

const year = new Date().getUTCFullYear();
footerYear.textContent = year;

$(window).on('load', function () {
  $('#preloader-anim').fadeOut();
  $('#preloader').delay(350).fadeOut();
});