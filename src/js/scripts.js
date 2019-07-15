$(document).ready(function() {

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: (target.offset().top + 10)
                }, 1200, "easeInOutExpo");
                return false;
            }
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