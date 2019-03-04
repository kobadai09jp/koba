<?php
require_once('data.php');
?>
 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<title>KaedenCafe</title>
 	<link rel="stylesheet" type="text/css" href="css/style.css">
 	 <link href='https://fonts.googleapis.com/css?family=Pacifico|Lato' rel='stylesheet' type='text/css'>
 </head>
 <body>
 	<div class="menu-wrapper container">
 		<h1 class="logo">Kaeden Cafe</h1>
 		<form action="confirm.php" method="POST">
	 		<div class="menu-items">
	 			<?php foreach ($menus as $menu): ?>
	 				<div class="menu-item">
	 					<img src="<?php echo $menu->getImage() ?>" class="menu-item-image">
	 					<h3 class="menu-item-name"><?php echo $menu->getName() ?></h3>
	 					<p class="price"><?php echo $menu->getTaxIncludedPrice() ?>(Tax included)</p>
	 					<span>Qty:</span>
	 					<input type="text" value="" name="<?php echo $menu->getName() ?>">
	 				</div>
	 			<?php endforeach ?>
	 		</div>
	 		<input type="submit" value="Order">
 		</form>
 	</div>
 </body>
 </html>