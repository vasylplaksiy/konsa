var sliders = {
    init: function () {
        this.topSlider();
        this.card();
        this.catalogSlider();
        this.reviewsSlider();
        this.cardTopSlider();
        // this.productSliders();
        // this.catalogItemPreviews();
        // this.catalogItemPreviewsControls();
    },

    topSlider: function () {

        if ($(".indexSliderList:not(.init)").length) {
            $('.indexSliderList:not(.init)').each(function () {
               /* $(this).addClass("init").slick({
                    lazyLoad: 'ondemand',
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 200,
                    cssEase: "fade",
                    infinite: true,
                    dots: true
                });*/

                $(this).addClass("init").owlCarousel({
                    items:1,
                    lazyLoad:true,
                    loop:true,
                    margin:0,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    autoplay:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true
                });


                $(this).on('changed.owl.carousel', function(event) {
                    countDownTime();
                })

            });



           /* $('.indexSliderControlsEl').click(function(e) {
                e.preventDefault();
                var index = $(this).index();
                $('.indexSliderList').slick('slickGoTo', index);
                $(".indexSliderControlsEl").removeClass("active");
                $(this).addClass("active");
            });*/

            /*$('.indexSliderList').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(".indexSliderControlsEl").removeClass("active");
                $(".indexSliderControlsEl:eq(" + nextSlide + ")").addClass("active");
            });*/
        }
        $.countdown.setDefaults($.countdown.regionalOptions['ru']);
        function countDownTime() {

            if($(".timeCountdown:not(.loadedTime)").length) {
                var dateInMilliseconds = Number($(".timeCountdown:first").data("time"));
                var finalDate = new Date(dateInMilliseconds);

                $('.timeCountdown').addClass("loadedTime").countdown({until: finalDate});

            }
        }

        countDownTime();
    },

    card: function () {
        if ($(".cardImgSlider:not(.init)").length) {
            $('.cardImgSlider:not(.init)').each(function () {
                $(this).addClass("init").slick({
                    lazyLoad: 'progressive',
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    speed: 300,
                    cssEase: 'ease-out',
                    dots: true,
                    responsive: [{
                        breakpoint: 959,
                        settings: {
                            autoplay: false,
                            infinite: false
                        }
                    }]
                });


                function styleControls(currentSlide) {
                    var count = $(".cardImgBottom .slick-dots li").length;
                    var activeIndex = parseInt($(".cardImgBottom .slick-dots li.slick-active").index());
                    if (activeIndex < 0) {
                        return false;
                    }
                    // console.log("activeIndex = " + activeIndex);
                    // activeIndex = currentSlide;
                    if (count > 5) {
                        $(".cardImgBottom .slick-dots li").removeClass("slick-dot-m slick-dot-s slick-dot-h");
                        if (activeIndex == 0) {
                            $(".cardImgBottom .slick-dots li:eq(5)").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(4)").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:gt(5)").addClass("slick-dot-h");
                        }
                        else if (activeIndex == 1) {
                            $(".cardImgBottom .slick-dots li:eq(0)").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:eq(5)").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(4)").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:gt(5)").addClass("slick-dot-h");
                        }
                        else if (activeIndex == 2) {
                            $(".cardImgBottom .slick-dots li:eq(0)").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(1)").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:eq(5)").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(4)").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:gt(5)").addClass("slick-dot-h");
                        }
                        else if (activeIndex == 3) {
                            $(".cardImgBottom .slick-dots li:eq(0)").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(1)").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:eq(5)").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(4)").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:gt(5)").addClass("slick-dot-h");
                        }
                        else if (activeIndex >= 4 && (activeIndex + 2) < count) {
                            $(".cardImgBottom .slick-dots li:lt(" + (activeIndex - 3) + ")").addClass("slick-dot-h");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex - 3) + ")").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex - 2) + ")").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex + 2) + ")").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex + 1) + ")").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:gt(" + (activeIndex + 2) + ")").addClass("slick-dot-h");
                        }
                        else if ((activeIndex + 2) == count) {
                            $(".cardImgBottom .slick-dots li:lt(" + (activeIndex - 4) + ")").addClass("slick-dot-h");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex - 4) + ")").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex - 3) + ")").addClass("slick-dot-m");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex + 1) + ")").addClass("slick-dot-m");

                        }
                        else if ((activeIndex + 1) == count) {
                            $(".cardImgBottom .slick-dots li:lt(" + (activeIndex - 5) + ")").addClass("slick-dot-h");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex - 5) + ")").addClass("slick-dot-s");
                            $(".cardImgBottom .slick-dots li:eq(" + (activeIndex - 4) + ")").addClass("slick-dot-m");
                        }
                    }

                    $(".cardImgBottom .slick-dots").addClass("active");
                }

                styleControls();

                setTimeout(function () {
                    styleControls();
                }, 1000);

                // On before slide change
                $(this).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    setTimeout(function () {
                        styleControls(currentSlide)
                    }, 10);
                });
                // On before slide change
                $(this).on('init', function (event, slick, currentSlide, nextSlide) {
                    setTimeout(function () {
                        styleControls(currentSlide)
                    }, 10);
                });
                // On before slide change
                $(this).on('reInit', function (event, slick, currentSlide, nextSlide) {
                    setTimeout(function () {
                        styleControls(currentSlide)
                    }, 10);
                });
                // On before slide change
                $(this).on('swipe', function (event, slick, currentSlide, nextSlide) {
                    setTimeout(function () {
                        styleControls(currentSlide)
                    }, 10);
                });
                // On before slide change
                $(this).on('lazyLoaded', function (event, slick, currentSlide, nextSlide) {
                    setTimeout(function () {
                        styleControls(currentSlide)
                    }, 10);
                });
            });


            $(".cardImg .slick-dots").wrap('<div class="cardImgBottom"></div>');

            if ($(".cardImgWith360").length) {
                var url = $(".cardImg").data("url");
                if (url != undefined) {
                    $(".cardImgBottom").prepend('<a class="various cardImg360ToggleYb fancybox fancybox.iframe" href="' + url + '"></a>');


                }
                else {
                    $(".cardImgBottom").prepend('<span class="cardImg360Toggle"></span>');
                }
            }

        }

    },

    reviewsSlider: function(){
        $('.ymReviewsSlider:not(.init)').each(function () {
            $(this).addClass("init").slick({
                lazyLoad: 'ondemand',
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    },

    cardTopSlider: function(){
        $('.cardTopSliderList:not(.init)').each(function () {
            $(this).addClass("init").slick({
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                arrows: false
            });
        });
        $('.cardTopSliderElRightSlider:not(.init)').each(function () {
            $(this).addClass("init").slick({
                lazyLoad: 'ondemand',
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplay: true,
                // fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
                speed: 300
            });
        });

        $("body").on("click", ".cardTopSliderElRightSliderItemPrev", function () {
           $(".cardTopSliderElRight .slick-prev").click();
        });

        $("body").on("click", ".cardTopSliderElRightSliderItemNext", function () {
            $(".cardTopSliderElRight .slick-next").click();
        });

        $("body").on("click", ".cardTopSliderElRightSliderItem", function () {
            $(".cardTopSliderElRight .slick-next").click();
        });

    },
    
    catalogSlider: function () {
            $('.catalog.catalogSlider:not(.init)').each(function () {
                $(this).addClass("init").slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: true,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 960,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            });
    }
    // ,

    /*  productSliders: function () {
     if ($(".catalog.x1.catalogSlider:not(.init)").length) {
     $('.catalog.x1.catalogSlider:not(.init)').each(function () {
     $(this).addClass("init").slick({
     lazyLoad: 'ondemand',
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: false,
     dots: false
     });
     });
     }
     if ($(".catalog.x4.catalogSlider:not(.init)").length) {
     $('.catalog.x4.catalogSlider:not(.init)').each(function () {
     $(this).addClass("init").slick({
     lazyLoad: 'ondemand',
     slidesToShow: 2,
     slidesToScroll: 2,
     infinite: false,
     dots: false,
     responsive: [
     {
     breakpoint: 9000,
     settings: {
     slidesToShow: 4,
     slidesToScroll: 4
     }
     },
     {
     breakpoint: 959,
     settings: {
     slidesToShow: 3,
     slidesToScroll: 3
     }
     },
     {
     breakpoint: 769,
     settings: {
     slidesToShow: 2,
     slidesToScroll: 2
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
     });
     }
     if ($(".cardImgPreviewsList:not(.init)").length) {
     $('.cardImgPreviewsList:not(.init)').each(function () {
     if ($(this).find("a").length > 6) {
     $(this).addClass("init").slick({
     // lazyLoad: 'ondemand',
     slidesToShow: 6,
     slidesToScroll: 6,
     infinite: false,
     swipe: false,
     dots: false,
     responsive: false
     });
     $(this).addClass("sliderOn");
     }

     $(".cardPopup .cardImgPreviewsList .slick-track").width($(this).find("a").length * 64);


     });

     }
     if ($(".cardNewImgPreviewsList:not(.init)").length) {
     $('.cardNewImgPreviewsList:not(.init)').each(function () {
     if ($(this).find("a").length > 5) {
     $(this).addClass("init").slick({
     lazyLoad: 'ondemand',
     slidesToShow: 5,
     slidesToScroll: 5,
     infinite: false,
     swipe: false,
     dots: false,
     responsive: false
     });
     $(this).addClass("sliderOn");
     }


     $(".cardNewPopup .cardNewImgPreviewsList .slick-track").width($(this).find("a").length * 90);
     });

     }
     if ($(".productsListSlider.x1:not(.init)").length) {
     $('.productsListSlider.x1:not(.init)').each(function () {
     $(this).addClass("init").slick({
     lazyLoad: 'ondemand',
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: false,
     swipe: true,
     dots: false,
     responsive: false
     });
     });

     }
     if ($(".productsListSlider.x3:not(.init)").length) {
     $('.productsListSlider.x3:not(.init)').each(function () {
     $(this).addClass("init").slick({
     lazyLoad: 'ondemand',
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: false,
     swipe: true,
     dots: false,
     responsive: false
     });
     });

     }
     },


     catalogItemPreviews: function () {
     if ($(".catalogNewItemPreviewsList:not(.init)").length) {
     $('.catalogNewItemPreviewsList:not(.init)').each(function () {
     $(this).addClass("init");
     if ($(this).find("a").length > 6) {
     $(this).find("a:eq(5)").nextAll().addClass("hiddenEl");
     $(this).wrap("<div class='catalogNewItemPreviewsListWrapper'></div>");
     $(this).closest(".catalogNewItemPreviews").append("<span class='catalogNewItemPreviewsListPrev disabled'></span>")
     $(this).closest(".catalogNewItemPreviews").append("<span class='catalogNewItemPreviewsListNext'></span>")
     }
     });

     }
     },

     catalogItemPreviewsControls: function () {
     $("body").on("click", ".catalogNewItemPreviewsListNext", function () {
     var elH = 67;
     var listH = 402;

     $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsListPrev")
     .removeClass("disabled");

     var mt = $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsList")
     .css("margin-top");
     mt = parseInt(mt);
     mt = Math.abs(mt);

     var countElements = $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsList a").length;

     var newMT = mt + elH;
     var allH = countElements * elH;
     if (newMT + listH >= allH) {
     newMT = allH - listH;
     $(this).addClass("disabled");
     }
     if (newMT != 0) {
     newMT = newMT * (-1);
     }
     $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsList")
     .css("margin-top", newMT);
     });

     $("body").on("click", ".catalogNewItemPreviewsListPrev", function () {
     var elH = 67;
     var listH = 402;

     $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsListNext")
     .removeClass("disabled");

     var mt = $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsList")
     .css("margin-top");
     mt = parseInt(mt);
     mt = Math.abs(mt);

     var countElements = $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsList a").length;

     var newMT = mt - elH;
     var allH = countElements * elH;
     if (newMT <= 0) {
     newMT = 0;
     $(this).addClass("disabled");
     }
     if (newMT != 0) {
     newMT = newMT * (-1);
     }
     $(this)
     .closest(".catalogNewItemPreviews")
     .find(".catalogNewItemPreviewsList")
     .css("margin-top", newMT);
     });
     }*/
};

$(document).ready(function () {
    sliders.init();
});