<?php
      
	  $phone = $_POST['phone'];
	
  
	  $to = "valery_po85@mail.ru"; 
	  $date = date ("d.m.Y"); 
	  $time = date ("h:i");
	  $from = $phone;
	  $subject = "Заявка c сайта";
  
	  
	  $msg="
	  Имя: $name /n
	  Фамилия: $surname /n
	  Телефон: $phone /n
	  Почта: $email /n
	  Текст: $text"; 	
	  mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>

