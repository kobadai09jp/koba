<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Login System</title>
</head>
<body>
	<header>
		<nav>
			<a href="">
				<img src="img/logo.png" alt="logo">
			</a>
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="#">Portoforio</a></li>
				<li><a href="#">AboutMe</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
			<div>
				<form action="includes/login.inc.php" method="post">
					<input type="text" name="mailuid" placeholder="Username/Email...">
					<input type="password" name="pwd" placeholder="password...">
					<button type="submit" name="login-submit">Login</button>
				</form>
				<a href="signup.php">Singup</a>
				<form action="includes/logout.inc.php" method="post">
					<button type="submit" name="logout-submit">Logout</button>
				</form>

			</div>
		</nav>
	</header>

