// init customers carousel
var swiper = new Swiper('.swiper-container', { // eslint-disable-line
	direction: 'horizontal',
	loop: false,
	slidesPerView: 'auto',
	scrollbar: false,
	nextButton: '.q-carousel-button--next',
	prevButton: '.q-carousel-button--prev',
	buttonDisabledClass: 'q-carousel-button--disabled',

	spaceBetween: 30
});

// swiper init workaround
setTimeout(function () {
	swiper.update(true);
}, 100);

// expand / collapse agenda rows
(function ($) {
	"use strict";

	$(".toggle").on("click", function(event){
		if ($(event.currentTarget).hasClass("expanded")) {
			console.log("expanded");
			$(event.currentTarget).removeClass("expanded").addClass("collapsed");
			$(event.currentTarget).parent("tr").find(".abstract").addClass("hidden");
		} else if ($(event.currentTarget).hasClass("collapsed")) {
			$(event.currentTarget).removeClass("collapsed").addClass("expanded");
			$(event.currentTarget).parent("tr").find(".abstract").removeClass("hidden");
		}
	});

}(jQuery));

/**
 * expand / collapse long passages of text
 */
(function ($) {
	"use strict";

	$(".bio-wrapper.expandable").on("click", function(event){
		if ($(event.currentTarget).hasClass("expanded")) {
			$(event.currentTarget).removeClass("expanded");
		} else {
			$(event.currentTarget).addClass("expanded");
		}
	});

}(jQuery));