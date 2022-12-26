$(document).ready(function () {
    if ($(".cardLifeGame").length == 0) return;
    var animationInProgress = false;
    var myElement = document.getElementById('cardLifeGame');
    var mc = new Hammer(myElement);
    mc.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});
    mc.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});
    mc.on("pinchleft swipeleft", function (ev) {
        if (animationInProgress) return false;
        animationInProgress = true;
        var w = parseInt($(window).width());
        $("#cardLifeGame").animate({
            scrollLeft: w
        }, 200, "swing", function () {
            animationInProgress = false;
        });
        $(".cardLifeGameSwipe").remove();
    });
    mc.on("pinchright swiperight", function (ev) {
        if (animationInProgress) return false;
        animationInProgress = true;
        $("#cardLifeGame").animate({
            scrollLeft: "0"
        }, 200, "swing", function () {
            animationInProgress = false;
        });
        $(".cardLifeGameSwipe").remove();
    });

    $(window).on("orientationchange resize", function () {
        var w = parseInt($(window).width());
        if (w < 768) {
            var boxScrollLeft = $("#cardLifeGame").scrollLeft();
            if(boxScrollLeft != 0) $("#cardLifeGame").scrollLeft(w);
        }

    }, false);
});