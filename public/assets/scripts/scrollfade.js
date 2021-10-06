$(window).scroll(function(){
    $("#hero").css("opacity", 1 - $(window).scrollTop() / 1000);
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $("#nav").addClass("nav-scrolled");
        $(".navText").css("color", "black");
    }
}); //missin