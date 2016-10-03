$(window).load(function() {

    "use strict";
    /* ==============================================
    PRELOADER
    =============================================== */
    var preloaderDelay = 500;
    var preloaderFadeOutTime = 800;
    var startPage = 0;

    function hidePreloader() {
        var loadingAnimation = $('#loading-animation');
        var preloader = $('#preloader');

        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime, function() {
            setTimeout(startPage, 1500);
         });
    }

    hidePreloader();

});

$(document).ready(function(){

    // $('#myCarousel').carousel({
    //     interval: 12000
    // });

    $('#mobCarousel').on('slid.bs.carousel', function () {
        var item = ($('#mobCarousel .item').index($('#mobCarousel .active')) + 1);
        $( ".item_slide" ).html(item);
    })



    $(".fancybox").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });

    $('.iframe')
    .attr('rel', 'media-gallery')
    .fancybox({
        openEffect : 'none',
        closeEffect : 'none',
        prevEffect : 'none',
        nextEffect : 'none',

        arrows : false,
        helpers : {
            media : {},
            buttons : {}
        }
    });

});
