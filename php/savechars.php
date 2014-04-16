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


$wie = $data["owner"];
$chars = json_encode($data["data"]);

$q2 = "UPDATE chars2 SET data = '".$chars."' where name = '".$wie."'";

$test2 = mysql_query($q2);



echo "done";