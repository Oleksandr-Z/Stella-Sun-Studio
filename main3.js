$(document).ready(function () {
    $('.unicItem').hover(handleIn, handleOut);
    function handleIn() {
        var targetImg = $(this).find('img');
        targetImg.attr('src', targetImg.attr('src').replace('unic/', 'unic/hover/'));
        $(this).find('.itemName').toggleClass('selected');
    };
    function handleOut() {
        var targetImg = $(this).find('img');
        targetImg.attr('src', targetImg.attr('src').replace('unic/hover/', 'unic/'));
        $(this).find('.itemName').toggleClass('selected');

    };

    $('.counters').viewportChecker({
        //callbackFunction: animCounters()
        classToAdd: 'countersVisible',
        offset: '25%'

    })
    var wasAnim = false;
    function animCounters() {
        if (wasAnim) { return };
        wasAnim = true;
        $('div.counter').each(function () {
            var numInDiv = $(this).text();
            $(this).animate({ num: numInDiv }, {
                duration: 2500,
                step: function (num) {
                    $(this).text(Math.floor(num));
                }
            });
        });
    }
    $('.team').viewportChecker({
        classToAdd: 'teamVisible',
        offset: '30%'
    });

    $(window).on('scroll', function () {
        if ($('.team').hasClass('teamVisible')) {
            animTeam();
        }
        if ($('.counters').hasClass('countersVisible')) {
            animCounters();
        }

    })

    function animTeam() {
        $('div.teamMate').each(function (i) {
            $(this).delay((i++) * 200).animate({ 'opacity': '1', 'left': '0' }, { duration: 1000 });
        })
    }
    


});
