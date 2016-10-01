$(document).ready(function () {
    $('.photoSet').each(function () {
        $(this).on("click", function () {

            location.href = $(this).attr('data-href');

        });

    });
});
