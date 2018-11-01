<?php 
	$conn = mysqli_connect('localhost','root', '123456', 'mobileapp_vs1');

	$obj = json_decode(file_get_contents('php://input'),true);

	$arrGV = array();

	$groups_id = $obj["groups_id"];

	$sql = "SELECT * FROM tbl_membergroups ";
	$query = mysqli_query($conn, $sql);

	class AddMembers
	{
		var  $id, $name; 
		
		function AddMembers($_id, $_name, $_address)
		{
			$this->id = $_id;
			$this->name = $_name;
			$this->address = $_address;
		}
	}

	while($data = mysqli_fetch_array($query)) {
		array_push($arrGV, new AddMembers( $data["id"], $data["name"], $data["address"]));
	}

	echo json_encode($arrGV);
?>