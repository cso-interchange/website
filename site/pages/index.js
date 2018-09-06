
(function ($) {
	"use strict";

	/**
	 * wrap marketo form fields in a div
	 */

	MktoForms2.whenReady(function (form) {
		var $emailField = $("#Email").parents(".mktoFormRow").addClass("field");
		var $buttonField = $(".mktoButtonRow").addClass("field");
	});

	// hero content read more on mobile devices
	$('.cso-hero-more__action').on('click', function(){
		$(".cso-hero-more").toggleClass("show-more");
		$(this).toggleClass("more-action-show");
	});

	// smooth scroll to signup section
	$('.js-signup').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.js-signup-section').offset().top
		}, 200);
	});

}(jQuery));

/**
 * show thank you message
 */
 /*
(function ($) {
	"use strict";

	if (window.location.search.indexOf("aliId") > 0) {
		$(".get-updates").text("Thank you!");
		window.scrollTo(0,document.body.scrollHeight);
	}

}(jQuery));
*/

/**
 * when click bio link, expand person's bio
 */
 /*
(function ($) {
	"use strict";

	$(".bio-link").on("click", function (event) {
		var speaker = $(event.currentTarget).attr("data-speaker");
		var $bioWrapper = $("#"+speaker + " .bio-wrapper");
		if ($bioWrapper.hasClass("expanded") === false) {
			$bioWrapper.click();
		}
	});

}(jQuery));
*/