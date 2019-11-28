import '../../../LPComponent/_itemCard';
import '../../../lib/owl.carousel';
import '../../../LPComponent/_rangeHeader';


// アコーディオン
$(function () {
    $('.js-note').on('click', function () {
        $(this).next('ul').slideToggle(200);
        $(this).toggleClass('add-rotate');
    });

// タブ切り替え
    $('.js-panel li:not('+$('.js-tab li a.js-selected').attr('href')+')').hide();
    $('.js-tab li a').click(function(){
        $('.js-tab li a.js-selected').removeClass('js-selected');
        $(this).addClass('js-selected');
        $('.js-panel > li').hide();
        $($(this).attr('href')).fadeIn('slow');
        return false;

        
    });
    
});
