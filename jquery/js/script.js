$(function(){
  // クイズを管理するDOMを指定
  var quizArea = $('.quiz_area');
  // もう一度を押したときのために初期HTMLを変数で保管
  var quiz_html = quizArea.html();
  // 現在の問題数を管理
  var quiz_cnt = 0;
  // 何問で修了かを設定
  var quiz_fin_cnt = 5;
  // 問題の正解数
  var quiz_success_cnt = 0;


  // クイズの配列を設定
  var aryQuiz = [];

  aryQuiz.push(
    {
      question:'次のうち、海に面していない県はどれ?',
      answer:['岐阜','愛知','三重','静岡']
    }
    ,{
      question : '祝日「山の日」は何日？',
      answer : ['8月11日', '8月24日', '8月17日', '8月5日']
    }
    ,{
      question : '東京ヤクルトスワローズのホーム球場はどれ？',
      answer : ['明治神宮野球場', '東京ドーム', 'メットライフドーム', 'ZOZOマリンスタジアム']
    }
    ,{
      question : '元号「平成」が終わったのはいつ？',
      answer : ['2019年4月30日', '2019年3月31日', '2019年5月31日', '2019年2月28日']
    }
    ,{
      question : 'SMAPが出したシングル曲で最も売れたのはどれ？',
      answer : ['世界に一つだけの花', 'オレンジ', '青いイナズマ', 'SHAKE']
    }
  );

  quizReset();



  // 回答を選択したあとの処理
  quizArea.on('click','.quiz_ans_area ul li',function(){
    // 画面を暗くするボックスを表示（結果表示中は選択肢のクリックやタップを封じる）
    quizArea.find('.quiz_area_bg').show();
    // 選択した回答に色を付ける
    $(this).addClass('selected');

    if($(this).data('true')){
      // 正解の処理 ◯を表示
      quizArea.find('.quiz_area_icon').addClass('true');
      // 正解数をカウント
      quiz_success_cnt ++;
    }else{
      // 不正解の処理
      quizArea.find('.quiz_area_icon').addClass('false');
    }
    setTimeout(function(){
      quizArea.find('.quiz_ans_area ul li').removeClass('selected');
      quizArea.find('.quiz_area_icon').removeClass('true false');
      quizArea.find('.quiz_area_bg').hide();

      // 問題数のカウントをすすめる

      quiz_cnt ++ ;
      if(quiz_fin_cnt > quiz_cnt){
        quizShow()
      }else{
        quizResult();
      }
    },1500);
  });


  // もう一度挑戦するを押したときの処理
  quizArea.on('click','.quiz_restert',function(){
    quizReset();
  });

  // リセットを行う関数
  function quizReset(){
    // 表示をもとに戻す
    quizArea.html(quiz_html);
    quiz_cnt = 0;
    quiz_success_cnt = 0;
    quizShow();
  }

// 問題を表示する関数
function quizShow(){
  // 何匁かを表示
  quizArea.find('.quiz_no').text(quiz_cnt + 1);
  // 問題文を表示
  quizArea.find('.quiz_question').text(aryQuiz[quiz_cnt]['question']);
  // 正解の問題を取得する
  var success = aryQuiz[quiz_cnt]['answer'][0];
  // 現在の選択肢表示を削除する
  quizArea.find('.quiz_ans_area ul').empty();

  var aryHoge = aryQuiz[quiz_cnt]['answer'];

  $.each(aryHoge,function(key,value){
    var fuga = '<li>' + value +'</li>';
    if(success === value){
      fuga = '<li data-true="1">'+value+'</li>';
    }
    quizArea.find('.quiz_ans_area ul').append(fuga);
  });
}


  // 結果を表示する関数
  function quizResult(){
    quizArea.find('.quiz_set').hide();
    $text = quiz_fin_cnt+'問中' + quiz_success_cnt + '正解';
    if(quiz_fin_cnt === quiz_success_cnt){
      $text += '全問正解おめでとう'; 
      var imgsrc = 'img/lp-mh-vrct-01-1909.jpg';
    }else if(quiz_success_cnt > 3){
      $text += 'よく出来ました'; 
      var imgsrc = 'img/lp-tc-vrct-01-1909.jpg';
    }else if(quiz_success_cnt >2){
      $text += 'もう少し頑張りましょう';
      var imgsrc = 'img/lp-tc-vrct-02-1909.jpg';
    }else{
      $text += '全然だめ';
      var imgsrc = 'img/lp-tc-vrct-02-1909.jpg';
    }


    $text += '<br><input type="button" value="もう一度挑戦する" class="quiz_restert">';
    
    quizArea.find('.quiz_result').prepend($text);
    quizArea.find('.quiz_result img').attr('src',imgsrc);
    quizArea.find('.quiz_result').show();
  }

});


