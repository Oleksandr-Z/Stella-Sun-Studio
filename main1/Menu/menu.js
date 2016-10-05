$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 144) {
            $('nav.main-nav').addClass('stickytop');
        }
        else {
            $('nav.main-nav').removeClass('stickytop');
        }
    });
    var page = $("html, body");

    $('div.up').click(function(e) {
        actualScroll = 0;
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
            page.stop();
        });
        page.animate({ scrollTop: $(this).position().top }, 800, function(){
            page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });

        return false; 
    });
    var actualScroll = 1;
    $('div.down').click(function () {
        var temp = $('.scrollTo' + actualScroll++);
        $.scrollTo(temp, 800, {offset:-120  });
        if (actualScroll > 4) {
            actualScroll = 0;
        }
    });



});
