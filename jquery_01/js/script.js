$(function(){

    $('#quizBtn').click(function(){
        answer();
         });
         
       function answer(){
         var point = 0;
           var elements = $(".quiz");
           var count = 0;
           console.log(elements);
           console.log(elements.length);
           for(var i=0; i<elements.length;i++){
               if(elements[i].checked){ 
                   point += parseInt(elements[i].value);
                   count++;
               }
           }
           if(count !== 10){
             alert('未回答の問題があります');
             return false;
           }
          //  var kekka = $("#kekka");
         var tensu = $(".tensu");
           if(point <= 3){
           kenteiModal_1();
           tensu.append('<span class="tensuSize">'+point+'問</span>正解！');
      
           }else if(point < 7){
           kenteiModal_2();
           tensu.append('<span class="tensuSize">'+point+'問</span>正解！');
        //   alert('bbbb');
         }else if(point < 10){
           kenteiModal_3();
           tensu.append('<span class="tensuSize">'+point+'問</span>正解！');
        //   alert('cccc');
           }else if(point == 10){
           kenteiModal_4();
           tensu.append('<span class="tensuSize">全問</span>正解！');
        //   alert('eeee');
           }else{
           alert('エラー');
           }
       }

});



function kenteiModal_1(){
	// オーバーレイ用の要素を追加
	$('body').append('<div class="modal-overlay"></div>');
	// オーバーレイをフェードイン
    $('.modal-overlay, .modal-close').fadeIn(3000);
    // console.log(point);

    $('.modal-content').show();

	// モーダルコンテンツのIDを取得
	var modal = $('#kekkaBox1');
	// var current_scrollY = $( window ).scrollTop(); 


		
	// モーダルコンテンツフェードイン
	// $(modal).show().css({"top":"-100%"}).animate({
	// 	"top":"8%"},200).animate({
	// 	"top":"0%"},100).animate({
	// 	"top":"3%"},100);
			
	// 「.modal-overlay」あるいは「.modal-close」をクリック
	$('.modal-overlay, .modal-close').off().click(function(){
		// モーダルコンテンツとオーバーレイをフェードアウト。その後点数表記削除
		$(modal).fadeOut('slow',function(){
			// $('.tensu').html('');
		});
		
		// オーバーレイを削除
		$('.modal-overlay, .modal-close').fadeOut('slow',function(){
			$('.modal-overlay').remove();
		});
	});
};


function kenteiModal_2(){
        // オーバーレイ用の要素を追加

        var modal = $('#kekkaBox2');
        $(modal).show();
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay, .modal-close').fadeIn('slow');

        // // モーダルコンテンツのIDを取得
        // var modal = $('#kekkaBox2');
        //  // モーダルコンテンツフェードイン
        // /*$(modal).fadeIn(500);*/
		// $(modal).show().css({"top":"-100%"}).animate({
		// 	"top":"8%"},200).animate({
		// 	"top":"0%"},100).animate({
		// 	"top":"3%"},100);
			

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト。その後点数表記削除
            $(modal).fadeOut('slow',function(){
				$('.tensu').html('');
			});
			
            $('.modal-overlay, .modal-close').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
        });
};


function kenteiModal_3(){

    var modal = $('#kekkaBox3');
    $(modal).show();
        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay, .modal-close').fadeIn('slow');

        // // モーダルコンテンツのIDを取得
        // var modal = $('#kekkaBox3');
        //  // モーダルコンテンツフェードイン
        // $(modal).show().css({"top":"-100%"}).animate({
		// 	"top":"8%"},200).animate({
		// 	"top":"0%"},100).animate({
		// 	"top":"3%"},100);
			

        // // 「.modal-overlay」あるいは「.modal-close」をクリック
        // $('.modal-overlay, .modal-close').off().click(function(){
        //     // モーダルコンテンツとオーバーレイをフェードアウト。その後点数表記削除
        //     $(modal).fadeOut('slow',function(){
		// 		$('.tensu').html('');
		// 	});
			
        //     $('.modal-overlay, .modal-close').fadeOut('slow',function(){
        //         // オーバーレイを削除
        //         $('.modal-overlay').remove();
        //     });
        // });


};


function kenteiModal_4(){


    var modal = $('#kekkaBox4');
	$(modal).show();
        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay, .modal-close').fadeIn('slow');

        // // モーダルコンテンツのIDを取得
        var modal = $('#kekkaBox4');
        //  // モーダルコンテンツフェードイン
        // $(modal).show().css({"top":"-100%"}).animate({
		// 	"top":"8%"},200).animate({
		// 	"top":"0%"},100).animate({
		// 	"top":"3%"},100);
			

        // // 「.modal-overlay」あるいは「.modal-close」をクリック
        // $('.modal-overlay, .modal-close').off().click(function(){
        //     // モーダルコンテンツとオーバーレイをフェードアウト。その後点数表記削除
        //     $(modal).fadeOut('slow',function(){
		// 		$('.tensu').html('');
		// 	});
			
        //     $('.modal-overlay, .modal-close').fadeOut('slow',function(){
        //         // オーバーレイを削除
        //         $('.modal-overlay').remove();
        //     });
        // });
};

$(function(){
    $('.label').on('click',function(){
        $(this).toggleClass('active');
    });
})

 
 