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
	loop: true,
	  spaceBetween: -17,
	// autoplay: 2000,
	// If we need pagination
	// pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 9,
})


var myFourthSwiper = new Swiper('.swiper-container4', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// autoplay: 2000,

	// Navigation arrows
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 5,
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if(x.className === "topnav") {
    x.className += " responsive";
  }
  else {
    x.className = "topnav";
  }
}