$(function(){
	var win = $(window);
	
	$('.ss-nav__item').on('click',function(e){
		e.preventDefault();	
		win.off('scroll');
		var id = $(this).attr("href");
		var selectedID = id.substr(1,id.length);
		var scrollY = $(id).offset().top;
		$("html, body").animate({ scrollTop: scrollY }, 500, "easeOutQuint");
	});
});