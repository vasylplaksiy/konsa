var qa = {
    init: function () {
        this.toggle();
    },

    toggle: function () {
        $(document).on("click", ".qaElTitle", function () {
            $(this).closest(".qaEl").toggleClass("active");
        });
    }
};

$(document).ready(function () {
    qa.init();
});