<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'my-site-db.php'; // Veritabanı bağlantısını dahil et

$sql = "SELECT * FROM projects"; // Tüm yazıları al
$result = $conn->query($sql);

$projects = array();

if ($result->num_rows > 0) {
    // Her yazıyı diziye ekle
    while ($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
}

// JSON formatında döndür
echo json_encode($projects);

// Bağlantıyı kapat
$conn->close();
?>
