// We are using Slick.js for the images
// https://kenwheeler.github.io/slick/
$(document).ready(function(){
  $(".venice-photos").not('.slick-initialized').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    dots:true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '80px',
    focusOnSelect: true,
    swipeToSlide: true,
    respondTo: 'slider',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '80px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
        }
      }
    ]
  });
});
