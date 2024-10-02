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
    $mainİmage = $conn->real_escape_string($_POST['mainImage']);
    $githubUrl = $conn->real_escape_string($_POST['githubUrl']); // URL olarak al
    $uniqueİmageİd = md5(uniqid(rand(), true));
    $uniqueFriendİd = md5(uniqid(rand(), true));
    $date = $conn->real_escape_string($_POST['date']);
    
    // Veritabanına ekleme işlemi
    $sql = "INSERT INTO projects (project_title, project_content, project_github_url, project_date ,project_main_img , project_img_id , friend_id ) 
            VALUES ('$title', '$content', '$githubUrl', '$date' , '$mainİmage' , '$uniqueİmageİd' , '$uniqueFriendİd')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => "Yeni yazı başarıyla oluşturuldu."]);
    } else {
        echo json_encode(['success' => false, 'error' => "Hata: " . $conn->error]);
    }
}

// Bağlantıyı kapat
$conn->close();
?>
