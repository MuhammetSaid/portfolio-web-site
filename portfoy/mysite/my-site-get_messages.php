<?php
include 'my-site-db.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$sql = "SELECT * FROM messages WHERE is_deleted = 0";
$result = $conn->query($sql);

if ($result) {
    $messages = [];

    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }

    echo json_encode($messages);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Veritabanı hatası: ' . $conn->error]);
}

$conn->close();
?>
