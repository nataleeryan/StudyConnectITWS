<?php  
	/*


	ALL OF THIS CODE IS COPIED FROM THE TUTORIAL


	*/
	$myFile = "feed.json";
	 $arr_data = array(); // create empty array
	 try
	 {
	   //Get form data
	   $formdata = array(
		'createTitle'=> $_POST['createTitle'],
		'createLocation'=> $_POST['createLocation'],
		'createDate' => $_POST['createDate'],
		'createCourse' => $_POST['createCourse'],
		'createDesc' => $_POST['createDesc']
	   );

	   //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);

	   // Push user data to array
	   array_push($arr_data,$formdata);

       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
	        echo 'Data successfully saved';
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }
?>