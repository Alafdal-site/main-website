$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 20);
});

$('.card').mouseenter(function(){
        $(this).find('.card-hover').css({'top':'0'});
}).mouseleave(function(){
        $(this).find('.card-hover').css({'top':'100%'});
});

function autoResizeDiv()
        {
            document.getElementById('home').style.height = window.innerHeight  +'px';            
        }
        window.onresize = autoResizeDiv;
        autoResizeDiv();

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 800,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000
  });

