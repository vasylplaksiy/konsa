var order = {
    init: function () {
        this.tabs();
        this.validate();
    },

    tabs: function () {
        $("body").on("click", ".orderTabsHeader a", function () {
            var href = $(this).attr("href"),
                orderFormContent = $(this).closest(".orderTabs").find(".orderTabsContent");

            $(this).closest(".orderTabsHeader").find(".active").removeClass("active");
            $(this).addClass("active");

            $.ajax({
                url: href
            }).done(function (data) {
                $(orderFormContent).html(data);
            });

            return false;
        });
    },

    validate: function () {

        $("body").on("click", ".order .defFormSubmit", function () {
            var countElementsWithError = $(".order .orderTabsContent :invalid").length;
            if (countElementsWithError > 0) {
                var firstEl = $(".order .orderTabsContent :invalid")[0],
                    firstElPos = $(firstEl).offset();
                $(window).scrollTo(firstElPos.top - 95, 500, function () {
                    $(".order").append('<button type="submit" class="defFormSubmitFalseBtn"></button>');
                    $(".defFormSubmitFalseBtn").trigger("click").remove();
                    return false;
                });
                return false;
            }
        });
    }
};

$(document).ready(function () {
    order.init();
});