$(".upperbody").hide();
$(".mainbody").hide();
$("header").hide();
$("#dp").hide();
$("header").slideDown(2500);
$("#dp").fadeTo(4000, 1);
setTimeout(function () {
    $(".upperbody").slideDown();
}, 3500)
setTimeout(function () {
    $(".mainbody").slideDown();
    $("footer").animate({ "opacity": 100 })
}, 2500)


var titles = ["Student", "Developer", "Web-Development Enthusiast"]


