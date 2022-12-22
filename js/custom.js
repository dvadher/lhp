$(document).ready(function () {
	/*====================== js for sticky and mobile menu ====================== */
	var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
	$(".main_page").css('min-height', min_height + 'px');
	$(window).resize(function () {
		var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
		$(".main_page").css('min-height', min_height + 'px');
	});

	$(window).scroll(function () {
		var navHeight = $('#custom-header').height();
		var sticky = $('#custom-header');
		if ($(window).scrollTop() > 0) {
			sticky.addClass("sticky")
			$('#dashboard-page').css('padding-top', navHeight + "px");
		} else {
			sticky.removeClass("sticky");
			$('#dashboard-page').css('padding-top', 0);
		}
	});
	$('.jb_front_nav_close button').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});

	var kursorx = new kursor({
		type: 4,
		color: 'rgba(0,0,0,0)',
	})


	$('#services_slider').owlCarousel({
		loop: true,
		items: 1.1,
		animateOut: 'fadeOut',
		autoplay: false,
		dots: false,
		nav: true,
		navText: ["<img src='./images/arrow_2.png'> prev"," Next <img src='./images/arrow_1.png'>"],
		autoplayTimeout: 4000,
		smartSpeed: 950,
		margin:20,
		responsiveClass:true,
		responsive:{
			0:{
				items:1.1,
			},
			600:{
				items:1.1,
			},
			1000:{
				items:1.1,
			
			}
		}
	});
	/*====================== js for scrollTop ====================== */

	// // Add smooth scrolling to all links
	$(".nav_jump").on('click', function (event) {
		var _href = $(this).attr('href');
		// Make sure this.hash has a value before overriding default behavior
		if (_href !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $(_href).offset().top
			}, 800, function () { });
		} // End if
	});


	AOS.init({
		duration: 1200,
	});

	$(document).on('click', '.menu_right_button', function () {
		$('.main-menuright').toggleClass('show-contact');
	});

}); /*====================== all js end ====================== */