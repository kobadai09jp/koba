<?php
$con = new mysqli ("localhost","root","mysqla","social");

if(mysqli_connect_errno()){


	echo "Failed to connect:" , mysqli_connect_errno();
}

$query = mysqli_query($con,"INSERT INTO test VALUES(null,'AAAAA')");

?>
<!DOCTYPE html>
<html>
<head>
	<title>SwirlFeed</title>
</head>
<body>
	<p>Hello</p>
</body>
</html>