var catalog = {
    init: function () {
            this.imageZoom();
    },

    imageZoom: function () {
        $(".catalogItemImgZoom").fancybox();
    }
};

$(document).ready(function () {
    catalog.init();
});