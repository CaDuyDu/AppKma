<?php 
	$conn = mysqli_connect('localhost','root', '123456', 'mobileapp_vs1');

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$sql = "SELECT * FROM tbl_article ORDER BY id DESC";
	$query = mysqli_query($conn, $sql);

	$arrGV = array();

	class AddArticle
	{
		var $id, $title, $content, $image, $create_at; 
		
		function AddArticle($_id, $_title, $_content, $_image, $_create_at)
		{
			$this->id = $_id;
			$this->title = $_title;
			$this->content =$_content;
			$this->image = $_image;
			$this->create_at = $_create_at;
		}
	}

	while($data = mysqli_fetch_array($query)) {
		array_push($arrGV, new AddArticle($data["id"], $data["title"],$data["content"], $data["image"], $data["create_at"]));
	}

	// $sql1 = "SELECT * FROM tbl_article ORDER BY id DESC";
	// $query1 = mysqli_query($conn, $sql1);

	// class AddComments
	// {
	// 	var $id, $title, $content, $image, $create_at; 
		
	// 	function AddComments($_id, $_title, $_content, $_image, $_create_at)
	// 	{
	// 		$this->id = $_id;
	// 		$this->title = $_title;
	// 		$this->content =$_content;
	// 		$this->image = $_image;
	// 		$this->create_at = $_create_at;
	// 	}
	// }

	// while($data = mysqli_fetch_array($query1)) {
	// 	array_push($arrGV, new AddComments($data["id"], $data["title"],$data["content"], $data["image"], $data["create_at"]));
	// }

	echo json_encode($arrGV);
?>
