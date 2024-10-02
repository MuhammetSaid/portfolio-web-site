<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Bu satır, tüm kökenlerden gelen isteklere izin verir

function getLeetCodeData($username) {
    $url = "https://leetcode-api-faisalshohag.vercel.app/$username";

    $response = file_get_contents($url);
    
    if ($response === FALSE) {
        return json_encode(["error" => "Unable to fetch data"]);
    }

    $data = json_decode($response, true);

    if (isset($data['totalSolved'])) {
        return json_encode([
            "totalSolved" => $data['totalSolved'],
            "easySolved" => $data['easySolved'],
            "mediumSolved" => $data['mediumSolved'],
            "hardSolved" => $data['hardSolved']
        ]);
    } else {
        return json_encode(["error" => "User not found or data unavailable"]);
    }
}

$username = "muhammet_said"; // Kullanıcı adını buraya gir
echo getLeetCodeData($username);
?>
