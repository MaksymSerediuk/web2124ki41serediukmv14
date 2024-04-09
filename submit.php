<!-- submit.php -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Ваша логіка обробки даних
    // Наприклад, збереження в базу даних або відправка на електронну пошту

    // Відправка підтвердження назад на клієнтську сторінку
    echo json_encode(array("status" => "success"));
} else {
    // Якщо запит не є POST, повернемо помилку
    echo json_encode(array("status" => "error"));
}
?>
