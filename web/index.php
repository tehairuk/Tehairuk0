<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Process the data (you can perform any actions here)
    // For example, you might send an email, store data in a database, etc.

    // For demonstration purposes, let's just print the received data
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";
} else {
    // Handle non-POST requests
    echo "Invalid request method.";
}
?>