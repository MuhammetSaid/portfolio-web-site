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
    isset($data['experience_kurum']) &&
    isset($data['experience_img']) &&
    isset($data['experience_when']) &&
    isset($data['experience_start']) &&
    isset($data['experience_end']) &&
    isset($data['experience_skills']) &&
    isset($data['experience_pozition'])
) {
    // Veritabanına ekleme işlemi
    $sql = "INSERT INTO experience (experience_kurum, experience_img, experience_when, experience_start, experience_end, experience_skills, experience_pozition) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "sssssss",
        $data['experience_kurum'],
        $data['experience_img'],
        $data['experience_when'],
        $data['experience_start'],
        $data['experience_end'],
        $data['experience_skills'],
        $data['experience_pozition']
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
