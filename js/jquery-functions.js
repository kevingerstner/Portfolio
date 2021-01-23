$(document).ready(function(){

    $(".nav-container").load("./common/navbar.html");
    $(".project-nav-container").load("./common/project-navbar.html");

    $(".tog").click(function(){
        $("i", this).toggle();
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
});