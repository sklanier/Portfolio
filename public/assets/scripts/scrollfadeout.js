$(window).scroll(function(){
    $("#hero-subtext").css("opacity", 0 + $(window).scrollTop() / 700);
});
