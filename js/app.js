

let burger = document.querySelector("#nav_toggle");
burger.addEventListener("click" , function () {
	burger.classList.toggle("active");
	let header = document.querySelector("#header");
	header.classList.toggle("active");
	let nav = document.querySelector("#nav");
	nav.classList.toggle("active");
});

/* Slick slider */
$('#clients-slider').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 300,
	autoplaySpeed: 2000,
	slidesToShow: 7,
	slidesToScroll: 1,
	adaptiveHeight: true,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			
			centerMode: true,
			centerPadding: '5px',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			centerMode: true,
			centerPadding: '5px',
			slidesToShow: 2
		  }
		}
	  ]
  });

  $(function() {
	var header = $("#header");
	var introH = $("#tabs").innerHeight();
	var scrollOffset = $(window).scrollTop();

	/* Fixed Header */
	checkScroll(scrollOffset);
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
			
		if( scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


});
/*плавный переход между страницами*/
$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(500);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
