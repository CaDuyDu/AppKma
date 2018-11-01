<?php 
	$conn = new mysqli('localhost','root', '123456', 'mobileapp_vs1');
	 
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	date_default_timezone_set('Asia/Ho_Chi_Minh');
	//$timezone = DateTimeZone::listIdentifiers() ;

	$content = $obj['content'];
	$date = date('Y-m-d H:i:s');
	
		
	$sql = "INSERT INTO tbl_comment( content, create_at ) VALUES( '$content', '$date')";
	$query = mysqli_query($conn, $sql);
	if($query){
		echo json_encode(array("error"=> 'OK'));
	}else{
		echo json_encode(array("error"=> 'Connect faile!'));
	}


?>