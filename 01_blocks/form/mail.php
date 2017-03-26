<?php

$recepient = "youmail@ya.ru";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$message = trim($_GET["message"]);


$pagetitle = "Новая заявка с сайта \"$sitename\" $subject";
$message = "Имя: $name \nПочта: $email \nСообщение: $message";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
echo "OK";