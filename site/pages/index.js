
/**
 * load Marketo form
 */
MktoForms2.loadForm("//app-sj08.marketo.com", "797-ENI-742", 2446);

// expand / collapse agenda rows
/*
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
*/

/**
 * expand / collapse long passages of text
 */
 /*
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
*/

(function ($) {
	"use strict";

	$(".js-cs-top").on("click", function(){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		
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