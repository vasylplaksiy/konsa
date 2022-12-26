var sliders = {
	init: function () {
		this.course();
		this.indexTop();
		this.questions();
	},

	questions: function () {
		$(".courseBoxQuestionsElRd input").on("change", function () {
			var elId = parseInt($(this).closest(".courseBoxQuestionsEl").data("id"));
			var counterEl = $(".courseBoxQuestionsEl").length;
			$(".courseBoxQuestionsPosition i[data-id='" + elId + "']").addClass("ok");
			var counterElActive = $(".courseBoxQuestionsPosition .ok").length;
			if(counterEl == counterElActive) {
				$(".courseBoxQuestions").addClass("ready");
			}
		});

		$(".courseBoxQuestionsNext").on("click", function () {
			var counterEl = $(".courseBoxQuestionsEl").length;
			var elId = parseInt($(".courseBoxQuestionsEl.active").data("id"));
			$(".courseBoxQuestionsEl.active").removeClass("active");
			$(".courseBoxQuestionsPosition .current").removeClass("current");

			var nextActive = 1;
			if (elId + 1 <= counterEl) {
				nextActive = elId + 1;
			}
			$(".courseBoxQuestionsEl[data-id='" + nextActive + "']").addClass("active");
			$(".courseBoxQuestionsPosition i[data-id='" + nextActive + "']").addClass("current");

		});

		$(".courseBoxQuestionsPrev").on("click", function () {
			var counterEl = $(".courseBoxQuestionsEl").length;
			var elId = parseInt($(".courseBoxQuestionsEl.active").data("id"));
			$(".courseBoxQuestionsEl.active").removeClass("active");
			$(".courseBoxQuestionsPosition .current").removeClass("current");

			var nextActive = counterEl;
			if (elId >= 2) {
				nextActive = elId - 1;
			}
			$(".courseBoxQuestionsEl[data-id='" + nextActive + "']").addClass("active");
			$(".courseBoxQuestionsPosition i[data-id='" + nextActive + "']").addClass("current");

		});
		$(".courseBoxQuestionsElSkip").on("click", function () {
			$(".courseBoxQuestionsNext").click();
		});
	},

	course: function () {

		if ($(".courseSlider").length) {
			$(".courseSliderList").addClass("init").slick({
				lazyLoad: 'ondemand',
				autoplay: false,
				autoplaySpeed: 3000,
				slidesToShow: 6,
				slidesToScroll: 6,
				focusOnSelect: true,
				speed: 200,
				cssEase: 'ease-out',
				infinite: false,
				dots: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}
				]
			});

		}

	},

	indexTop: function () {

		if ($(".indexTopArticleSliderList").length) {
			$(".indexTopArticleSliderList").addClass("init").slick({
				lazyLoad: 'ondemand',
				autoplay: false,
				autoplaySpeed: 3000,
				slidesToShow: 3,
				slidesToScroll: 3,
				focusOnSelect: true,
				speed: 200,
				cssEase: 'ease-out',
				infinite: false,
				dots: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						}
					}
				]
			});

		}

	}
};

$(document).ready(function () {
	sliders.init();
});