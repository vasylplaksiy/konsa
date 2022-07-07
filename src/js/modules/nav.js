var nav = {
	init: function () {
		this.toggle();
		this.accordion();
		// this.elToggle();
		// this.sideNav();
		// this.hover();
		// this.mobile();
		// this.content();
	},
	accordion: function(){
		var acc = document.getElementsByClassName("accordionElTitle");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}
	},
	sideNav: function () {
		$(document).on("click", ".sideNavListSubToggle", function () {
			$(this).closest(".sideNavListSub").toggleClass("active");
		});
	},
	toggle: function () {
		$(document).on("click", ".mainHeaderNavToggle, .mainNavOverlay, .mainNavClose", function () {
			$("body").toggleClass("showNav");
			$(".mainHeaderSearch").removeClass("active");
		});
	},
	elToggle: function () {
		$(document).on("click", ".mainNavMainElTitle, .mainNavMainElToggle", function () {
			$(this).parent().toggleClass("open");
		});

		$(document).on("click", ".mainNavMainElSubColTitle, .mainNavMainElSubColToggle", function () {
			$(this).closest(".mainNavMainElSubCol").toggleClass("open");
		});
	},

	mobile: function () {
		$(document).on("click", ".mainNavElTitle", function () {
			$(this).closest(".mainNavEl").toggleClass("active");
		});
	},
	hover: function () {
		$(document).on("mouseenter", ".mainNavEl:not(.mediaLoaded)", function () {
			$(this).addClass("mediaLoaded");
			$(this).find(".mainNavElSubItemImg").each(function () {
				var img = $(this).find("img").attr("data-src");
				$(this).css("background-image", "url(" + img + ")");
			});
		});
	},
	content: function () {
		$(document).on("click", ".contentNavEl, .contentNavToggle", function () {
			if ($(".contentNavToggle").is(":visible")) {
				$(this).closest(".contentNav").toggleClass("showFull");
			}
		});
	}
};

$(document).ready(function () {
	nav.init();
});
/*


var scrollTimeout;

$(document).ready(function () {

	$(window).scroll(function () {

		if (scrollTimeout) {
			$("body").addClass('disable-hover');
			clearTimeout(scrollTimeout);
			scrollTimeout = null;
		}

		scrollTimeout = setTimeout(function () {
			if ($(".cardPage").length) {
				if(parseInt($("body").width()) >= 960) {
					var top = parseInt($(".cardScrollBox").offset().top) + parseInt($(".cardScrollBox").height());
					if ($(document).scrollTop() < top) {
						$("body").removeClass("showCardHeader")
					}
					else {
						$("body").addClass("showCardHeader")
					}
				}
				else {
					if ($(document).scrollTop() < 300) {
						$("body").removeClass("showCardHeader")
					}
					else {
						$("body").addClass("showCardHeader")
					}
				}

			}
			else {
				if ($(document).scrollTop() < 300) {
					$("body").removeClass("showFixedHeader")
				}
				else {
					$("body").addClass("showFixedHeader")
				}
			}
			if($(".categorySlider:first").css("display") == "none"){
				$('.categorySliderEl video:not(.noJs)').each(function(){
					$(this)[0].pause();
				});
			}
			else if($(".categorySliderEl video:not(.noJs)").length) {
				$('.categorySliderEl video:not(noJs)').each(function(){
					if ($(this).is(":in-viewport")) {
						$(this)[0].play();
					} else {
						$(this)[0].pause();
					}
				});
			}
			$("body").removeClass('disable-hover');

		}, 25);

	});


});*/
