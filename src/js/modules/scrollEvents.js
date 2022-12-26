var scrollTimeout;

var goTop = {
    init: function () {
        var obj = this;
        $("body").on("click", ".scrollTop", function () {
            $("body, html").scrollTo(0, 500, function () {
                obj.check();
            });
            return false;
        });

        this.check();
    },
    check: function () {
        if ($(window).scrollTop() > 200) {
            $(".scrollTop").addClass("active");
        } else {
            $(".scrollTop").removeClass("active");
        }
        if ($(window).scrollTop() > 280) {
            $("body").addClass("fixedHeader");
        } else {
            $("body").removeClass("fixedHeader");
        }
    }
};

$(document).ready(function () {

    goTop.init();

    $(window).scroll(function () {

        if (scrollTimeout) {
            $("body").addClass('disable-hover');
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }

        scrollTimeout = setTimeout(function () {

            goTop.check();

            $("body").removeClass('disable-hover');

        }, 50);

    });

});


