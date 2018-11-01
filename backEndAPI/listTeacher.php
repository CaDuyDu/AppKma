<?php 
	$conn = mysqli_connect('localhost','root', '123456', 'mobileapp_vs1');

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$sql = "SELECT * FROM tbl_teacher ORDER BY id DESC";
	$query = mysqli_query($conn, $sql);

	$arrGV = array();

	class AddTeachers
	{
		var $id, $name,$email, $age, $gender, $image, $birthday, $address; 
		
		function AddTeachers($_id, $_name, $_email, $_age, $_gender, $_image, $_birthday, $_address)
		{
			$this->id = $_id;
			$this->name = $_name;
			$this->email =$_email;
			$this->age = $_age;
			$this->gender = $_gender;
			$this->image = $_image;
			$this->birthday = $_birthday;
			$this->address = $_address;
		}
	}

	while($data = mysqli_fetch_array($query)) {
		array_push($arrGV, new AddTeachers($data["id"], $data["name"],$data["email"], $data["age"], $data["gender"], $data["image"], $data["birthday"], $data["address"]));
	}

	echo json_encode($arrGV);
?>