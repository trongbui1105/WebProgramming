<?php
    require_once "connection.php";
    $conn = mysqli_connect($hostname, $username, $password, $database);
    mysqli_set_charset($conn, 'utf8mb4');
?>
