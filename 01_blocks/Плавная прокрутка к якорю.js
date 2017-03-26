//Плавная прокрутка к якорю


//HTML
<a class="anchor" id="otzivi"></a>

//CSS
.anchor {display: block; position: relative; top: 0px; visibility: hidden;}


//JS jQuery
jQuery(document).ready(function() {

// Прокрутка к якорю
jQuery('a[href^="#to_"]').click( function(){
	var scroll_el = jQuery(this).attr('href');
	if (jQuery(scroll_el).length != 0) {
			jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top }, 500);
	}
	return false;
});

});