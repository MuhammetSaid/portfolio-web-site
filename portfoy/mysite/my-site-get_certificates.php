<?php




header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include 'my-site-db.php';

$sql = "SELECT * FROM certificates";
$result = $conn->query($sql);

$certificates = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $certificates[] = $row;
    }
}

echo json_encode($certificates);

$conn->close();
?>
