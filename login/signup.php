<?php
require "header.php";
?>

	<main>
			<h1>Signup!</h1>
			<form action="includes/signup.inc.php" method="post">
				<input type="text" name="uid" placeholder="username"><br>
				<input type="text" name="mail" placeholder="E-mail"><br>
				<input type="password" name="pwd" placeholder="password"><br>
				<input type="password" name="pwd-repeat" placeholder="Repeat password"><br>
				<button type="submit" name="signup-submit">Signup</button><br>
			</form>
	</main>

<?php
	require "footer.php";
?>	