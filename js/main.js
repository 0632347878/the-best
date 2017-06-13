var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoplay: 2000,
	// If we need pagination
	pagination: '.swiper-pagination',
	// Navigation arrows
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
});

var mySecondSwiper = new Swiper('.swiper-container2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // autoplay: 2000,
  // If we need pagination
  pagination: '.swiper-pagination',
  slidesPerView: 4,
});

var myThirdSwiper = new Swiper('.swiper-container3', {
	// Optional parameters
	direction: 'horizontal',
	// loop: true,
	// autoplay: 2000,
	// If we need pagination
	// pagination: '.swiper-pagination',
	nextButton: 'swiper-button-next3',
	prevButton: 'swiper-button-prev3',
	slidesPerView: 9,
})