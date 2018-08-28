/**
 * load Marketo form
 */
MktoForms2.loadForm("//app-sj08.marketo.com", "797-ENI-742", 2446);

(function ($) {
	"use strict";

	// scroll to top
	$(".js-cs-top").on("click", function(){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});

	// events mobile menu
	$(".cso-header__cta-link").on("click", function(event){
		event.preventDefault();
		$(".cso-events__menu").toggleClass("cso-menu-show");
		$(this).toggleClass("cso-menu-open");
	});


}(jQuery));