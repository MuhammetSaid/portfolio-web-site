<?php
include 'my-site-db.php';

// Son kayda ziyaret ekleme veya yeni kayıt ekleme
$sql = "UPDATE site_visits SET visit_count = visit_count + 1 WHERE id = 1"; // Veya ID'ye göre farklı ziyaretler
$conn->query($sql);

$conn->close();
?>
