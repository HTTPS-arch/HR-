<?php
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone_no = $_POST['phone_no'];
    $location = $_POST['location'];
    $enquiry_for = $_POST['enquiry_for'];
    $message = $_POST['message'];

    $conn = new mysqli( 'localhost', 'avala3qf_manpower', 'G1i9r9i9sh@#', 'avala3qf_manpower');

    if($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO manpowerapp_contactusdetails(full_name, email, phone_no, location, enquiry_for, message) VALUES(?,?,?,?,?,?)");

        if (!$stmt) {
            die('Error in prepare statement: ' . $conn->error);
        }

        $stmt->bind_param("ssisss", $full_name, $email, $phone_no, $location, $enquiry_for, $message);

        if (!$stmt->execute()) {
            die('Error in execute statement: ' . $stmt->error);
        }

        echo "Success...";
        
        $stmt->close();
        $conn->close();
    }
?>
