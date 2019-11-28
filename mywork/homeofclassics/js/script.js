import "../../../lib/slick.min";
import "../../../lib/jquery.magnific-popup.min";

(function(w, d) {
  // ローディングgb、アイコンを表示
  var h = $(w).height();
  $(".js-loader-bg,.js-lp-loader")
    .height(h)
    .css("display", "block");

  $(w).load(function() {
    //全ての読み込みが完了したら実行
    TweenMax.delayedCall(2.4, function() {
      $(".js-loader-bg").fadeOut(800);
    });
    TweenMax.delayedCall(2.2, function() {
      $(".js-loader").fadeOut(300);
    });

    // 要素を表示
    $(".js-wrap_All").css("visibility", "visible");
    $(".js-line")
      .delay(1500)
      .queue(function(next) {
        $(this).fadeIn();
        next();
      });

    // mhのシューズpopUp
    TweenMax.delayedCall(3, function() {
      $(".js-action-shoes_mh").addClass("add-scrollin");
    });

    // $('.lp-slide').addClass('add-firstslide');


    var imgData = [
        {
          main : 'lp-kv-main-01_1910-min.jpg',
          sub : 'lp-kv-sub-01_1910-min.jpg',
          statement : 'lp-statement-01_1910-min.jpg'
        },
        {
          main : 'lp-kv-main-02_1910-min.jpg',
          sub : 'lp-kv-sub-02_1910-min.jpg',
          statement : 'lp-statement-02_1910-min.jpg'
        },
        {
          main : 'lp-kv-main-03_1910-min.jpg',
          sub : 'lp-kv-sub-03_1910-min.jpg',
          statement : 'lp-statement-03_1910-min.jpg'
        },
        {
          main : 'lp-kv-main-04_1910-min.jpg',
          sub : 'lp-kv-sub-04_1910-min.jpg',
          statement : 'lp-statement-04_1910-min.jpg'
        },
    ];

    for(var i = imgData.length - 1; i >= 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = imgData[i];
      imgData[i] = imgData[j];
      imgData[j] = tmp;
    };

    for(var i = 0;i< imgData.length;i++){
          $('.js-main-container'+i).children('picture').append('<source media="(min-width:960px)" srcset="images/'+imgData[i].main+'"><img src="images/mobile/' +imgData[i].main +'" alt="adidas originals homeofclassics SUPERCOURT アディダス オリジナルス ホームオブクラシックス スーパーコート">');
          $('.js-sub-container'+i).children('picture').append('<source media="(min-width:960px)" srcset="images/'+imgData[i].sub+'"><img src="images/mobile/' +imgData[i].sub +'" alt="adidas originals homeofclassics SUPERCOURT アディダス オリジナルス ホームオブクラシックス スーパーコート">');
          $('.js-st-container'+i).children('picture').append('<source media="(min-width:960px)" srcset="images/'+imgData[i].statement+'"><img src="images/mobile/' +imgData[i].statement +'" alt="adidas originals homeofclassics SUPERCOURT アディダス オリジナルス ホームオブクラシックス スーパーコート">');
    }

    var slideshowDuration = 3000;
    var slideSecond = 1.4;
    function slideshowNext(slideshow) {
      var slides = slideshow.find(".js-lp-slide");
      var activeSlide = slides.filter(".add-active");
      var newSlide = null;
      newSlide = activeSlide.next(".js-lp-slide");
      if (newSlide.length == 0)
        newSlide = slides.filter(".js-lp-slide").first();
      slideshowSwitch(slideshow, newSlide.index());
    }

    function slideshowSwitch(slideshow, index) {
      if (slideshow.data("wait")) return;
      var slides = slideshow.find(".js-lp-slide");
      var activeSlide = slides.filter(".add-active");
      var activeSlideImage = activeSlide.find(".js-image-container");
      var newSlide = slides.eq(index);
      var newSlideImage = newSlide.find(".js-image-container");
      var newSlideContent = newSlide.find(".js-slide-content");
      var newSlideElements = newSlide.find(".js-caption > *");
      if (newSlide.is(activeSlide)) return;
      newSlide.addClass("is-new");
      slideshow.data("wait", true);

      var newSlideLeft = 0;
      var newSlideRight = "auto";
      var newSlideImageLeft = -slideshow.width() / 8;
      var newSlideImageRight = "auto";
      var newSlideImageToLeft = 0;
      var newSlideImageToRight = "auto";
      var newSlideContentRight = "auto";
      var newSlideContentLeft = 0;
      var activeSlideImageRight = -slideshow.width() / 4;

      // 始点
      newSlide.css({
        display: "block",
        width: 0,
        left: newSlideLeft,
        right: newSlideRight,
        zIndex: 2
      });

      newSlideImage.css({
        width: slideshow.width(),
        left: newSlideImageLeft,
        right: newSlideImageRight
      });

      newSlideContent.css({
        width: slideshow.width(),
        left: newSlideLeft,
        right: newSlideRight
      });

      activeSlideImage.css({
        right: 0,
        left: "auto"
      });

      // 終点
      TweenMax.set(newSlideElements, { y: 60, force3D: true });
      TweenMax.to(activeSlideImage, slideSecond, {
        right: activeSlideImageRight,
        ease: Power3.easeInOut
      });

      TweenMax.to(newSlide, slideSecond, {
        width: slideshow.width(),
        ease: Power3.easeInOut
      });

      TweenMax.to(newSlideImage, slideSecond, {
        left: newSlideImageToLeft,
        right: newSlideImageToRight,
        ease: Power3.easeInOut
      });

      TweenMax.staggerFromTo(
        newSlideElements,
        slideSecond,
        { alpha: 0, y: 60 },
        { alpha: 1, y: 0, ease: Power3.easeOut, force3D: false, delay: 0.6 },
        slideSecond,
        function() {
          newSlide.addClass("add-active").removeClass("is-new");
          activeSlide.removeClass("add-active");
          newSlide.css({
            display: "",
            width: "",
            right: "",
            zIndex: ""
          });
          slideshow.find(".pagination").trigger("check");
          slideshow.data("wait", false);
          TweenMax.delayedCall(slideshowDuration / 1000, function() {
            slideshowNext(slideshow, false);
          });
        }
      );
    }

    var slidesArray = [
      $(".js-slideshow_main"),
      $(".js-slideshow_sub"),
      $(".js-slideshow_statement")
    ];
    var baseDelay = 0.1;
    var upCount = 0.5;
    TweenMax.delayedCall(0, function() {
      slidesArray.forEach(function(element) {
        TweenMax.delayedCall(baseDelay, function() {
          var $slideshow = element;
          $slideshow.find(".js-lp-slide").addClass("add-loaded");
          slideshowNext($slideshow);
          setTimeout(function() {
            slideshowNext($slideshow, false);
          }, slideshowDuration / 1000);
        });
        baseDelay += upCount;
      }, this);
    });

    $(w).scroll(function() {
      var windowHeight = $(w).height() / 1.5;
      var scroll = $(w).scrollTop();
      // 横から背景画像がフェードイン
      $(".js-img-wrap").each(function() {
        var elemPos = $(this).offset().top;
        if (scroll > elemPos - windowHeight) {
          $(this).addClass("add-animation");
          $(this)
            .find(".js-width")
            .addClass("add-animation_width");
        }
      });
      // シューズを遅れてフェードイン
      $(".js-action_shoes").each(function() {
        var elemPos = $(this)
          .siblings(".js-img-wrap")
          .offset().top;
        if (scroll > elemPos - windowHeight) {
          $(this)
            .delay(500)
            .queue(function(next) {
              $(this).addClass("add-scrollin");
              next();
            });
        }
      });
      // テキストboxを遅れてフェードイン
      $(".js-action_text").each(function() {
        var elemPos = $(this)
          .siblings(".js-img-wrap")
          .offset().top;
        if (scroll > elemPos - windowHeight) {
          $(this)
            .delay(800)
            .queue(function(next) {
              $(this).addClass("add-scrollin");
              next();
            });
        }
      });
    });

    // スライダー部分 ほかページから引用
    $(".js-gallerySlide").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      // centerMode: true,
      initialSlide: 0,
      centerPadding: "10%",
      arrows: true,
      prevArrow: "<div></div>",
      nextArrow: "<div></div>",
      dots: true,
      speed: 150,
      infinite: false,
      responsive: [
        {
          breakpoint: 960, //ブレイクポイントを指定
          settings: {
            centerPadding: "15%",
            slidesToShow: 1,
            initialSlide: 0,
            arrows: false
          }
        }
      ]
    });

    // 動画ポップアップ
    $(".js-popup").on("click", function() {
      var video = $("#video").get(0);
      var current_scrollY = $(w).scrollTop();

      $(".js-popup").colorbox({
        inline: true,
        fixed: true,
        rel: "group",
        height: "100%",
        closeButton: true,
        maxWidth: "100%",
        close: "",
        onOpen: function() {
          $("#colorbox").css({
            position: "fixed"
          });
        },
        onClosed: function() {
          $("html, body").prop({ scrollTop: current_scrollY });
          video.currentTime = 0;
        },
        onComplete: function() {
          video.play();
        }
      });
    });

    $(d).on("click", ".js-popupMovie", function(e) {
      e.preventDefault();
      $.magnificPopup.open({
        items: {
          src: $(this).attr("href")
        },
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 150,
        preloader: false,
        fixedContentPos: true
      });
    });

    $(w).resize(function() {
      $(".js-image-container").each(function() {
        $(this).width(
          $(this)
            .parents(".js-slideWrap")
            .width()
        );
      });
    });
  });
})(window, document);
