var cardNew = {
    init: function () {

        this.tabs();
        this.moveControls();
        this.reviewFile();
        this.img();
        this.setRating();
        this.formToggle();
        this.size();

    },

    size: function () {
        $("body").on("click", ".cardNewSizeSelectTitle", function () {
            $(".cardNewSizeSelect").toggleClass("active");
        });

        $("body").on("click", ".cardNewSizeSelectEl", function () {
            if ($(this).hasClass("disabled") || $(this).hasClass("active")) {
                return false;
            }
            var index = $(this).index(),
                text = $(this).find("span:eq(0)").text() + " " + $(this).find("span:eq(1)").html();
            $(".cardNewSizeSelectTitle").html(text);
            $(".cardNewSizeSelectEl.active").removeClass("active");
            $(this).addClass("active");
            $(".cardNewSizeSelect option:selected").prop("selected", false);
            $(".cardNewSizeSelect option:eq(" + index + ")").prop("selected", true);
            $(".cardNewSizeSelect").trigger("change");
            $(".cardNewSizeSelect").removeClass("active");
        });

        $(document).click(function (event) {
            if (!$(event.target).closest('.cardNewSizeSelect').length) {
                $('.cardNewSizeSelect').removeClass("active");
            }
        });
    },

    formToggle: function () {
        $("body").on("click", ".cardNewReviewsWriteToggle", function () {
            $(".cardNewReview").toggleClass("active");
        });
    },

    tabs: function () {
        $("body").on("click", ".cardNewTabsHeader span", function () {
            var index = $(this).index();
            $(".cardNewTabsHeader span, .cardNewTabsPanel").removeClass("active");
            $(this).addClass("active");
            $(".cardNewTabsPanel:eq(" + index + ")").addClass("active");
        });
    },

    moveControls: function () {
        var controls = $(".cardNewControls").clone();
        $(".breadCrumbs").append(controls)
        // var controls = $(".cardNewControls").clone();
    },

    reviewFile: function () {
        $("#cardNewReviewFormFile1").change(function () {
            if ($(this).val().lastIndexOf('\\')) {
                var n = $(this).val().lastIndexOf('\\') + 1;
            } else {
                var n = $(this).val().lastIndexOf('/') + 1;
            }

            var fileName = $(this).val().slice(n);

            var clearText = $(".cardNewReviewFormFile label").attr("data-text");

            if (fileName.length < 1) {
                $(".cardNewReviewFormFile label").removeClass("active").html(clearText);
                $(".cardNewReviewFormFile span").show()
            }
            else {
                $(".cardNewReviewFormFile label").addClass("active").html(fileName);
                $(".cardNewReviewFormFile span").hide()
            }

        });
    },

    img: function () {
        $("body").on("click", ".cardNewImgPreviewsList a", function () {
            var href = $(this).attr("href");
            $(".cardNewImgPreviewsList .active").removeClass("active");
            $(this).addClass("active");
            $(".cardNewImgBig img").attr("src", href);
            return false;
        });
    },

    setRating: function () {
        $("body").on("click", ".cardNewReviewSetMarksElSet i", function () {
            var index = $(this).index() + 1;
            $(this).addClass("active");
            $(this).nextAll("i").removeClass("active");
            $(this).prevAll("i").addClass("active");
            $(this)
                .closest(".cardNewReviewSetMarksEl")
                .find(".cardNewReviewSetMarksElVal")
                .val(index);
        });
    }
};

$(document).ready(function () {
    cardNew.init();
});