<?php
    //ini_set("output_buffering", "1");
	
	header('Access-Control-Allow-Origin:*');  
	header('Access-Control-Allow-Methods:POST');  
	header('Access-Control-Allow-Headers:x-requested-with,content-type');  
	
	
		
	$files = glob("txt/*.txt");


	$results = array();
    for ($i = 0; $i < count($files); $i++) {
        $lines = file($files[$i], FILE_IGNORE_NEW_LINES);
        $result = array("url" => $lines[0], "name" => $lines[1], "img" => $lines[2], "color" => $lines[3]);
        array_push($results, $result);
    }
	header("Content-type: application/json");
    print(json_encode($results));


?>