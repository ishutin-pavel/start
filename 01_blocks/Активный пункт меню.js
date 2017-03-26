jQuery(document).ready(function() {

//Активный пункт меню
jQuery('#nav li a').each(function () {
	var location = window.location.href;
	var link = this.href;
	if(location == link) {
			jQuery(this).parents().addClass('active');
	}
});



});//ожидаем загрузку страницы