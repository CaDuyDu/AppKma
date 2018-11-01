<?php 
	$con = mysqli_connect('localhost','root', '123456', 'mobileapp_vs1');

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$email = $obj['email'];
	$password = $obj['password'];

	if($obj['email']!=""){
		$select="SELECT * FROM tbl_admin WHERE email = '$email' AND password = '$password' ";
		$result  = mysqli_query($con,$select);
		if (mysqli_num_rows($result) == 0) {
			echo json_encode($result);
		}else{
			echo json_encode(array("error"=>'OK'));
		}
	}else{
		echo json_encode(array("error"=>'Try again!'));
	}
?>