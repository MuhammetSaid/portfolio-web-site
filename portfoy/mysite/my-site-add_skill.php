<?php
// error_reporting for development
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Veritabanı bağlantısını içe aktar
include 'my-site-db.php';

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

// React frontend tarafından gönderilen veriyi JSON olarak al
$data = json_decode(file_get_contents('php://input'), true);

// Gerekli tüm veriler geldi mi kontrol et
if (
    isset($data['skill_img']) &&
    isset($data['skill_name']) &&
    isset($data['skill_disc']) &&
    isset($data['skill_evaluation']) // 'evaluation' doğru yazıldı
) {
    // Veritabanına ekleme işlemi
    $sql = "INSERT INTO skills (skill_name, skill_img, skill_disc, skill_evaluation) 
            VALUES (?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "ssss",
        $data['skill_name'],
        $data['skill_img'],
        $data['skill_disc'],
        $data['skill_evaluation']
    );

    if ($stmt->execute()) {
        // Başarılıysa yanıt ver
        echo json_encode([
            "success" => true,
            "message" => "Skill added successfully!",
            "skill" => $data
        ]);
    } else {
        // Hata varsa yanıt ver
        echo json_encode([
            "success" => false,
            "message" => "Error adding skill: " . $stmt->error
        ]);
    }
} else {
    // Eksik veri varsa hata yanıtı
    echo json_encode([
        "success" => false,
        "message" => "Incomplete data"
    ]);
}

$conn->close();
