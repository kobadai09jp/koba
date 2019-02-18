<!doctype html>
<html lang="ja">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="css/style.css">

<title>PHP</title>
</head>
<body>
<header>
<h1 class="font-weight-normal">PHP</h1>    
</header>

<main>
<h2>Practice</h2>
<pre>
<!-- ここにプログラムを記述します -->
<?php
// echo(time()+ 60 * 60 * 24);
for($i=1;$i<=365;$i++):
    $date =strtotime('+'.$i.'day');
    echo (date('n/j/D',$date));  
    echo '<br>'; 
endfor; 


?>
</pre>
</main>
</body>    
</html>