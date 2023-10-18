$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $(this).removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    $('.accordion-header').click(function(){
        $('.accordion .accordian-body').slideUp();
        $(this).next('.accordian-body').slideDown();
        $('.accordian .accordian-header span').text('+');
        $(this).children('span').text('-');
    });

});