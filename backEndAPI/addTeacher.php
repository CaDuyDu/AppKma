<?php 
	$conn = new mysqli('localhost','root', '123456', 'mobileapp_vs1');
	 
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$name = $obj["name"];
	$email = $obj['email'];
	$age = $obj['age'];
	$address = $obj['address'];
	$heigth = $obj['heigth'];
	$weigth = $obj['weigth'];
	$gender = $obj['gender'];
	
	if($obj['email']!=""){
		$select= ("SELECT * FROM tbl_teacher where email='$email'");
		$result  = mysqli_query($conn,$select);

		if(mysqli_num_rows($result) > 0){
			echo json_encode(array("error"=>'Email already exist!'));	 	
		}else{		
			$sql = "INSERT INTO tbl_teacher(name, email, address, age, heigth, weigth, gender) VALUES('$name', '$email', '$address', '$age', '$heigth', '$weigth', '$gender')";
			$query = mysqli_query($conn, $sql);
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