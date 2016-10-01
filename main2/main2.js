$(document).ready(function () {
    var div = document.getElementsByClassName('photo')[0];
    var d = document.documentElement;
    document.addEventListener('scroll', getPosition);

    function getPosition() {
        var rect = div.getBoundingClientRect();
        var bott = (d.clientHeight * 1.7) - rect.bottom;
        if (bott > 0) {
            $('.photo .effect:even').animate({ 'left': 0, 'opacity': 1 }, 700);
            $('.photo .effect:odd').animate({ 'right': 0, 'opacity': 1 }, 700);
        }


    }

});
