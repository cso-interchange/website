/**
 * load Marketo form
 */
MktoForms2.loadForm("//app-sj08.marketo.com", "797-ENI-742", 2446);

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

	$(".title-speaker-container").on("click", function(event){
		if ($(event.currentTarget).hasClass("expanded")) {
			$(event.currentTarget).removeClass("expanded").addClass("collapsed");
			$(event.currentTarget).parent(".description").find(".abstract").addClass("hidden");
		} else if ($(event.currentTarget).hasClass("collapsed")) {
			$(event.currentTarget).removeClass("collapsed").addClass("expanded");
			$(event.currentTarget).parent(".description").find(".abstract").removeClass("hidden");
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

/**
 * wrap marketo form fields in a div
 */
(function ($) {
	"use strict";

	MktoForms2.whenReady(function (form) {
		var $emailField = $("#Email").parents(".mktoFormRow").addClass("field");
		var $buttonField = $(".mktoButtonRow").addClass("field");
	});

}(jQuery));

/**
 * show thank you message
 */
(function ($) {
	"use strict";

	if (window.location.search.indexOf("aliId") > 0) {
		$(".get-updates").text("Thank you!");
		window.scrollTo(0,document.body.scrollHeight);
	}

}(jQuery));