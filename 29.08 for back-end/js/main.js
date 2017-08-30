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
  autoplay: 2000,
  // If we need pagination
  pagination: '.swiper-pagination',
  slidesPerView: 4,
  breakpoints: {
     // when window width is <= 320px
     320: {
       slidesPerView: 1,
      
     },
     // when window width is <= 480px
     606: {
       slidesPerView: 1,
       spaceBetween: 0
     },
     // when window width is <= 640px
     640: {
       slidesPerView: 2,
       spaceBetween: 30
     },
    896: {
       slidesPerView: 2,
     },
     1170: {
       slidesPerView: 3,
     }
   },
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
	breakpoints: {
	   // when window width is <= 320px
	   320: {
	     slidesPerView: 2,
	    
	   },
	   // when window width is <= 480px
	   480: {
	     slidesPerView: 3,
	     spaceBetween: 0
	   },
	   // when window width is <= 640px
	   640: {
	     slidesPerView: 4,
	     spaceBetween: 0,
	     // spaceBetween: 30
	   },
	   768: {
	      slidesPerView: 4,
	      spaceBetween: 0,
	    },
	  992: {
	     slidesPerView: 5,
	     spaceBetween: 0,
	   },

	   1170: {
	     slidesPerView: 6,
	     spaceBetween: 0,
	   }
	 },
})


var myFourthSwiper = new Swiper('.swiper-container4', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// autoplay: 2000,

	// Navigation arrows
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 6,
	breakpoints: {
	   // when window width is <= 320px
	   320: {
	     slidesPerView: 1,
	    
	   },
	   // when window width is <= 480px
	   480: {
	     slidesPerView: 1,
	     spaceBetween: 0
	   },
	   // when window width is <= 640px
	   640: {
	     slidesPerView: 2,
	     spaceBetween: 0,
	     // spaceBetween: 30
	   },
	   768: {
	      slidesPerView: 3,
	      spaceBetween: 0,
	    },
	  992: {
	     slidesPerView: 3,
	     spaceBetween: 0,
	   },

	   1170: {
	     slidesPerView: 4,
	     spaceBetween: 0,
	   }
	 },
});

var myThirdSwiper = new Swiper('.swiper-container5', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	  spaceBetween: 0, /*-17*/
	// autoplay: 2000,
	// If we need pagination
	// pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 7,
	breakpoints: {
	   // when window width is <= 320px
	   320: {
	     slidesPerView: 1,
	    
	   },
	   // when window width is <= 480px
	   480: {
	     slidesPerView: 2,
	     spaceBetween: 0
	   },
	   // when window width is <= 640px
	   640: {
	     slidesPerView: 3,
	     spaceBetween: 0,
	     // spaceBetween: 30
	   },
	   768: {
	      slidesPerView: 4,
	      spaceBetween: 0,
	    },
	  992: {
	     slidesPerView: 5,
	     spaceBetween: 0,
	   },

	   1170: {
	     slidesPerView: 6,
	     spaceBetween: 0,
	   }
	 },
})

var myFourthSwiper = new Swiper('.swiper-container6', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// autoplay: 2000,

	// Navigation arrows
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 4,
	breakpoints: {
	   // when window width is <= 320px
	   320: {
	     slidesPerView: 1,
	    
	   },
	   // when window width is <= 480px
	   480: {
	     slidesPerView: 1,
	     spaceBetween: 0
	   },
	   // when window width is <= 640px
	   640: {
	     slidesPerView: 2,
	     spaceBetween: 0,
	     // spaceBetween: 30
	   },
	   768: {
	      slidesPerView: 3,
	      spaceBetween: 0,
	    },
	  992: {
	     slidesPerView: 3,
	     spaceBetween: 0,
	   },

	   1170: {
	     slidesPerView: 4,
	     spaceBetween: 0,
	   }
	 },
});

var myFifthSwiper = new Swiper('.swiper-container7', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	  spaceBetween: 0, /*-17*/
	// autoplay: 2000,
	// If we need pagination
	// pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 6,
	breakpoints: {
	   // when window width is <= 320px
	   320: {
	     slidesPerView: 1,
	    
	   },
	   // when window width is <= 480px
	   480: {
	     slidesPerView: 2,
	     spaceBetween: 0
	   },
	   // when window width is <= 640px
	   640: {
	     slidesPerView: 3,
	     spaceBetween: 0,
	     // spaceBetween: 30
	   },
	   768: {
	      slidesPerView: 4,
	      spaceBetween: 0,
	    },
	  992: {
	     slidesPerView: 5,
	     spaceBetween: 0,
	   },

	   1170: {
	     slidesPerView: 6,
	     spaceBetween: 0,
	   }
	 },
})

  /* -------------------------  */
 /* ---------GAMBURGER---------*/ 
/* -------------------------  */ 


function myFunction() {
var x = document.getElementById("myTopnav");
	if(x.className === "topnav") {
	  x.className += " responsive";
	}
	else {
		  x.className += " anim"; 
		setTimeout(function() {
			 x.className = "topnav";
		   }, 600);
	}
}



  /* -------------------------  */
 /* ---------Dropnav-menu----  */ 
/* -------------------------  */


if (window.matchMedia('(min-width: 992px)').matches) {
	$( ".parent-dropdown" ).hover(
	  function() {

	    $('.topnav .services-list').addClass( "fadeInDownMenu" );
	    

	  }, function() {

	  	$('.topnav .services-list').addClass( "fadeInDownReverceMenu" );
	  	$('.topnav .services-list').removeClass( "fadeInDownMenu" );
		  	setTimeout(function() {
		  		$('.topnav .services-list').removeClass( "fadeInDownReverceMenu" );
		  	}, 400);
	  
	  }
	);


}
   // check if exist burger
if (window.matchMedia('(max-width: 992px)').matches) {
	var services = document.getElementById('go-services');
	var hideeLi  = document.querySelector('.parent-dropdown');
	var myNav    = document.getElementById('myTopnav');
	if(services == null) {
		
		hideeLi.classList.add('hidden');
	}
}

  /* -------------------------  */
 /* ---------POPUPS----------  */ 
/* -------------------------  */ 

/*order*/
var popupBtn = document.getElementById("popup-btn");
var popup    = document.querySelector(".popup-wrapper");
var closeSpan    = document.getElementById("closeMe");

	function myPopup() {
		popup.classList.add("fadeInDown");
		$('.leave-order').css("z-index", "20");
		

		if (window.matchMedia('(max-width: 992px)').matches) {
			$('body').css('overflow', 'hidden');
			$('#popup').css({'overflow-x': 'hidden', "bottom":"0"});
			$('.icon').css({'z-index': '1', "opacity":".99"});
		}

  }

	function close() {
		popup.classList.add("fadeInDownReverce");
		popup.classList.remove("fadeInDown"); 
		 $('.leave-order').css("z-index", "5");

		 if (window.matchMedia('(max-width: 992px)').matches) {
		 	$("body").css("overflow", "inherit");
		 	$('#popup').css({'overflow-x': 'inherit', "bottom":"auto"});
		 	$('.icon').css({'z-index': '20', "opacity":"1"});
		 }

		 
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
		if(!(closeSpanQuestion == null)) {
		popupQuestion.classList.add("fadeInDown");

			if (window.matchMedia('(max-width: 992px)').matches) {
				$('body').css('overflow', 'hidden');
				$('.question-popup').css({'overflow-x': 'hidden', "bottom":"0"});
				
			}
		}
  }

		if(!(closeSpanQuestion == null)) {
	function closeQuestion() {
		popupQuestion.classList.add("fadeInDownReverce");
		popupQuestion.classList.remove("fadeInDown"); 
		setTimeout(function() {
		popupQuestion.classList.remove("fadeInDownReverce");
		}, 1000);

		if (window.matchMedia('(max-width: 992px)').matches) {
			$("body").css("overflow", "inherit");
			$('.question-popup').css({'overflow-x': 'inherit', "bottom":"auto"});
			
		}
	}
closeSpanQuestion.addEventListener('click', closeQuestion);
}

/*review*/


var popupReview    = document.querySelector(".review-popup");
var closeSpanReview    = document.getElementById("review-close");

	function myPopupReview(){
		if(!(closeSpanReview == null)) {
		popupReview.classList.add("fadeInDown");
		
		if (window.matchMedia('(max-width: 992px)').matches) {
			$('body').css('overflow', 'hidden');
			$('.review-popup').css({'overflow-x': 'hidden', "bottom":"0"});
			
		}
  }

	function closeReview() {
		popupReview.classList.add("fadeInDownReverce");
		popupReview.classList.remove("fadeInDown"); 

		if (window.matchMedia('(max-width: 992px)').matches) {
			$("body").css("overflow", "inherit");
			$('.question-popup').css({'overflow-x': 'inherit', "bottom":"auto"});
			
		}

		setTimeout(function() {
		popupReview.classList.remove("fadeInDownReverce");
		}, 1000);
	}

closeSpanReview.addEventListener('click', closeReview);
}

  /* -------------------------  */
 /* ---------GO-TO-----------  */ 
/* -------------------------  */

//top
$(".go-top").click(function() {
	$('html, body').animate({
		scrollTop: $(".header").offset().top
	}, 2000);
});
//services
$(".parent-dropdown a").click(function() {
	$('html, body').animate({
		scrollTop: $("#go-services").offset().top
	}, 1000);
});


if(!( myClick == null )) {
	var myClick = document.querySelector('.more-panel');
	function visibleMore() {
		if($('.more-panel').hasClass('more')) {
		  $('#test1').addClass('visible');
		}
	}
	myClick.addEventListener('click', visibleMore);
}


$('.refresh').click(function(){
	$(this).addClass('hidden');
});




