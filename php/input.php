<?php
/**
 * Created by PhpStorm.
 * User: Jonas
 * Date: 4/17/14
 * Time: 12:43 AM
 */




   $data = $_POST['data'];


    echo $data;
    echo $_POST['test'];





?>


<form action="input.php" method="post">

    <input type="text" name="test"/>

    <textarea id="data" name="data">

    </textarea>

    <input type="submit" value="push" />

</form>