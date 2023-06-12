$( document ).ready(function() {
  $('.price__row').slick({
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });
});
  