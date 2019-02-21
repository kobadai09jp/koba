
<?php
session_start();
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
$error_array = array();

if(isset($_POST['register_button'])){
	//Registration form values

	//firstname
	$fname = strip_tags($_POST['reg_fname']); //Remove html Tag
	//$fname = str_replace(' ', '', $fname)($_POST['reg_fname']); //Remove Space
	$fname = ucfirst(strtolower($fname)); //Uppercase firstlater
	$_SESSION['reg_fname'] = $fname; //firstname into session

	//lastname
	$lname = strip_tags($_POST['reg_lname']); //Remove html Tag
	// $lname = str_replace(' ', '', $lname)($_POST['reg_lname']); //Remove Space
	$lname = ucfirst(strtolower($lname)); 
	$_SESSION['reg_lname'] = $lname; //firstname into session

	//email
	$em = strip_tags($_POST['reg_email']); //Remove html Tag
	// $em = str_replace(' ', '', $em)($_POST['reg_email']); //Remove Space
	$em = ucfirst(strtolower($em)); //Uppercase firstlater	//Uppercase firstlater
	$_SESSION['reg_email'] = $em; //firstname into session	
	//email2
	$em2 = strip_tags($_POST['reg_email2']); //Remove html Tag
	// $em2 = str_replace(' ', '', $em2)($_POST['reg_email2']); //Remove Space
	$em2 = ucfirst(strtolower($em2)); //Uppercase firstlater
	$_SESSION['reg_email2'] = $em2; //firstname into session

	//password
	$password = strip_tags($_POST['reg_password']); //Remove html Tag

	//password2
	$password2 = strip_tags($_POST['reg_password2']); //Remove html Tag

	$date = date("Y-m-d");//getcrentdate

	if($em == $em2){

		if(filter_var($em, FILTER_VALIDATE_EMAIL)){

			$em = filter_var($em, FILTER_VALIDATE_EMAIL);

			//check if email already exiats
			$e_check = mysqli_query($con,"SELECT email FROM users WHERE email = '$em'");

			//Count the number of returend
			$num_rows = mysqli_num_rows($e_check);

			if($num_rows > 0){
				array_push($error_array, "Email already in use<br>");
			}

		}else{
			array_push($error_array,"Invalid email format<br>");
		}

	}else{
		array_push($error_array,"Email don't match<br>");
	}

	if(strlen($fname) > 25 || strlen($fname)<2){
		array_push($error_array,"Your first name must be betwwn 2 and 25 characters<br>");
	}
	if(strlen($lname) > 25 || strlen($lname)<2){
		array_push($error_array,"Your last name must be betwwn 2 and 25 characters<br>");
	}

	if($password != $password2){
		array_push($error_array,"Your password do not match<br>");
	} else if(preg_match('/[^A-Za-z0-9]/', $password)){
		array_push($error_array,"Your password can only contain english characters or numbers<br>");
	}
	if(strlen($password > 30 || strlen($password) < 5)){
		array_push($error_array,"Your password must be between 5 and 30 caharacters<br>");
	}

	if(empty($error_array)){
		$password =md5($password); 

		$username = strtolower($fname . "_" . $lname);
		$check_username_query = mysqli_query($con,"SELECT username FROM users WHERE username ='$username'");

		$i = 0;
		//if username exists add number to username
		while (mysqli_num_rows($check_username_query)!= 0) {
			$i++;
			$username = $username . "_" . $i;
			$check_username_query = mysqli_query($con,"SELECT username FROM users WHERE username ='$username'");
		}
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
		<input type="text" name="reg_fname" placeholder="FirstName" value="<?php
		if(isset($_SESSION['reg_fname'])){
			echo $_SESSION['reg_fname'];
		}
		?>" required="">
		<br>
		<?php if(in_array("Your first name must be betwwn 2 and 25 characters<br>", $error_array))echo "Your first name must be betwwn 2 and 25 characters<br>"; ?>
		

		<input type="text" name="reg_lname" placeholder="LastName" value="<?php
		if(isset($_SESSION['reg_lname'])){
			echo $_SESSION['reg_lname'];
		}
		?>"required="">
		<br>
		<?php if(in_array("Your last name must be betwwn 2 and 25 characters<br>", $error_array))echo "Your last name must be betwwn 2 and 25 characters<br>"; ?>

		<input type="email" name="reg_email" placeholder="Email" value="<?php
		if(isset($_SESSION['reg_email'])){
			echo $_SESSION['reg_email'];
		}
		?>"required="">
		<br>

		<input type="email" name="reg_email2" placeholder="Confirm Email" value="<?php
		if(isset($_SESSION['reg_email2'])){
			echo $_SESSION['reg_email2'];
		}
		?>" required="">
		<br>
		<?php if(in_array("Email already in use<br>", $error_array))echo "Email already in use<br>";
		else if(in_array("Invalid email format<br>", $error_array))echo "Invalid email format<br>";
		else if(in_array("Email don't match<br>", $error_array))echo "Email don't match<br>"; ?>

		<input type="password" name="reg_password" placeholder="Password" required="">
		<br>
		<input type="password" name="reg_password2" placeholder="Confirm Password" required="">
		<br>
		<?php if(in_array("Your password do not match<br>", $error_array))echo "Your password do not match<br>";
		else if(in_array("Your password can only contain english characters or numbers<br>", $error_array))echo "Your password can only contain english characters or numbers<br>";
		else if(in_array("Your password must be between 5 and 30 caharacters<br>", $error_array))echo "Your password must be between 5 and 30 caharacters<br>"; ?>

		<input type="submit" name="register_button" value="register">
	</form>

</body>
</html>