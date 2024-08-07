$(document).ready(function() {
    $('a[href="index.html"].btn-up').fadeOut('slow');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) 
            $('a[href="index.html"].btn-up').fadeIn('slow');
        else 
            $('a[index.html"].btn-up').fadeOut('slow');
    });
});