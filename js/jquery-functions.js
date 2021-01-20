$(document).ready(function(){

    $(".nav-container").load("./common/navbar.html");
    $(".project-nav-container").load("./common/project-navbar.html");

    $(".tog").click(function(){
        $("i", this).toggle();
    });
 });