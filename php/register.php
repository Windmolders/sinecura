<?php
/**
 * Created by PhpStorm.
 * User: Jonas
 * Date: 4/11/14
 * Time: 8:55 PM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');



$data = json_decode(file_get_contents('php://input'), true);


include "condb.php";

$check = "select * from login where email = " . $data["email"] ." OR name = " . $data["name"];

$already = mysql_query($check);


if(mysql_num_rows($already) > 0){

    echo "{ message : 'This email or name is already taken.' }";
}
else{

    $email = $data["email"];
    $name = $data["name"];
    $password = $data["password"];

    $letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,10];
    $token = array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters).array_rand($letters);

    $q1 = "INSERT INTO login VALUES ('','$email,'$name','$password','$token')";

    $queryreg = mysql_query($q1);


    echo "{ message : 'Welcome to Sine Cura!'}";
}
