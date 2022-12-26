var card = {
	init: function () {
		this.kit();
		this.image();
		this.video();
	},
	video: function () {
		$(".styledVideoPlayBtn").click(function () {
			$(this).closest(".styledVideo").addClass("play").find(".styledVideoEl").each(function () {
				this.play();
			});
		});
		$(".styledVideoEl").click(function () {
			$(this).closest(".styledVideo").removeClass("play").find(".styledVideoEl").each(function () {
				this.pause();
			});
		});
		$(".styledVideoMuteBtn").click(function () {
			$(this).closest(".styledVideo").toggleClass("muted").find(".styledVideoEl").each(function () {
				if ($(this).closest(".styledVideo").hasClass("muted")) {
					$(this).prop('muted', true);
				} else {
					$(this).prop('muted', false);
				}

			});
		});
	},
	kit: function () {
		function recalc() {
			var sum = 0,
				elements = 0,
				length = $(".cardKitCh").length;

			$(".cardKitCh").each(function (i) {
				var ch = $(this).find("input:first").prop("checked"),
					price = parseFloat($(this).find("input:first").data("price"));
				id = parseInt($(this).find("input:first").data("id"));

				console.log(ch)
				if (ch) {
					sum += price;
					elements++;
					$(this).closest(".cardKit").find(".cardKitEl[data-id='" + id + "']").removeClass("hide");
					if (length == i + 1) {
						$(this).closest(".cardKit").find(".cardKitEl[data-id='" + id + "']").prev(".cardKitElSep").removeClass("hide");
					}
				}
				else {
					$(this).closest(".cardKit").find(".cardKitEl[data-id='" + id + "']").addClass("hide");
					if (length == i + 1) {
						$(this).closest(".cardKit").find(".cardKitEl[data-id='" + id + "']").prev(".cardKitElSep").addClass("hide");
					}
				}
			});
			if (elements == 0) {
				$(".cardKitList").addClass("hide");
			}
			else {
				$(".cardKitList").removeClass("hide");
			}
			$(".cardKitElTotalPrice").html("<span>" + sum + "</span>");
		}

		$(document).on("change", ".cardKitCh input", function () {
			recalc();
		});
	},
	image: function () {
		$('.cardLargeList').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.cardPreviewsList'
		});

		$('.cardLargeList').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			if ($(".cardLargeList .slick-current").hasClass("cardLargeElVideo")) {
				/*		$(".cardLargeList .cardLargeElVideo video").each(function () {
							this.pause();
						});*/
				$(".cardLargeList .cardLargeElVideo iframe").each(function () {
					$(this).attr("src", "");
				});
				// $(".cardLargeList .cardLargeElVideo.slick-current video")[0].play()
				var videoSrc = $(".cardLargeList .cardLargeElVideo.slick-current iframe:first").data("src");
				$(".cardLargeList .cardLargeElVideo.slick-current iframe").attr("src", videoSrc);
			}
			else {
				/*		$(".cardLargeList .cardLargeElVideo video").each(function () {
							this.pause();
						});*/
				$(".cardLargeList .cardLargeElVideo iframe").each(function () {
					$(this).attr("src", "");
				});
			}
		});


		$('.cardPreviewsList').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.cardLargeList',
			dots: true,
			focusOnSelect: true
		});

		$(".cardLargeEl:not(.cardLargeElVideo)").click(function () {
			var index = parseInt($(this).data("slick-index"));
			if ($(".cardLargeElVideo").length) index--;

			$.fancybox.open($(".cardLargeEl:not(.cardLargeElVideo)"), {
				index: index,
				padding: 0,
				closeBtn: true,
				openEffect: "none",
				closeEffect: "none",
				fitToView: true,
				clickOutside: "close"
			});

			return false;
		});

		/*
						$('a[data-slide]').click(function(e) {
								e.preventDefault();
								var slideno = $(this).data('slide');
								$('.slider-nav').slick('slickGoTo', slideno - 1);
						});*/
	}
};

$(document).ready(function () {
	card.init();
});