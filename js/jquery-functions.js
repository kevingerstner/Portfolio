$(document).ready(function(){

    $(".project-nav-container").load("./common/project-navbar.html");

    $(".tog").click(function(){
        $("i", this).toggle();
    });

    $(window).scroll(function(){
        $('.fadein').each(function(i){
            var mid_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > mid_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
        })
        $('.fadeinup').each(function(i){
            var mid_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > mid_of_element ){
                $(this).animate({'opacity':'1', 'bottom':'0px'},500);
            }
        })
        $('.fadeinleft').each(function(i){
            var mid_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > mid_of_element ){
                $(this).animate({'opacity':'1','left':'0px'},500);
            }
        });
        $('.fadeinright').each(function(i){
            var mid_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > mid_of_element ){
                $(this).animate({'opacity':'1','right':'0px'},500);
            }
        });
    });

    $("#header-icons > a").hover(function(){
        $(this).children("i").animate({
            bottom: '3px',
            left: '5px'
        }, "fast");
    }, function(){
        $(this).children("i").animate({
            bottom: '0',
            left: '0'
        }, "fast")
    });

    $("#footer-icon-row > a").hover(function(){
        $(this).children("i").animate({
            bottom: '3px'
        }, "fast");
    }, function(){
        $(this).children("i").animate({
            bottom: '0'
        }, "fast")
    });
});