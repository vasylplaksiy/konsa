var catalogNew = {
    init: function () {
        this.hoverEl();
    },

    hoverEl: function () {

        $(".catalogNewItem:not(.init)").mouseenter(function () {
            $(this).addClass("init").find(".lazyImg").trigger("unveil");
        });

        $(".catalogNewItem:not(.init)").mouseleave(function () {
            $(this)
                .addClass("init")
                .find(".catalogNewItemPreviewsList .active")
                .removeClass("active");
            var newSrc = $(this)
                .find(".catalogNewItemPreviewsList a:first")
                .attr("data-img");
            $(this)
                .find(".catalogNewItemPreviewsList a:first")
                .addClass("active");
            $(this)
                .find(".catalogNewItemImg img")
                .attr("src", newSrc);
        });

        $(".catalogNewItemPreviewsList a:not(.init)").mouseenter(function () {
            var newSrc = $(this).attr("data-img");
            $(this)
                .addClass("init")
                .closest(".catalogNewItemContent")
                .find(".catalogNewItemPreviewsList .active")
                .removeClass("active");

            $(this)
                .addClass("active")
                .closest(".catalogNewItemContent")
                .find(".catalogNewItemImg img")
                .attr("src", newSrc);
        });

    }
};

$(document).ready(function () {
    catalogNew.init();
});