jQuery(document).ready(function() {


//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = jQuery('.owl-carousel');
	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000
	});
	//Переключение слайдов
	owl.on(".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	jQuery(".next_button").click(function(){
		owl.trigger('next.owl');
	});
	jQuery(".prev_button").click(function(){
		owl.trigger('prev.owl');
	});


});