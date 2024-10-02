<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include 'my-site-db.php';

$sql = "SELECT * FROM experience";
$result = $conn->query($sql);

$experience = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $experience[] = $row;
    }
}

echo json_encode($experience);

$conn->close();
?>
