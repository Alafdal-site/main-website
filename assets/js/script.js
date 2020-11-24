$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 20);
});

$('.card').mouseenter(function(){
        $(this).find('.card-hover').css({'top':'0'});
}).mouseleave(function(){
        $(this).find('.card-hover').css({'top':'100%'});
});

$(window).load(function() {
	$(".loader").delay(500).fadeOut("slow");
  $("#overlayer").delay(500).fadeOut("slow");
})