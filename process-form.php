<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$host = "localhost";
$username = "root";
$password = "";
$dbname = "myportfolio_db";

$conn = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error" . mysqli_connect_error());
}

$sql = "INSERT INTO myportfolio_tb (name, email, message) VALUES (?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sss", $name, $email, $message);

mysqli_stmt_execute($stmt);

header('Location: index.html');
