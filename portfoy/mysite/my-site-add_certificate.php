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
// JSON yanıt başlığı
header('Content-Type: application/json');

// React frontend tarafından gönderilen veriyi JSON olarak al
$data = json_decode(file_get_contents('php://input'), true);

// Gerekli tüm veriler geldi mi kontrol et
if (
    isset($data['certificate_name']) &&
    isset($data['certificate_kurum']) &&
    isset($data['certificate_date']) &&
    isset($data['certificate_img']) &&
    isset($data['certificate_url']) &&
    isset($data['certificate_skills']) &&
    isset($data['certificate_kurum_img'])
) {
    // Veritabanına ekleme işlemi
    $sql = "INSERT INTO certificates (certificate_name, certificate_kurum, certificate_date, certificate_img, certificate_url, certificate_skills, certificate_kurum_img) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "sssssss",
        $data['certificate_name'],
        $data['certificate_kurum'],
        $data['certificate_date'],
        $data['certificate_img'],
        $data['certificate_url'],
        $data['certificate_skills'],
        $data['certificate_kurum_img']
    );

    if ($stmt->execute()) {
        // Başarılıysa yanıt ver
        echo json_encode([
            "success" => true,
            "message" => "Education added successfully!",
            "education" => $data
        ]);
    } else {
        // Hata varsa yanıt ver
        echo json_encode([
            "success" => false,
            "message" => "Error adding education: " . $stmt->error
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
