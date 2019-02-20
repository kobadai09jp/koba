<?php 
ini_set("display_errors", On);
error_reporting(E_ALL);
?>

<?php
$con = new mysqli ("localhost","root","mysql","social");
if(mysqli_connect_errno()){

	echo "Failed to connect:" . mysqli_connect_errno();
}

$fname = "";
$lname = "";
$em = "";
$em2 = "";
$password = "";
$password2 = "";
$date = "";
$error_array = "";

if(isset($_POST['register_button'])){
	//Registration form values

	//firstname
	$fname = strip_tags($_POST['reg_fname']); //Remove html Tag
	//$fname = str_replace(' ', '', $fname)($_POST['reg_fname']); //Remove Space
	$fname = ucfirst(strtolower($fname)); //Uppercase firstlater

	//lastname
	$lname = strip_tags($_POST['reg_lname']); //Remove html Tag
	// $lname = str_replace(' ', '', $lname)($_POST['reg_lname']); //Remove Space
	$lname = ucfirst(strtolower($lname)); 

	//email
	$em = strip_tags($_POST['reg_email']); //Remove html Tag
	// $em = str_replace(' ', '', $em)($_POST['reg_email']); //Remove Space
	$em = ucfirst(strtolower($em)); //Uppercase firstlater	//Uppercase firstlater	
	//email2
	$em2 = strip_tags($_POST['reg_email2']); //Remove html Tag
	// $em2 = str_replace(' ', '', $em2)($_POST['reg_email2']); //Remove Space
	$em2 = ucfirst(strtolower($em2)); //Uppercase firstlater

	//password
	$password = strip_tags($_POST['reg_password']); //Remove html Tag

	//password2
	$password2 = strip_tags($_POST['reg_password2']); //Remove html Tag

	$date = date("Y-m-d");//getcrentdate

	if($em == $em2){

	}else{
		echo "Email don't match";
	}

}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Welcome to MyPageBook</title>
</head>
<body>

	<form action="register.php" method="POST">
		<input type="text" name="reg_fname" placeholder="FirstName" required="">
		<br>
		<input type="text" name="reg_lname" placeholder="LastName" required="">
		<br>

		<input type="email" name="reg_email" placeholder="Email" required="">
		<br>
		<input type="email" name="reg_email2" placeholder="Confirm Email" required="">
		<br>

		<input type="password" name="reg_password" placeholder="Password" required="">
		<br>
		<input type="password" name="reg_password2" placeholder="Confirm Password" required="">
		<br>
		<input type="submit" name="register_button" value="register">
	</form>

</body>
</html>