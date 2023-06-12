
$('.price__row').slick({
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 862,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });