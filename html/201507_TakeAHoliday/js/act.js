$(function() {
    $(".menu").click(function() {
        $("body").toggleClass("actMenu");
    })
    //fixed
    $(window).scroll(function(){
        // 設變數WRAP
        var WRAP = $("#wrap");
        if($(window).width() > 980 && $(window).scrollTop() > $(".header_content").height()){
            WRAP.addClass("fixed");
        }else{
            WRAP.removeClass("fixed");
        }
    })
})