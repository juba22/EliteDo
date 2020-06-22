/* global, $, alert, window */
$(function () {
    'use strict';
    
    /* Start cover */
    
    var upperH = $(".upper").innerHeight(),
        navH   = $(".navbar").innerHeight(),
        winH   = $(window).height();
    
    $(".slider, .carousel-item").height(winH - (upperH + navH));
    
    
    /* Start features-gallery */
    
    $('.gallery-featured ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        console.log($(this).attr('data-class'))
        
        if ($(this).attr('data-class') === 'all'){
            $('.gallery-featured .images .col-md').css('opacity',1)
        } else {
            $('.gallery-featured .images .col-md').css('opacity',0.3)
            $($(this).attr('data-class')).parent().css('opacity',1)
        }
    })
});