<?php
/**
 * Created by PhpStorm.
 * User: Jonas
 * Date: 4/11/14
 * Time: 8:55 PM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$data = json_decode(file_get_contents('php://input'), true);

$email = $data["email"];
$name = $data["name"];
$password = md5($data["password"]);

include "condb.php";

$check = "select * from login where email = '" . $email ."' OR name = '" . $name ."'";

$already = mysql_query($check);


if(mysql_num_rows($already) > 0){

    $return["message"] = 'This email or name is already taken.';
    $return["suc"] = false;
    echo json_encode($return);

}
else{

    if($email != null && $name != null && $password != null){

    $letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,10];
    $token = array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters);

    $q1 = "INSERT INTO login VALUES ('','".$email."','".$name."','".$password."','".$token."')";

    $test = mysql_query($q1);

    $q2 = "INSERT INTO chars2 VALUES ('','".$name."','')";

    $test2 = mysql_query($q2);

    $return["message"] = 'Welcome to Sine Cura!';
    $return["suc"] = true;
    echo json_encode($return);

    }else{
        $return["suc"] = false;
        $return["message"] = 'Fill in all the fields!';

        echo json_encode($return);
    }
}
