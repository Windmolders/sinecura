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

$wie = $data["wie"];

include "condb.php";

$check = "select data from chars2 where name = '".$wie."'";

$already = mysql_query($check);

if(mysql_num_rows($already) > 0){


    while ($row = mysql_fetch_assoc($already))
    {
        echo $row['data'];
    }


}


