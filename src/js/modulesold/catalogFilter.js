var catalogFilter = {
    initialized: false,
    counterUrl: "/ajax/getCount.php",
    counterAjaxType: "POST",
    lastScrollTop: 0,
    init: function () {

        if (!$(".filter").length)
            return false;

        this.initialized = true;
        this.doubleRange();
        this.addOverlay();
        this.toggle();
        this.sizes();
        this.sizesCheck();
        // this.ch();
        // this.elementsChange();
        this.toggleBox();
        this.activeElements();
        this.scroll();
        // this.stickFilter();

    },

    scroll: function () {
        if(parseInt($(".wrapContent").width())<1200) {
            $(".sidebar").attr("class", "sidebar").attr("style", "");
            return false;
        }
        var obj = this,
            wrapContentH = parseInt($(".wrapContent").height()),
            sidebarH = parseInt($(".sidebar").height()),
            contentH = parseInt($(".content").height()),
            sidebarBox = $(".sidebar"),
            scrollTop = $(window).scrollTop(),
            toWrapContentH = $(".wrapContent").offset(),
            windowH = $(window).height();

        toWrapContentH = toWrapContentH.top;

        if (sidebarH > contentH) {
            $(".sidebar").attr("class", "sidebar").attr("style", "");
            return false;
        }

        if (scrollTop > obj.lastScrollTop) {
            obj.scrollDirection = "down";
        }
        else if (scrollTop < obj.lastScrollTop) {
            obj.scrollDirection = "up";
        }
        else {
            obj.scrollDirection = "recalc";
        }

        obj.lastScrollTop = scrollTop;

        // console.log("scrollDirection - " + obj.scrollDirection );

        if (obj.scrollDirection == "down") {

            if (scrollTop < toWrapContentH) {
                $(".sidebar").attr("class", "sidebar").attr("style", "")
            }

            if (sidebarH <= windowH) {
                // on bottom
                if (scrollTop + sidebarH > toWrapContentH + contentH) {
                    $(".sidebar").attr("class", "sidebar").addClass("positionAbsoluteBottom").attr("style", "");
                }
                else if (scrollTop > toWrapContentH) {
                    $(".sidebar").attr("class", "sidebar").addClass("positionFixedTop").attr("style", "");
                }
                /*  else {
                 $(".sidebar").attr("class", "sidebar")
                 }*/
            }
            else {
                // on bottom
                if (scrollTop + windowH > toWrapContentH + contentH) {
                    $(".sidebar").attr("class", "sidebar").addClass("positionAbsoluteBottom").attr("style", "");
                }
                else if (scrollTop + windowH >= toWrapContentH + sidebarH && scrollTop >= toWrapContentH) {
                    if($(".sidebar").hasClass("middlePos")) {
                        var currentTop = parseInt($(".sidebar").css("top"));
                        if(scrollTop+windowH>=toWrapContentH+currentTop+sidebarH){
                            $(".sidebar").attr("class", "sidebar").addClass("positionFixedBottom").attr("style", "");
                        }
                    }
                    else if($(".sidebar").hasClass("positionFixedTop")) {
                        var top = scrollTop-toWrapContentH;
                        $(".sidebar").addClass("middlePos").css("top", top).removeClass("positionFixedTop");
                    }
                    else {
                        $(".sidebar").attr("class", "sidebar").addClass("positionFixedBottom").attr("style", "");
                    }



                }
                /*  else {
                 $(".sidebar").attr("class", "sidebar")
                 }*/
            }
        }
        else if (obj.scrollDirection == "up") {
            if (scrollTop < toWrapContentH) {
                $(".sidebar").attr("class", "sidebar").attr("style", "")
            }

            if (sidebarH <= windowH) {
                // on bottom
                if (scrollTop + sidebarH > toWrapContentH + contentH) {
                    $(".sidebar").attr("class", "sidebar").addClass("positionAbsoluteBottom").attr("style", "");
                }
                else if (scrollTop > toWrapContentH) {
                    $(".sidebar").attr("class", "sidebar").addClass("positionFixedTop").attr("style", "");
                }
                /* else {
                 $(".sidebar").attr("class", "sidebar")
                 }*/
            }
            else {
                // on bottom
                if (scrollTop + windowH > toWrapContentH + contentH) {
                    $(".sidebar").attr("class", "sidebar").addClass("positionAbsoluteBottom").attr("style", "");
                }
                else if (scrollTop <= (toWrapContentH + (contentH - sidebarH)) && scrollTop >= toWrapContentH) {
                    if($(".sidebar").hasClass("middlePos")) {
                        var currentTop = parseInt($(".sidebar").css("top"));
                        if(scrollTop<toWrapContentH+currentTop){
                            $(".sidebar").attr("class", "sidebar").addClass("positionFixedTop").attr("style", "");
                        }
                    }
                    else if($(".sidebar").hasClass("positionFixedBottom")) {
                        var top = scrollTop+windowH-sidebarH;
                        $(".sidebar").addClass("middlePos").css("top", top).removeClass("positionFixedBottom");
                    }
                    else {
                        $(".sidebar").attr("class", "sidebar").addClass("positionFixedTop").attr("style", "");
                    }
                }
                /*else {
                 $(".sidebar").attr("class", "sidebar").attr("style", "style");
                 }*/
            }
        }
        /*else if (obj.scrollDirection == "up") {
         /!* $(sidebarBox)
         .removeClass("fixToWrapperTop")
         .removeClass("fixToWindowTop")
         .removeClass("fixToWrapperBottom")
         .removeClass("fixToWindowBottom");*!/

         if ((scrollTop + windowH) >= (toWrapContentH + 45 + sidebarH)) {
         if ((scrollTop + windowH) >= (toWrapContentH + 45 + wrapContentH)) {
         $(sidebarBox).addClass("fixToWrapperBottom");
         }
         else {
         $(sidebarBox).addClass("fixToWindowBottom");
         }
         }
         }
         */

    },

    stickFilter: function () {
        /*$(".sidebar").stick_in_parent({
         parent: $('.wrapContent'),
         // offset_top: 10,
         bottoming: true,
         recalc_every: 10
         }); */
        // $(".sidebar").stick_in_parent({recalc_every: 1, bottoming: true});
        // $(".sidebar").sticky({topSpacing:0});
        // $('.sidebar').stickyfloat('update', {duration: 0, stickToBottom: true});
        // $(document.body).trigger("sticky_kit:recalc");
        /*  $(".sidebar").pin({
         containerSelector: ".wrapContent",
         minWidth: 1250-window.getScrollBarWidth
         });
         $(window).trigger("scroll");*/
    },

    activeElements: function () {
        $(".catalogFilterActiveEl").click(function () {
            var id = $(this).attr("for");
            if ($("#" + id).closest(".filterRange").length > 0) {
                $("#" + id).closest(".filterRange").find("input").val("");
            }
            $(".filter").submit();
        })
    },


    sizes: function () {
        var obj = this;
        $(".filterSizeType input:checkbox").change(function () {
            obj.sizesCheck();
            /* if($(".pin-wrapper").length) {
             $(".sidebar").unwrap().attr("style", "");
             obj.stickFilter();
             }*/
        })
    },

    sizesCheck: function () {
        $(".filterSizeType input:checkbox").each(function () {
            var name = $(this).attr("data-size");
            if ($(this).is(":checked")) {
                $(".filterSizeTypeList[data-size='" + name + "']").addClass("active");
            }
            else {
                $(".filterSizeTypeList[data-size='" + name + "'] input:checkbox").prop("checked", false);
                $(".filterSizeTypeList[data-size='" + name + "']").removeClass("active");
            }
        });

        if ($(".filterSizeTypeList.active").length == 0) {
            $(".filterSizeTypeList").addClass("active");
        }
    },

    addOverlay: function () {
        $(".sidebar").append("<div class='filterOverlay'></div>");
        // $(".filter").prepend("<div class='filterClose'></div>");
    },

    toggle: function () {
        $("body").on("click", ".filterToggle, .filterOverlay, .filterClose", function () {
            $("body").toggleClass("showFilter");
        })
    },

    toggleBox: function () {
        var obj = this;
        $("body").on("click", ".filterBox:not(.fixed) .filterBoxTitle", function () {
            $(this).closest(".filterBox").toggleClass("open");
            /* if($(".pin-wrapper").length) {
             $(".sidebar").unwrap().attr("style", "");
             obj.stickFilter();
             }*/
        });
    },

    getFilterCounter: function (el) {
        var obj = this;
        var element = $(el);
        var elPosition = element.offset();
        var filterBox = $(".filter");
        var filterPos = filterBox.offset();
        var elTop = elPosition.top - filterPos.top + ($(element).outerHeight() / 2);
        var formData = $(".filter").serialize();
        $(".filterCounterNumber").addClass("loading").html("");
        $(".filterCounter").addClass("active").css("top", elTop + "px");

        if ($(".filterCounterNumber").length) {
            $.ajax({
                type: obj.counterAjaxType,
                url: obj.counterUrl,
                data: formData,
                success: function (jsonData) {
                    var info = JSON.parse(jsonData);
                    $(".filterCounterNumber").removeClass("loading").html(info.count);
                }
            });
        }
    },

    elementsChange: function () {
        var obj = this;


        $("body").on("change", ".filter input:checkbox, .filter input:radio, .filter select", function () {
            var el = $(this);
            obj.getFilterCounter(el);
        });
    },

    doubleRange: function () {
        var obj = this;

        $(".filterRangeStart").onlyNumbers();
        $(".filterRangeFinish").blurOnEnter();

        $(".filterRange").each(function () {
            var sliderBox = $(this).find(".filterRangeBox");
            var min = parseFloat($(this).find(".filterRangeStart").attr("data-start"));
            var max = parseFloat($(this).find(".filterRangeFinish").attr("data-end"));
            var val1 = parseFloat($(this).find(".filterRangeStart").attr("data-val-min"));
            var val2 = parseFloat($(this).find(".filterRangeFinish").attr("data-val-max"));
            var step = parseFloat($(this).attr("data-step"));

            sliderBox.slider({
                range: true,
                min: min,
                max: max,
                step: step,
                values: [val1, val2],
                slide: function (event, ui) {
                    $(this).closest(".filterRange").find(".filterRangeStart").val(ui.values[0]);
                    $(this).closest(".filterRange").find(".filterRangeFinish").val(ui.values[1]);
                },
                change: function () {
                    /* if (typeof lecSidebarFilter != "undefined") {
                     lecSidebarFilter.send('N');
                     }*/
                    var el = $(this).closest(".filterRange").find(".filterRangeFinish");
                    obj.getFilterCounter(el);
                }
            });

            $(this).find("input").change(function () {
                var left = parseInt($(this).parents(".filterRange").find(".filterRangeStart").val());
                var right = parseInt($(this).parents(".filterRange").find(".filterRangeFinish").val());
                var nowLeft = parseInt(sliderBox.slider('values', 0));
                var nowRight = parseInt(sliderBox.slider('values', 1));
                if (left > nowRight) {
                    left = nowRight;
                    $(this).parents(".filterRange").find(".filterRangeStart").val(left);
                }
                if (left < min) {
                    left = min;
                    $(this).parents(".filterRange").find(".filterRangeStart").val(left);
                }
                if (right < nowLeft) {
                    right = nowLeft;
                    $(this).parents(".filterRange").find(".filterRangeFinish").val(right);
                }
                if (right > max) {
                    right = max;
                    $(this).parents(".filterRange").find(".filterRangeFinish").val(right);
                }
                sliderBox.slider('values', 0, left);
                sliderBox.slider('values', 1, right);
            });

        });
    },

    ch: function () {
        $("body").on("click", ".filterChToggle", function () {
            $(this).closest(".filterCh").toggleClass("showAll");
        });
    }

};

$(document).ready(function () {
    catalogFilter.init();
});