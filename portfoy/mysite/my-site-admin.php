<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'my-site-db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['admin_mail']) || !isset($data['admin_password'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Geçersiz veriler"
    ]);
    exit;
}

$admin_mail = $data['admin_mail'];
$admin_password = $data['admin_password'];

// Veritabanında admin'i kontrol edelim
$sql = "SELECT * FROM admins WHERE admin_mail = ? AND admin_password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $admin_mail, $admin_password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Giriş başarılı
    $admin = $result->fetch_assoc();
    echo json_encode([
        "status" => "success",
        "message" => "Giriş başarılı",
        "admin_name" => $admin['admin_name'],
        "admin_id" => $admin['admin_id']
    ]);
} else {
    // Giriş başarısız
    echo json_encode([
        "status" => "error",
        "message" => "Geçersiz e-posta veya şifre"
    ]);
}

$conn->close();
?>
