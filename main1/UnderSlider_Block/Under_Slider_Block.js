$(document).ready(function () {

    $('.what_do').hover(handleIn, handleOut);
function handleIn() {
    //var targetImg = $(this).find('img');
    //targetImg.attr('src', targetImg.attr('src').replace('unic/', 'unic/hover/'));
    $(this).find('.iconName').toggleClass('selected');
};
function handleOut() {
    //var targetImg = $(this).find('img');
    //targetImg.attr('src', targetImg.attr('src').replace('unic/hover/', 'unic/'));
    $(this).find('.iconName').toggleClass('selected');

};
});