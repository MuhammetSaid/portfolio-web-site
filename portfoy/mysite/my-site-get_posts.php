<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'my-site-db.php'; // Veritabanı bağlantısını dahil et

$sql = "SELECT * FROM posts"; // Tüm yazıları al
$result = $conn->query($sql);

$posts = array();

if ($result->num_rows > 0) {
    // Her yazıyı diziye ekle
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
}

// JSON formatında döndür
echo json_encode($posts);

// Bağlantıyı kapat
$conn->close();
?>
