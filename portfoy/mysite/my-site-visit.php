<?php
include 'my-site-db.php'; // Veritabanı bağlantısı
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

// Ziyareti tabloya ekle
$sql_insert = "INSERT INTO visit () VALUES ()";
if ($conn->query($sql_insert) === TRUE) {
    // Ziyaret başarılı bir şekilde eklendi
} else {
    echo "Error: " . $sql_insert . "<br>" . $conn->error;
}

// Toplam ziyaret sayısını al
$sql_count = "SELECT COUNT(*) as total_visits FROM visit";
$result = $conn->query($sql_count);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(array('total_visits' => $row['total_visits']));
} else {
    echo json_encode(array('total_visits' => 0));
}

$conn->close();
?>
