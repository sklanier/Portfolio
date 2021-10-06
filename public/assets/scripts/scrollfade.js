$(window).scroll(function(){
    $("#hero").css("opacity", 1 - $(window).scrollTop() / 700);
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#nav").addClass("nav-scrolled");
        $(".navText").css("color", "black");
    }

    if (scroll < 100) {
        $("#nav").removeClass("nav-scrolled");
        $(".navText").css("color", "white");
    }
});