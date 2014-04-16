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

$owner = $data["owner"];
$title = $data["title"];
$link = $data["link"];

include "condb.php";

$check = "";

$query  = "INSERT INTO pictures (id,owner , title , link) VALUES('','$owner', '$title' , '$link')";

$already = mysql_query($query);




echo $query;