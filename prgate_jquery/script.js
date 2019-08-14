$(function () {
    $('#register-email').on('click', function () {
        $('.login-modal').fadeIn();
    });
    $('.fa-backspace').on('click', function () {
        $('.login-modal').fadeOut(); 
    });



    $('li').hover(function () { 
        $(this).find('.lesson_text').show();
    }, function () { 
        $(this).find('.lesson_text').hide(); 
        });
    
    
    $('.faq-list').on('click', function () {
        var $answer = $(this).find('.faq-list_answer');
        if ($answer.hasClass('active')) {
            $answer.removeClass('active').slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('active').slideDown();
            $(this).find('span').text('-');
        }
    });
});