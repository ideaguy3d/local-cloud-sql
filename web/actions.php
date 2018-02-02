<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 2/1/2018
 * Time: 10:46 PM
 */

require __DIR__ . "/functions.php";

$error = "";
$action = array_key_exists('action', $_GET) ? $_GET['action'] : "";
$email = array_key_exists('email', $_GET) ? $_GET['email'] : "";
$validEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
$tableQue = "CREATE TABLE IF NOT EXISTS users (user_id INT, email VARCHAR (255), pass VARCHAR (255))";

if ($action) {
    if(!$action) {
        $error = "you need an action";
    }
    else if ($action == "loginSignup") {
        echo "jha - in the loginSignup endpoint (: ";
        if (!$validEmail) {
            $error = "you need a valid email";
        }

        if ($error != "") echo $error;
    }
}

