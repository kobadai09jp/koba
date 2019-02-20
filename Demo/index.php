<?php
$con = new mysqli ("localhost","root","mysql","social");
echo "a";
if(mysqli_connect_errno()){
	echo "b";

	echo "Failed to connect:" . mysql_connect_errno();
}
echo "c";
$query = mysqli_query($con,"INSERT INTO test VALUES(null,'AAAAA')");
echo "d";
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