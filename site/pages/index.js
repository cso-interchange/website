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