var catalog = {
	init: function () {
		this.image();
	},
	image: function () {
		$(document).on("mouseenter", ".catalogElImgPreviews a", function () {
			var imgEl = $(this).closest(".catalogElImg").find("img:first"),
				imgOriginal = imgEl.attr("src"),
				imgNew = $(this).data("src");
			imgEl.data("src", imgOriginal);
			imgEl.attr("src", imgNew);
		});
		$(document).on("mouseleave", ".catalogElImgPreviews a", function () {
			var imgEl = $(this).closest(".catalogElImg").find("img:first"),
				imgOriginal = imgEl.data("src");
			imgEl.attr("src", imgOriginal);
		});
	}
};


$(document).ready(function () {
	catalog.init();
});