$(document).ready(function(){
  $('.pickup-content-slick').slick({
    arrows: false,
    autoplay: false,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '140px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: '70px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '70px'
        }
      }
    ]
  });
});