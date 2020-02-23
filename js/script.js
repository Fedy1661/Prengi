$(document).ready(function () {
  $('.countries__slider').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    }]
  });
});