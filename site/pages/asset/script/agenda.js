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

}(window.jQuery));

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

	// when click bio link, expand person's bio
	$(".bio-link").on("click", function (event) {
		var speaker = $(event.currentTarget).attr("data-speaker");
		var $bioWrapper = $("#"+speaker + " .bio-wrapper");
		if ($bioWrapper.hasClass("expanded") === false) {
			$bioWrapper.click();
		}
	});

}(window.jQuery));
