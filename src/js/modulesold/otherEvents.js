var otherEvents = {
    init: function () {

        this.phoneMask();
        this.headerNav();
        this.headerSearch();
        this.ordersList();
        this.styles();

    },

    phoneMask: function () {
        $('.addPhoneMask:not(.init)')
            .mask("+7 (000) 000-00-00", {placeholder: "+7 (___) ___-__-__"})
            .addClass("init");
        $('.addShortPhoneMask:not(.init)')
            .mask("(000) 000-00-00", {placeholder: "(___) ___-__-__"})
            .addClass("init");
    },

    headerNav: function () {
        $(".mainNavDrop > a, .mainNavDrop > noindex > a").click(function () {
            var navToggleVisible = $(".mainNavToggle").css("display");
            if (navToggleVisible == "none") {
                $(this).toggleClass("active");
                $(this).closest(".mainNavDrop").addClass("current");
                $(".mainNavDrop:not(.current)").find("> a").removeClass("active");
                $(".mainNavDrop:not(.current)").find(".mainNavSub").removeClass("active");
                $(this).closest(".mainNavDrop").removeClass("current");
                $(this).closest(".mainNavDrop").find(".mainNavSub").toggleClass("active");
                $(".mainNav img").trigger("unveil");
                $(".mainHeaderSearch").removeClass("active");
                if ($(".mainNavDrop .mainNavSub.active").length) {
                    $("body").addClass("navVisible");
                }
                else {
                    $("body").removeClass("navVisible");
                }
                return false;
            }
            else {
                if ($(this).hasClass("mainNavDropToggleEmulate")) {
                    $(this).closest(".mainNavDrop").find(".mainNavDropToggle").click();
                    return false;
                }
            }
        });

        $(".mainNavToggle, .mainNavOverlay").click(function () {
            if ($("body").hasClass("showNav")) {
                $("body").removeClass("showNav");
            }
            else if ($("html").hasClass("showFilter")) {
                $("html").removeClass("showFilter");
            }
            else {
                $("body").addClass("showNav");
            }
            return false;
        });
        $(".mainNavDropToggle").click(function () {
            $(this).closest("li").toggleClass("active");
            return false;
        });
        $(".catalogNavColBoxToggle").click(function () {
            $(this).closest(".catalogNavColBox").toggleClass("active");
            return false;
        });
        $(".navAlertGo").click(function () {
            $.fancybox.close();
        });
        $(document).click(function (event) {
            if ($(".mainNavSub.active").length && !$(event.target).closest('.mainNav').length) {
                $('.mainNavSub.active').closest(".mainNavDrop").find(">a").click();
            }
            if ($(".mainHeaderSearch.active").length && !$(event.target).closest('.mainHeaderSearch').length && !$(event.target).hasClass("mainHeaderSearchToggle") && !$(event.target).hasClass("mainHeaderSearch")) {
                $('.mainHeaderSearch.active').removeClass("active");
            }
        });
    },

    headerSearch: function () {
        $(".mainHeaderSearchToggle").click(function () {
            $(".mainHeaderSearch").toggleClass("active");
            $(".mainNavSub, .mainNavDrop a").removeClass("active");
            return false;
        });
    },

    ordersList: function () {
        $(".ordersElHeader").click(function () {
            $(this).closest(".ordersEl").toggleClass("open");
            return false;
        });
    },

    styles: function () {
        var newML = 570 + (getScrollBarWidth / 2);
        var styles = "<style>@media all and (min-width: 1140px) {.fancybox-margin .mainHeader {margin: 0 0 0 -" + newML + "px !important;}}</style>";
        $("body").append(styles);
    }

    /* nav: function () {
     $("body").on("click", ".mainHeaderCatalogDrop > a", function () {
     if (!$(this).closest(".mainHeaderCatalogDrop").hasClass("active")) {
     $(".mainHeaderCatalogDrop.active").removeClass("active");
     $(this).closest(".mainHeaderCatalogDrop").addClass("active");
     return false;
     }
     });
     $("body").on("click", ".mainHeaderCatalogDrop > span > i", function () {
     if ($(this).closest(".mainHeaderCatalogDrop").hasClass("active")) {
     $(".mainHeaderCatalogDrop.active").removeClass("active");
     }
     else {
     $(".mainHeaderCatalogDrop.active").removeClass("active");
     $(this).closest(".mainHeaderCatalogDrop").addClass("active");
     }
     });

     $(document).click(function (event) {
     if (!$(event.target).closest('.mainHeaderCatalog').length) {
     $('.mainHeaderCatalogDrop').removeClass("active");
     }
     });
     },*/

    /*   scrollTo: function () {
     $("body").on("click", ".scrollTo", function (e) {
     e.preventDefault();
     var el = $(this).attr("data-el");
     $("body, html").scrollTo($("" + el + ":first"), 500);
     });
     }*/

};

$(document).ready(function () {
    otherEvents.init();
});