var bg = {
    init: function () {
        this.bgCover();
        this.loadVideo();
    },
    bgCover: function () {
        $(".bgCover:not(.bgInit)").each(function () {
            var bgUrl = $(this).data("bg");
            $(this)
                .css("background-image", "url(" + bgUrl + ")")
                .addClass("bgInit");
        });
    },
    loadVideo: function () {
        $(".loadVideo:not(.videoInit)").each(function () {
            $(this).find("source").each(function () {
                var videoSrc = $(this).data("src");
                $(this).attr("src", videoSrc);
            });
            var html = $(this).html();
            $(this).html("");
            $(this).html(html)

        });
    }
};

$(document).ready(function () {
    bg.init();
});