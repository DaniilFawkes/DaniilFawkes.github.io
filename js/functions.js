$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
});

$(document).ready(function(){
	$(".toggle_menu").click(function(){
		$(".sidebar_menu").addClass("opened_menu");
		$(".toggle_menu").addClass("opacity_null");
	});

	$(".fa-times").click(function(){
		$(".sidebar_menu").removeClass("opened_menu");
		$(".toggle_menu").removeClass("opacity_null");
	});

});
