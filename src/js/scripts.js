$(document).ready(function() {

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(e) {
        e.preventDefault();
        if ($(window).width() > 768) {
            $('html, body').animate({
                scrollTop: ($(this.hash).offset().top + 10)
                }, 1200, "easeInOutExpo");
                return false;
        } else {
            $('html, body').animate({
                scrollTop: ($(this.hash).offset().top - 200)
                }, 1200, "easeInOutExpo");
                return false;
        }
        
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Cuts text blocks after 150 characters and adds '...'
    $('.block-ellipsis').each(function() {
        if ($(this).text().length > 150) {
            $(this).text($(this).text().slice(0,150).trim().concat('...'));
        }
    });
});