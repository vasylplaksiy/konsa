var fbPopup = {
    initialized: false,
    defUrl: "/ajax/popup/",
    defExt: ".php",
    defMethod: "POST",
    init: function () {
        this.initialized = true;
        this.fbDef();
        this.showPopup();
        this.showAjaxPopup();
        this.closePopup();
    },
    fbDef: function () {
        $(".fancybox").fancybox();
    },
    showPopup: function () {
        $("body").on("click", ".showPopup", function (e) {
            e.preventDefault();
            var popup = $(this).attr("data-popup");
            /*   if (popup == ".searchPopup") {
             $("body").addClass("searchPopupActive");
             }*/
            $.fancybox.open($("" + popup), {
                padding: 0,
                closeBtn: true,
                afterShow: function () {
                    $("body").addClass("overflowHidden").css("margin-right", getScrollBarWidth+"px");
                },
                afterClose: function () {
                    $("body").removeClass("overflowHidden").css("margin-right", "0");
                }
            });
        });
    },
    showAjaxPopup: function () {
        var obj = this,
            ajaxMethod = obj.defMethod;

        if (location.host.search("localhost") >= 0) {
            ajaxMethod = "GET";
        }

        $("body").on("click", ".showAjaxPopup", function (e) {
            e.preventDefault();

            var popup = $(this).attr("data-popup");

            if (!popup) {
                popup = $(this).attr("data-href");
            }

            if (!popup) {
                popup = $(this).attr("href");
            }

            // popup = obj.defUrl + popup + obj.defExt;
            $.fancybox.open({
                href: popup,
                type: "ajax",
                padding: 0,
                closeBtn: true,
                afterShow: function () {
                    basket.init();
                    otherEvents.phoneMask();
                    lazyImg.init();
                    $(".fancybox-inner .lazyImg").trigger("unveil");
                    $("body").addClass("overflowHidden").css("margin-right", getScrollBarWidth+"px");
                },
                afterClose: function () {
                    $("body").removeClass("overflowHidden").css("margin-right", "0");
                }
            });

            return false;
        });
    },
    closePopup: function () {
        $("body").on("click", ".popupClose", function () {
            $.fancybox.close();
            return false;
        });
    }

};

$(document).ready(function () {
    fbPopup.init();
});

