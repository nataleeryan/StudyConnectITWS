<?php  
	$file = "feed.json";
	try
	{
		//Get form data
		$input = array(
		'createTitle'=> $_POST['createTitle'],
		'createLocation'=> $_POST['createLocation'],
		'createDate' => $_POST['createDate'],
		'createCourse' => $_POST['createCourse'],
		'createDesc' => $_POST['createDesc']
		);

		//Get current data and merge it with new data
		$currentJson = file_get_contents($file);
		$newData = json_decode($currentJson, true);
	    array_push($newData,$input);
	   	$currentJson = json_encode($newData, JSON_PRETTY_PRINT);

	   	//Update old JSON
		file_put_contents($file, $currentJson);

		//Redirect to homepage
		echo file_get_contents("home.html");
		die();
	}
	catch (Exception $e) 
	{
		echo 'There was an error';
	}
?>