  /* -------------------------  */
 /* ---------SLIDERS---------  */ 
/* -------------------------  */ 

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

  /* -------------------------  */
 /* ---------POPUPS----------  */ 
/* -------------------------  */ 

/*order*/
var popupBtn = document.getElementById("popup-btn");
var popup    = document.querySelector(".popup-wrapper");
var closeSpan    = document.getElementById("closeMe");

	function myPopup(){
		popup.classList.add("fadeInDown");
  }

	function close() {
		popup.classList.add("fadeInDownReverce");
		popup.classList.remove("fadeInDown"); 
		setTimeout(function() {
		popup.classList.remove("fadeInDownReverce");
		}, 1000);
	}

closeSpan.addEventListener('click', close);


/* Certificate*/

var certificatePopup = document.querySelector("#certificate");
var closeSpanSertificate = document.getElementById("certificateClose");

	function myCertificatePopup(){
		certificatePopup.classList.add("fadeInDown");
  }

	function closeCertificate() {
		// certificatePopup.classList.remove("fadeInDown"); 
		// certificatePopup.classList.add("fadeInDownReverce");
		certificatePopup.className = "fadeInDownReverce certificate-popup";
		setTimeout(function() {
		certificatePopup.classList.remove("fadeInDownReverce");
		}, 1000);
	}

closeSpanSertificate.addEventListener('click', closeCertificate);

/* question */

var popupBtnQuestion = document.getElementById("free-question-btn");
var popupQuestion    = document.querySelector(".question-popup");
var closeSpanQuestion    = document.getElementById("question-close");

	function myPopupQuestion(){
		popupQuestion.classList.add("fadeInDown");
  }

	function closeQuestion() {
		popupQuestion.classList.add("fadeInDownReverce");
		popupQuestion.classList.remove("fadeInDown"); 
		setTimeout(function() {
		popupQuestion.classList.remove("fadeInDownReverce");
		}, 1000);
	}

closeSpanQuestion.addEventListener('click', closeQuestion);

/*review*/

// var popupBtn = document.getElementById("popup-btn");
var popupReview    = document.querySelector(".review-popup");
var closeSpanReview    = document.getElementById("review-close");

	function myPopupReview(){
		popupReview.classList.add("fadeInDown");
  }

	function closeReview() {
		popupReview.classList.add("fadeInDownReverce");
		popupReview.classList.remove("fadeInDown"); 
		setTimeout(function() {
		popupReview.classList.remove("fadeInDownReverce");
		}, 1000);
	}

closeSpanReview.addEventListener('click', closeReview);


  /* -------------------------  */
 /* ---------GO-TO-----------  */ 
/* -------------------------  */

$(".go-top").click(function() {
	$('html, body').animate({
		scrollTop: $(".header").offset().top
	}, 2000);
});