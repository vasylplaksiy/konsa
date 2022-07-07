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
        $(".fancybox").fancybox({
            fitToView: true,
            padding: 0,
            openEffect: "none",
            closeEffect: "none",
            afterShow: function () {

            }
        });
    },
    showPopup: function () {
        $("body").on("click", ".showPopup", function (e) {
            e.preventDefault();
            var popup = $(this).attr("data-popup");
            $.fancybox.open($("" + popup), {
                padding: 0,
                closeBtn: true,
                openEffect: "none",
                closeEffect: "none",
                fitToView: false,
                beforeShow: function () {
                    if ($(".fancybox-inner .popupClose").length) {
                        $(".fancybox-close").remove();
                    }
                },
                afterShow: function () {
                    if ($(".fancybox-inner .popupClose").length) {
                        $(".fancybox-close").remove();
                    }
                },
                afterClose: function () {
                }
            });
        });
    },
    fastAjaxPopup: function (href) {
        $.fancybox.open({
            href: href,
            type: "ajax",
            padding: 0,
            closeBtn: true,
            openEffect: "none",
            closeEffect: "none",
            fitToView: false,
            beforeShow: function () {
                if ($(".fancybox-inner .popupClose").length) {
                    $(".fancybox-close").remove();
                }
            },
            afterShow: function () {
                $(".fancybox-inner .lazyImg").trigger("unveil");
                if ($(".fancybox-inner .popupClose").length) {
                    $(".fancybox-close").remove();
                }
            },
            beforeClose: function () {

            },
            afterClose: function () {

            }
        });
    },

    showAjaxPopup: function (href) {
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

            obj.fastAjaxPopup(popup);

            return false;
        });
    },
    closePopup: function () {
        $("body").on("click", ".popupClose, .closePopup", function () {
            $.fancybox.close();
            return false;
        });
    }

};

$(document).ready(function () {
    fbPopup.init();
});

