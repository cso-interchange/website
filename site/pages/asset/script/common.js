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

	// scroll to register cta
	$('a.cso-header__register-button[href^="#"]').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.js-register-section').offset().top
		}, 200);
		if($(".cso-navigation-mobile").hasClass("show-mobile-menu")) {
			$(".cso-navigation-mobile").removeClass("show-mobile-menu")
		}
	});

	// show/hide mobile menu
	$(".js-menu").on("click", function(){
		$(".cso-navigation-mobile").toggleClass("show-mobile-menu");
	});

	// show thank you message
	if (window.location.search.indexOf("aliId") > 0) {
		$(".get-updates").text("Thank you!");
		window.scrollTo(0,document.body.scrollHeight);
	}

}(jQuery));