$(window).scroll(function(){
    $("scrollfade").css("opacity", 1 - $(window).scrollTop() / 750);
    
});
$(window).scroll(function(){
    $("#hero").css("opacity", 1 - $(window).scrollTop() / 1000);
    
});