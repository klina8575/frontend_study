// var result = getCurrentWeather("incheon");
// console.log(result);
//아이콘 참고 - https://openweathermap.org/weather-conditions

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(".temp").each(function(i) {
    var temp = getCurrentTemp(cityList[i]);
    var iconURL = "https://openweathermap.org/img/wn/";
    $(this).text(temp.celsius + "℃");
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png");
});

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id");
        var redirectURL = "pages/weather_location.html?q=" + q; 
        location.href = redirectURL;
    }
});


// $(window).resize(function() {
//     var width = $(window).width();

//     if(width <= 767) {
//         $("#main_top img").attr("src", "https://via.placeholder.com/310x250.png");
//     } else if (width <= 1023) {
//         $("#main_top img").attr("src", "https://via.placeholder.com/660x250.png");
//     } else {
//         $("#main_top img").attr("src", "https://via.placeholder.com/960x250.png");
//     }
// });

