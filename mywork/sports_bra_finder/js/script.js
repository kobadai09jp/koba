
import '../../lib/slick.min.js';
import '../../lib/ofi.min';

var prev = "<div></div>";
var next = "<div></div>";


$('.js-gallerySlide').slick({
  slidesToShow: 1,
  accessibility: true,
  slidesToScroll: 1,
  centerMode: true,
  initialSlide: 0,
  centerPadding: '15%',
  arrows: true,
  prevArrow: prev,
  nextArrow: next,
  speed: 200,
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
  initialSlide: 0,
  centerMode: true,
  arrows: false,
  dots: true,
  centerMode: true,
  infinite: false,
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: '.js-gallerySlide'
});



