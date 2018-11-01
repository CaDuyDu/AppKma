<?php 
	$conn = mysqli_connect('localhost','root', '123456', 'mobileapp_vs1');

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$sql = "SELECT * FROM tbl_class ORDER BY id DESC";
	$query = mysqli_query($conn, $sql);

	$arrGV = array();

	class AddClass
	{
		var $id, $name; 
		
		function AddClass($_id, $_name)
		{
			$this->id = $_id;
			$this->name = $_name;
		}
	}

	while($data = mysqli_fetch_array($query)) {
		array_push($arrGV, new AddClass($data["id"], $data["name"]));
	}

	echo json_encode($arrGV);
?>