// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(0).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/5.jpg", 
	 		 "images/6.jpg"
			 // "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})