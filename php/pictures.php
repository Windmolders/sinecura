<?php
/**
 * Created by PhpStorm.
 * User: Jonas
 * Date: 4/11/14
 * Time: 8:13 PM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include "condb.php";

$data = json_decode(file_get_contents('php://input'), true);

$return;

include "condb.php";

$check = "select * from pictures";

$already = mysql_query($check);

if(mysql_num_rows($already) > 0){
    $count = 0;

    while ($row = mysql_fetch_assoc($already))
    {
        $return[$count]["id"] = $count;
        $return[$count]["owner"] = $row['owner'];
        $return[$count]["title"] = $row['title'];
        $return[$count]["link"] = $row['link'];
        $count++;
    }


}


echo json_encode($return);