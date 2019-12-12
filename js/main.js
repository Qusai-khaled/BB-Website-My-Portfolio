$(function () {
    'use strict';


    $('.header').height($(window).height());


    $('.fa-angle-double-down').on('click', function () {
        $('html ,body').animate({
            scrollTop: $('.about').offset().top
        }, 1500);
    });


    $('.navbar-nav .nav-link').on('click', function () {
        $('html ,body').animate({
            scrollTop: $('#' + $(this).data('name')).offset().top + 1
        }, 1500);
    });


    AOS.init();

    $('#Container').mixItUp();


});
