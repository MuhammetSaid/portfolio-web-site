<?php
include 'my-site-db.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $post_id = $conn->real_escape_string($data['id']);

    $sql = "UPDATE posts SET is_deleted = 1 WHERE id = '$post_id'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => "Yazı başarıyla silindi."]);
    } else {
        echo json_encode(['success' => false, 'error' => "Hata: " . $conn->error]);
    }
}

$conn->close();
?>
