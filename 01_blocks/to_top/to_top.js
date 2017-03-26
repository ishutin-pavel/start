jQuery(document).ready(function() {


// Прокрутка к якорю
 jQuery('a[href^="#to_"]').click( function(){
	var scroll_el = jQuery(this).attr('href');
	if (jQuery(scroll_el).length != 0) {
			jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top }, 500);
	}
	return false;
});

// Появление и исчезновение
jQuery(function(f){
		var element = f('.to_top');
		f(window).scroll(function(){
				element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
		});
});




});