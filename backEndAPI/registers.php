<?php 
	$con = new mysqli('localhost','root', '123456', 'mobileapp_vs1');
	 
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$name = $obj['name'];
	$email = $obj['email'];
	$password = $obj['password'];

	if($obj['email']!=""){
		$select= ("SELECT * FROM tbl_user where email='$email'");
		$result  = mysqli_query($con,$select);

		if(mysqli_num_rows($result) > 0){
			echo json_encode(array("error"=>'Email already exist!'));	 	
		}else{		
			$sql = "INSERT INTO tbl_user (name,email,password) VALUES('$name','$email','$password')";
			$query = mysqli_query($con, $sql);
			if($query){
				echo  json_encode(array("error"=>'OK'));
			}
			else{
			   echo json_encode(array("error"=>'Check Internet Connect!'));	
			}
		}
	}else{
	  echo json_encode(array("error"=>'Try again'));
	}
?>