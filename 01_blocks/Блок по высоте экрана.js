jQuery(document).ready(function($) {

//Делаем block_1 по высоте экрана
function body__bg_height() {
	jQuery('.body__bg').css({
			height: jQuery(window).height() + 'px'
	});
}
body__bg_height(); // устанавливаем высоту окна при первой загрузке страницы
jQuery(window).resize( body__bg_height ); // обновляем при изменении размеров окна



});//ready