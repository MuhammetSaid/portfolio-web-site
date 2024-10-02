<?php
$servername = "localhost:8889"; // MAMP kullanıyorsan "localhost" olabilir
$username = "root";
$password = "Maho.168";
$dbname = "mysite";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
