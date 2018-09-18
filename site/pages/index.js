/* global jQuery MktoForms2 */

(function ($, MktoForms2) {

	"use strict";

	/**
	 * wrap marketo form fields in a div
	 * TODO this comment does not match the code
	 * NOTE, Marketo is often blocked by tracking/privacy/ad blockers
	 */
	if (MktoForms2) {
		MktoForms2.whenReady(function (form) {
			let $form = form.getFormElem();
			$form.find("#Email").parents(".mktoFormRow").addClass("field");
			$form.find(".mktoButtonRow").addClass("field");
		});
	}

	// hero content read more on mobile devices
	$(".cso-hero-more__action").on("click", function(){
		$(".cso-hero-more").toggleClass("show-more");
		$(this).toggleClass("more-action-show");
	});

	// smooth scroll to signup section
	$(".js-signup").on("click", function(){
		$("html, body").animate({
			scrollTop: $(".js-signup-section").offset().top
		}, 200);
	});

}(window.jQuery, window.MktoForms2));


/**
 * when click bio link, expand person’s bio
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