<?php
// Veritabanı bağlantısını dahil et
require_once 'my-site-db.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS ayarları
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// OPTIONS isteklerine hızlı cevap ver
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// JSON yanıt başlığı
header('Content-Type: application/json');
$data = json_decode(file_get_contents("php://input"), true);

// Değişkenleri kontrol et
$name = isset($data['name']) ? $data['name'] : null;
$email = isset($data['email']) ? $data['email'] : null;
$message = isset($data['message']) ? $data['message'] : null;

// Verilerin boş olup olmadığını kontrol et
if (!empty($name) && !empty($email) && !empty($message)) {
    // Veritabanına ekleme sorgusu
    $sql = "INSERT INTO messages (message_name, message_mail, message_discription) VALUES ( ?, ?, ?)";

    // Sorguyu hazırlayın
    $stmt = $conn->prepare($sql);

    // Parametreleri bağlayın (düzeltilmiş)
    $stmt->bind_param("sss", $name, $email, $message);

    // Sorguyu çalıştırın
    if ($stmt->execute()) {
        echo json_encode(["message" => "Mesaj başarıyla kaydedildi!"]);
    } else {
        echo json_encode(["error" => "Mesaj kaydedilirken hata oluştu: " . $conn->error]);
    }

    // Sorguyu kapatın
    $stmt->close();
} else {
    echo json_encode(["error" => "Lütfen tüm alanları doldurun."]);
}

// Veritabanı bağlantısını kapat
$conn->close();
?>
