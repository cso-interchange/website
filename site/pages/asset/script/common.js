/**
 * load Marketo form
 */
MktoForms2.loadForm("//app-sj08.marketo.com", "797-ENI-742", 2446);

/*
 * scroll to top
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