$(function() {
    $("#menu").click(function() {
        $("body, html").toggleClass("actMenu");
        return false; 
    });
    $(window).resize(function(){
        if($(window).width()>980){
            $("body, html").removeClass("actMenu");
        }
    }).resize();

    //goTop
    $(".goTop").click(function(){
        $("html, body").animate({scrollTop:0},400);
        return false;
    });
})