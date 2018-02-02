<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 2/1/2018
 * Time: 9:56 PM
 */

require __DIR__ . "/connect.php";

if(mysqli_connect_errno()) {
    print_r(mysqli_connect_error());
}

