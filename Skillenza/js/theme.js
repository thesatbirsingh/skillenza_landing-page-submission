// Collapse the navbar on scroll
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".nav li a").css("color","black");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".nav li a").css("color","white");
    }
});


// Animating the process boxes on hover
$(".process-box").hover(function(){
	$(this).addClass("transformBox");
}, function(){
	$(this).removeClass("transformBox");
});




// Scrolling feature 
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-80
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Close the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Nav Toggle Button Animation
$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });
});



