<?php
include('db.php');

$username = $_POST['user'];
$password = $_POST['pass'];

// To prevent from mysqli injection
$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysqli_real_escape_string($con, $username);
$password = mysqli_real_escape_string($con, $password);

$sql = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

if ($count == 1) {
    echo "<script>window.alert('Successfully Done');</script>";
} else {
    echo "<script>window.alert('Invalid Input');</script>";
}
?>
