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


    // $('#inputMensagem').blur(function() {
    //     if ($(this)[0].value === '') {
    //         $(this).css('background', '#000');
    //     }
    // });


    $("#inputMensagem").focus(function(){
        $(this).parent().addClass("is-active is-completed");
    });

    $("#inputMensagem").focusout(function(){
        if($(this).val() === "")
        $(this).parent().removeClass("is-completed");
        $(this).parent().removeClass("is-active");
    });




    // validate signup form on keyup and submit
    $("#formInformacoes").validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Digite seu nome",
                minlength: "Seu nome precisa ser maior que 2 letras"
            },
            email: "Digite um e-mail válido",
            mensagem: {
                required: "Digite uma mensagem",
                minlength: "Sua mensagem precisa ser maior que 10 letras"
            }
        }
    });

});
