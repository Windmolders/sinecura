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

$name = $data["name"];
$password = md5($data["password"]);

$return["message"] = "";

include "condb.php";

$check = "select * from login where name = '" . $name ."' AND password = '".$password."'";

$already = mysql_query($check);

if(mysql_num_rows($already) > 0){

    $return["message"] = 'Logged in';

    while ($row = mysql_fetch_assoc($already))
    {
        $return["id"] = $row['id'];
        $return["name"] = $row['name'];
        $return["token"] = $row['token'];
    }


}
else{

    $return["message"] = 'Wrong credentials.';

}

echo json_encode($return);