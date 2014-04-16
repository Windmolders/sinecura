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

$check = "select * from chars2";

$already = mysql_query($check);

$return;

if(mysql_num_rows($already) > 0){

        $count = 0;

        while ($row = mysql_fetch_assoc($already))
        {
            $return[$count] =  $row['data'];

            $count++;
        }

}

$return =  str_replace("\\", "", json_encode($return));
$return =  str_replace("\"[", "[",$return);
$return =  str_replace("]\"", "]", $return);
echo $return;
