jQuery(document).ready(function() { 

jQuery("input[type='tel']").inputmask("+7 (999) 999-99-99");

jQuery('a[href^="#to_"]').click( function(){
	var scroll_el = jQuery(this).attr('href');
	if (jQuery(scroll_el).length != 0) {
			jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top }, 500);
	}
	return false;
});


// -= Аякс отправка форм =-
// jQuery(".popup__form_button").click(function() {
	
// 	if (jQuery('#popup__form_phone').val() == "") {
// 			jQuery('.popup__form_phone_error').fadeIn(1000).html('Как с Вами связаться?');
// 			document.getElementById('popup__form_phone').focus();
// 	} else {
// 		jQuery.ajax({
// 		type: "GET",
// 		url: "http://goldencoinses.ru.local/wp-content/themes/goldencoinses/mail.php",
// 		data: jQuery("#popup__form").serialize()
// 	}).done(function() {
// 		jQuery.fancybox.close();
// 		jQuery.fancybox.open({
// 			src  : '#thanks',
// 			type : 'inline'
// 		});
// 	});
// }
// 	return false;
// });

});//ready