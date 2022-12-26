var search = {
	init: function () {
		this.toggle();
	},
	toggle: function () {
		$(document).on("click", ".mainHeaderSearchBtn", function () {
			$(".mainHeaderSearchBtn").toggleClass("active");
			$(".mainHeaderSearch").toggleClass("active");
		});
	}
};

$(document).ready(function () {
	search.init();
});