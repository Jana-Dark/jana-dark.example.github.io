<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Тема письма";
$file = $_FILES['file'];

$c = true;

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'elektrodyuvsem@gmail.com'; // Логин на почте
  $mail->Password   = 'hezjsxyhnzfldspy'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('elektrodyuvsem@gmail.com', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('dava.jani@gmail.com');



  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;


  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
