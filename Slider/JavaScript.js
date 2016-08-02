$(document).ready(function () {

    //generate markup
    generate();
    function generate() {
        $('.slider').children().wrapAll("<div class='slide'></div>");
        $('<div/>', { class: 'pagination' }).appendTo('.slide');
        for (var i = 0; i < $('.slide').children('img').length; i++) {
            $('<a/>', { "href": "#" }).appendTo('.pagination');
        }
    }

    var p; //temporary variable
    function slideShow(container, tag, contPag, tagPag, contText, duration) {
        var sl = $(container).children(tag);  //slides
        var par = $(container).children(contText); //text blocks
        var pg = $(contPag).children(tagPag); //navigation links
        var sla = $(container + ' ' + tag + '.active');//  active slide
        var pga = $(contPag + ' ' + tagPag + '.active');// active navigation link

        pg.click(handle);// add event listener on click navigation link

        if (!sla.length) {          // if not active slides - activate first
            p = sl.eq(0).addClass('active').fadeIn(1000);
            pg.eq(0).addClass('active');
            animText();
        }
        else {
            p = sl.eq((sl.index(sla) + 1) % sl.length).addClass('active').fadeIn(1000); // activate next slide
            pg.eq((sl.index(sla) + 1) % sl.length).addClass('active');
            animText();
            pga.removeClass('active');
            sla.removeClass('active').fadeOut(1000);  //deactivate previously slide
        }

        timer = setTimeout(slideShow, duration, container, tag, contPag, tagPag, contText, duration); // run all again

        function handle() {                            //user navigtion function
            slieStop();
            par.removeAttr('style').css('display', 'none');
            pg.removeClass('active');
            sl.removeClass('active').fadeOut(1000);
            p = sl.eq((pg.index(this))).addClass('active').stop().fadeIn(1000);
            pg.eq((pg.index(this))).addClass('active');
            animText();
            timer = setTimeout(slideShow, duration, container, tag, contPag, tagPag, contText, duration);

        }


        function animText() {                           //text animation
            n = p.prev(contText);
            p = p.prev(contText).prev(contText);
            tBig = setTimeout(function () { p.addClass('active').fadeIn(1000) }, 2000);
            tSmall = setTimeout(function () { n.addClass('active').fadeIn(1000) }, 2500);
            tAnim = setTimeout(function () {
                p.animate({ 'font-size': 0, top: p.css('font-size'), left: '130px', opacity: 0 }, 1000,
                    function () { p.removeAttr('style'); });
                n.animate({ 'font-size': 0, top: n.css('font-size'), left: '130px', opacity: 0 }, 1000,
                    function () { n.removeAttr('style'); });
            }, 5000);
        };


        function slieStop() {             //stop all animations & timers
            sl.stop(true);
            par.stop(true);
            clearTimeout(timer);
            clearTimeout(tBig);
            clearTimeout(tSmall);
            clearTimeout(tAnim);
        };


    }




    slideShow(".slide", "img", ".pagination", "a", "p", 7500); // first run with parametrs



});



