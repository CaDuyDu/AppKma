<?php 

	$conn= mysqli_connect('localhost','root', '123456', 'mobileapp_vs1');

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$id = $obj['id'];
	

	$sql = "DELETE FROM  tbl_teacher WHERE id = '{$id}'";
	$query = mysqli_query($conn, $sql);
	
	if($query){
		echo  json_encode(array("error"=>'OK'));
	}
	else{
	   echo json_encode(array("error"=>'Check Internet Connect!'));	
	}

?>