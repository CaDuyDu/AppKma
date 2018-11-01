<?php 
	$conn = mysqli_connect('localhost','root', '123456', 'mobileapp_vs1');

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$sql = "SELECT * FROM tbl_notification ORDER BY id DESC";
	$query = mysqli_query($conn, $sql);

	$arrGV = array();

	class AddNotifi
	{
		var $id, $content, $create_at,$title; 
		
		function AddNotifi($_id, $_content, $_create_at,$_title)
		{
			$this->id = $_id;
			$this->content = $_content;
			$this->create_at= $_create_at;
			$this->title = $_title;
		}
	}

	while($data = mysqli_fetch_array($query)) {
		array_push($arrGV, new AddNotifi($data["id"], $data["content"], $data["create_at"],$data["title"]));
	}

	echo json_encode($arrGV);
?>