import "../../../lib/slick.min";

/* ========================
  youtubeAPI
======================== */

$(window).load(function() {
  var ytPlayer;
  function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(
      "player", // 埋め込む場所の指定
      {
        videoId: "FrPnifijApg", // YouTubeのID
        playerVars: {
          loop: 1, //0:ループしない 1:ループする 1の場合playlist設定必須
          playlist: "FrPnifijApg", //次に流すYoutubeのID
          controls: 0, //コントローラー無し
          autoplay: 1, //オートプレイ
          showinfo: 0 //動画タイトルなど表示しない
        },
        events: {
          onReady: onPlayerReady
        }
      }
    );
  }
  function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute(); //デフォルト：mute
  }

  onYouTubeIframeAPIReady();
});



$(".js-slider").css("visibility", "hidden");
$(window).scroll(function() {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $(".js-slider").each(function() {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 100) {
      $(this).addClass("js-bottomToTop");
    }
  });
});

var prev = "<div></div>";
var next = "<div></div>";

$(".js-gallerySlide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  initialSlide: 2,
  centerPadding: "15%",
  arrows: true,
  prevArrow: prev,
  nextArrow: next,
  draggable: true,
  speed: 150,
  infinite: false,
  asNavFor: ".js-navigationSlide",
  responsive: [
    {
      breakpoint: 960, //ブレイクポイントを指定
      settings: {
        centerPadding: "0%",
        draggable: true,
        initialSlide: 2,
        arrows: true
      }
    }
  ]
});

$(".js-navigationSlide").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 2,
  centerMode: true,
  arrows: false,
  dots: false,
  speed: 150,
  centerMode: true,
  infinite: false,
  focusOnSelect: true,
  variableWidth: true,
  // centerPadding: "50%",
  asNavFor: ".js-gallerySlide",
  responsive: [
    {
      breakpoint: 960, //ブレイクポイントを指定
      settings: {
        initialSlide: 2,
      }
    }
  ]
  
});

