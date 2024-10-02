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
    isset($data['education_img']) &&
    isset($data['education_name']) &&
    isset($data['education_grade']) &&
    isset($data['education_department']) &&
    isset($data['education_start']) &&
    isset($data['education_end']) &&
    isset($data['education_gpa'])
) {
    // Veritabanına ekleme işlemi
    $sql = "INSERT INTO education (education_img, education_name, education_grade, education_department, education_start, education_end, education_gpa) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "sssssss",
        $data['education_img'],
        $data['education_name'],
        $data['education_grade'],
        $data['education_department'],
        $data['education_start'],
        $data['education_end'],
        $data['education_gpa']
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
