/*
$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {

    }, 50));
});
*/


(function ($) {
    var on = $.fn.on, timer;
    $.fn.on = function () {
        var args = Array.apply(null, arguments);
        var last = args[args.length - 1];

        if (isNaN(last) || (last === 1 && args.pop())) return on.apply(this, args);

        var delay = args.pop();
        var fn = args.pop();

        args.push(function () {
            var self = this, params = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(self, params);
            }, delay);
        });

        return on.apply(this, args);
    };
}(this.jQuery || this.Zepto));


$(window).on('scroll', function (e) {
    card.animation();
}, 20);

var card = {
    init: function () {
        this.ajaxCatalog();
        this.images();
        this.textToggle();
        this.scrollLinks();
        this.video();
        this.allDetails.init();
        this.animation();
    },

    animation: function () {

        $('.cardAboutEl:not(.animated)').each(function () {
            if ($(this).visible(true)) {
                $(this).addClass("animated");
            }
        });

    },

    allDetails: {
        init: function () {
            $("body").on("click", ".cardAllDetailsElColToggle", function () {
                $(this).closest(".cardAllDetailsElContent").toggleClass("showAll");
            });
            $("body").on("click", ".cardAllDetailsElCol.active", function () {
                $(this).closest(".cardAllDetailsElContent").toggleClass("showAll");
            });
            $("body").on("change", ".cardAllDetailsElColInput", function () {
                $(this).closest(".cardAllDetailsElCol").toggleClass("active");
                $(".cardAllDetailsContent").addClass("loading");
                card.allDetails.submit();
            });
        },
        submit: function () {
            $.ajax({
                url: "/ajax/allDetails.php"
            }).done(function (data) {
                $(".cardAllDetailsContent").html(data);
                sliders.catalogSlider();
                $(".cardAllDetailsContent").removeClass("loading");
            });
        }
    },

    video: function () {
        $("body").on("click", ".cardImg360Toggle, .card360BoxClose", function (e) {
            $(".card").toggleClass("show360");
            var vid = document.getElementById("card360");
            if ($(".card").hasClass("show360")) {
                vid.play();
            }
            else {
                vid.pause();
            }
        });
    },
    scrollLinks: function () {
        $("body").on("click", ".cardBoxScrollLinks a", function (e) {
            e.preventDefault();
            var href = $(this).attr("href");
            $("body, html").scrollTo($("" + href).offset().top - 80, 500);
        })
    },

    textToggle: function () {
        $(".cardBoxToggle:not(.cardBoxLargeInfo) .cardBoxContentInner").each(function () {
            $(this).addClass("autoHeight");
            var h = parseInt($(this).height());
            $(this).removeClass("autoHeight");
            if (h < 600) {
                $(this).closest(".cardBoxToggle").addClass("alwaysOpen");
            }
        });
        $(".cardBoxToggle.cardBoxLargeInfo .cardBoxContentInner").each(function () {
            $(this).addClass("autoHeight");
            var h = parseInt($(this).height());
            $(this).removeClass("autoHeight");
            if (h < 1000) {
                $(this).closest(".cardBoxToggle").addClass("alwaysOpen");
            }
        });

        $("body").on("click", ".cardBoxToggleBtn", function () {
            $(this).closest(".cardBoxToggle").toggleClass("open");
        });
    },

    images: function () {
        $(".cardImgSliderEl").click(function (e) {
            e.preventDefault();
            var index = $(this).data("slick-index");
            if (parseInt($("body").width()) > 767) {
                $.fancybox.open($(".cardImgSliderEl:not(.slick-cloned)"), {
                    index: index
                });
            }
        });
    },

    ajaxCatalog: function () {
        $("body").on("click", ".cardAjaxCatalogLinks a", function () {
            var href = $(this).attr("href");

            $(this).closest(".cardAjaxCatalogLinks").find(".active").removeClass("active");
            $(this).addClass("active");

            $.ajax({
                url: href
            }).done(function (data) {
                $(this).closest(".cardAjaxCatalog").find(".cardAjaxCatalogContent").html(data);
                lazyImg.init();
            });

            return false;
        });
    }
};

$(document).ready(function () {
    card.init();
});