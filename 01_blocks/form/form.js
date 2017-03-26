$(document).ready(function() { 

// -= Аякс отправка форм =-
	//Очистка формы
$("input[type='reset']").click(function() {
	$('#contact-form__error').html('');
});


$(".contact-form__submit").click(function() {
 if ($('#contact-form__email').val() == "") {
     $('#contact-form__error').fadeIn(1000).html('Как с Вами связаться?<br>Введите Вашу Почту');
     document.getElementById('contact-form__email').focus();
 } else {
   $.ajax({
   type: "GET",
   url: "mail.php",
   data: $("#contact").serialize()
 }).done(function() {
   $('#contact-form__error').fadeIn(1000).html('Сообщение успешно отправлено');
 });
}
 return false;
});

}); //ready