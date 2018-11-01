<?php 
	$conn = new mysqli('localhost','root', '123456', 'mobileapp_vs1');
	 
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$name = $obj["name"];
		
	$sql = "INSERT INTO tbl_school(name) VALUES('$name')";
	$query = mysqli_query($conn, $sql);
	if($query){
		echo  json_encode(array("error"=>'OK'));
	}
	else{
	   echo json_encode(array("error"=>'Check Internet Connect!'));	
	}

?>