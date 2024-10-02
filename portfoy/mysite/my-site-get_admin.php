<?php
// Hata raporlamayı etkinleştir
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'my-site-db.php';
// CORS başlıklarını ayarlayın
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Eğer isteğin yöntemi OPTIONS ise, hemen dönebilirsiniz
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Veritabanı bağlantısını dahil edin


// React'ten gelen JSON verisini alalım
$data = json_decode(file_get_contents('php://input'), true);

// Gönderilen ID'yi alalım
$adminId = $data['id'];

// SQL sorgusunu hazırlayalım
$sql = "SELECT * FROM admins WHERE admin_id = ?";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    die("MySQL hata: " . $conn->error);
}

$stmt->bind_param("i", $adminId);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(["message" => "Admin bulunamadı"]);
}

$stmt->close();
$conn->close();
?>
