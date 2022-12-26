/*
var sliders = {
    init: function () {
        this.indexSlider();
        this.catalog();
        // this.categoryVideo();
        // this.card();
    },

    indexSlider: function () {

        if ($(".indexSlider:not(.init)").length) {
            $(".indexSlider:not(.init) .indexSliderList").each(function () {
                $(this).addClass("init").slick({
                    lazyLoad: 'ondemand',
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 200,
                    cssEase: "fade",
                    infinite: true,
                    dots: true
                });
            });
        }

    },


    catalog: function () {
        if ($(".catalogSlider:not(.sliderInit)").length) {
            $(".catalogSlider:not(.sliderInit) .catalogList").each(function () {
                var showNum = 5;
                if ($(this).parent(".catalog").length > 0) {
                    showNum = 4;
                }
                $(this).addClass("init").slick({
                    lazyLoad: 'ondemand',
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: showNum,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    speed: 200,
                    cssEase: 'ease-out',
                    infinite: true,
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
            });
        }
    },

    categoryVideo: function () {
        if ($(".categorySlider:not(.sliderInit)").length) {
            $(".categorySlider:not(.sliderInit) .categorySliderList").each(function () {
                $(this).addClass("init").slick({
                    lazyLoad: 'ondemand',
                    autoplay: false,
                    autoplaySpeed: 10000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    speed: 200,
                    cssEase: 'ease-out',
                    infinite: true,
                    dots: true
                });
            });
        }
    },

    card: function () {

        if ($(".cardMediaLarge").length) {
            $(".cardMediaLarge .cardMediaLargeList").each(function () {
                $(this).addClass("init").slick({
                    lazyLoad: 'ondemand',
                    autoplay: false,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    speed: 200,
                    cssEase: "fade",
                    infinite: true,
                    dots: false,
                    asNavFor: '.cardMediaPreviewList'
                });
            });
        }

        if ($(".cardMediaPreview").length) {
            $(".cardMediaPreview .cardMediaPreviewList").each(function () {
                $(this).addClass("init").slick({
                    lazyLoad: 'ondemand',
                    autoplay: false,
                    autoplaySpeed: 5000,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    speed: 200,
                    cssEase: "fade",
                    infinite: true,
                    centerMode: true,
                    dots: false,
                    focusOnSelect: true,
                    arrows: false,
                    asNavFor: '.cardMediaLargeList'
                });
            });

        }
    }
};

$(document).ready(function () {
    sliders.init();
});*/

var pageSliders = {
	init: function () {
		this.mainText();
		this.catalog();
	},

	catalog: function () {
		if ($(".catalogSlider:not(.sliderInit)").length) {
			$(".catalogSlider:not(.sliderInit) .catalogList").each(function () {
				var showNum = 5;
				if ($(this).parent(".catalog").length > 0) {
					showNum = 4;
				}
				$(this).addClass("init").slick({
					lazyLoad: 'ondemand',
					autoplay: false,
					autoplaySpeed: 3000,
					slidesToShow: showNum,
					slidesToScroll: 1,
					focusOnSelect: true,
					speed: 200,
					cssEase: 'ease-out',
					infinite: true,
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
			});
		}
	},


	mainText: function () {
		if($(".mainSlider").length) {
			$(".mainSliderList").addClass("init").slick({
				lazyLoad: 'ondemand',
				autoplay: false,
				autoplaySpeed: 3000,
				slidesToShow: 5,
				slidesToScroll: 5,
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
							slidesToScroll: 4,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});

		}

	}
};

$(document).ready(function () {
	pageSliders.init();
});