<?php
// contact.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $options = isset($_POST['options']) ? $_POST['options'] : array();

    // Validate inputs
    if (empty($name) || empty($lastName) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid input.";
        exit;
    }

    if (empty($options)) {
        echo "Please select at least one option.";
        exit;
    }

    // Create the email content
    $optionsStr = implode(", ", $options);
    $emailContent = "Name: $name\n";
    $emailContent = "Last Name: $lastName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Looking for: $optionsStr\n\n";
    $emailContent .= "Message:\n$message\n";

    // Email settings
    $to = "chezlincooke@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "There was a problem sending your message. Please try again later.";
    }
}
?>