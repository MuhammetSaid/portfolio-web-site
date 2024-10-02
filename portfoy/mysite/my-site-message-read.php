<?php
// Veritabanı bağlantısı dosyasını dahil ediyoruz
include 'my-site-db.php';

// Hataları görebilmek için ayarları açıyoruz
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS İzinleri: React uygulamasından gelen istekleri işleyebilmek için gerekli
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS isteği durumunda CORS kontrolü (Preflight requests)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// POST isteği ile çalışıyoruz
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // JSON formatındaki POST verisini alıyoruz
    $data = json_decode(file_get_contents('php://input'), true);

    // Gelen POST verisinin doğruluğunu kontrol ediyoruz
    if (isset($data['id']) && is_numeric($data['id'])) {
        $post_id = $data['id'];

        // SQL sorgusunu prepare ve bind_param ile güvenli hale getiriyoruz
        $stmt = $conn->prepare("UPDATE messages SET is_read = 1 WHERE message_id = ?");
        $stmt->bind_param("i", $post_id);

        // Sorguyu çalıştırıyoruz ve sonucu kontrol ediyoruz
        if ($stmt->execute()) {
            // Başarılı bir şekilde silindiğinde geri dönen mesaj
            echo json_encode(['success' => true, 'message' => "Mesaj başarıyla silindi."]);
        } else {
            // Hata durumunda geri dönen mesaj
            echo json_encode(['success' => false, 'error' => "Sorgu hatası: " . $stmt->error]);
        }

        // Sorguyu kapatıyoruz
        $stmt->close();
    } else {
        // ID eksik veya geçersizse hata mesajı döndürülür
        echo json_encode(['success' => false, 'error' => "Geçersiz veya eksik ID."]);
    }
}

// Veritabanı bağlantısını kapatıyoruz
$conn->close();
?>
