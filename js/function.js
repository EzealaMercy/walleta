(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.load(function() {
	   $(".preloader").fadeOut(600);
    });
		
	/* Top Menu */
	var mainnav = $("#main-nav");
	$body.attr( 'data-offset', mainnav.outerHeight() );
	$(document).on('click','#navigation ul li a, #responsive-menu ul li a',function(){
		var id = $(this).attr('href');
		var h = Math.ceil( parseFloat($(id).offset().top) );
		$('body,html').stop().animate({
			scrollTop: h - 71
		}, 800);
		return false;
	});
		
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* Add active class to tab panel */
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
		if (e.type=='show'){
		  $(this).addClass('active');
		}else{
		  $(this).removeClass('active');
		}
	 });  
	
	/* Testimonial Swiper Slider */
	var swiper = new Swiper('.testimonial-slider', {
		speed: 400,
		spaceBetween: 30,
		slidesPerView: 6,
		pagination: {
			el: '.testimonial-pagination',
			clickable: true
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			
			768: {
				slidesPerView: 3	
			},
			
			991: {
				slidesPerView: 4	
			},
		},
	});
	
	/* Screenshot slider start */
	var app_swiper = new Swiper('.screenshot-slider', {
		slidesPerView: 3,
		spaceBetween: 80,
		centeredSlides: true,
		navigation: {
			nextEl: '.screenshot-button-next',
			prevEl: '.screenshot-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 1	
			}
		},
		on:{
			init: function () {
				var slide_text = $(".swiper-slide-active .swiper-slide-text").html();
				$('.swiper-slide-right-text').html(slide_text);
			},
		},
    });
	
	app_swiper.on('slideChangeTransitionEnd', function () {
		var slide_text = $(".swiper-slide-active .swiper-slide-text").html();
		$('.swiper-slide-right-text').hide();
		$('.swiper-slide-right-text').html(slide_text);
		$('.swiper-slide-right-text').fadeIn(500);
	});
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 5, time: 2000 });
	
	/* Popup video */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: true,
    });
	
	/* Contact form validation */
	var $contactform=$("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Initiate Variables With Form Content*/
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);