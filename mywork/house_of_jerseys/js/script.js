import '../../../LPComponent/_ukLocalNavigation';
import '../../../lib/owl.carousel';
import '../../../lib/ofi.min';
import '../../../lib/slick.min';
import '../../../lib/jquery.magnific-popup.min';


$(".js-carousel").owlCarousel({
  loop: false,
  nav: true,
  navText: [,],
  responsive: {
    0: {
      items: 1,
      stagePadding:50,
      margin: 1,
      dotsEach: true
    },
    600: {
      items: 3,
    }
  }
});

var prev = "<div></div>";
var next = "<div></div>";


$('.js-gallerySlide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  initialSlide: 1,
  centerPadding: '15%',
  arrows: true,
  prevArrow: prev,
  nextArrow: next,
  speed: 150,
  infinite: false,
  asNavFor: '.js-navigationSlide',
  responsive: [{
    breakpoint: 960,  //ブレイクポイントを指定
    settings: {
      centerPadding: '12%',
      arrows: false,
    }
  }]
});

$('.js-navigationSlide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: true,
  arrows: false,
  dots: true,
  centerMode: true,
  infinite: false,
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: '.js-gallerySlide'
});

$(document).on('click', '.js-popupMovie', function (e) {
  e.preventDefault();
  $.magnificPopup.open({
    items: {
      src: $(this).attr('href')
    },
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 150,
    preloader: false,
    fixedContentPos: true
  });
});
