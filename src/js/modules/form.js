var form = {
	init: function () {
		this.rating();
		this.phoneMask();
	},
	phoneMask: function () {
		$('.phoneMask:not(.init)')
			.mask("+7 (999) 999-99-99", {placeholder: "+7 (___) ___-__-__"})
			.addClass("init");
	},
	rating: function () {
		$(document).on("mouseenter", ".reviewsFormRating i", function () {
			$(this).removeClass("off").addClass("hoverActive");
			$(this).prevAll("i").addClass("hoverActive").removeClass("off");
			$(this).nextAll("i").addClass("off").removeClass("hoverActive");
		});
		$(document).on("click", ".reviewsFormRating i", function () {
			var list = $(".reviewsFormRating i");
			var el = $(this);
			var index = list.index(el) + 1;
			$(".reviewsFormRating input").val(index);
			$(this).addClass("active");
			$(this).prevAll("i").addClass("active");
			$(this).nextAll("i").removeClass("active");
		});
		$(document).on("mouseleave", ".reviewsFormRating", function () {
			$(this).find(".hoverActive").removeClass("hoverActive");
			$(this).find(".off").removeClass("off");
			$(this).find(".active:last").nextAll().addClass("off");
		});
	}
};

$(document).ready(function () {
	form.init();
});