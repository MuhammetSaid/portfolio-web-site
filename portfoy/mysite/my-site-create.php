<?php
// Veritabanı bağlantısını dahil et
include 'my-site-db.php'; // db.php dosyasını buradaa dahil ediyoruz

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// POST isteği geldiğinde
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verileri güvenli bir şekilde al
    $title = $conn->real_escape_string($_POST['title']);
    $content = $conn->real_escape_string($_POST['content']);
    $author = $conn->real_escape_string($_POST['author']);
    $mainImage = $conn->real_escape_string($_POST['mainImage']); // URL olarak al
    $shortContent = $conn->real_escape_string($_POST['shortContent']);

    // Veritabanına ekleme işlemi
    $sql = "INSERT INTO posts (title, content, image, categori_id, created_by, short_content) 
            VALUES ('$title', '$content', '$mainImage', 1, '$author', '$shortContent')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => "Yeni yazı başarıyla oluşturuldu."]);
    } else {
        echo json_encode(['success' => false, 'error' => "Hata: " . $conn->error]);
    }
}

// Bağlantıyı kapat
$conn->close();
?>
