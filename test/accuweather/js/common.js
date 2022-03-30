$(function(){
    $(".hamburger").click(function(){
        $(".mobile.hamburger").hide();
        $(".mobile.close").show();

        $("#mobile_menu").empty(); // #mobile_menu 하위 태그 초기화

        var nav = $(".nav").clone();
        $("#mobile_menu").append(nav);
        $("#mobile_menu").show();
    });

    $(".close").click(function(){
        $(".mobile.hamburger").show();
        $(".mobile.close").hide();
        $("#mobile_menu").hide();
    });
});


$(window).resize(function() {
    var width = $(window).width();
    if(width >= 767) {
        if($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show();
            $(".mobile.close").hide();
            $("#mobile_menu").hide();
        }
    }

});