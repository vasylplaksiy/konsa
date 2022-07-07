var basket = {
    initialized: false,
    init: function () {
        if (!$(".basket").length) return false;
        this.initialized = true;

        this.recount();
        this.productQnt();
    },
    recount: function () {

        var sum = 0,
            itemsCounter = 0,
            oldSum = 0;

        $(".basketEl").each(function () {
            var $input = $(this).find(".qntBoxInput"),
                $totalSpan = $(this).find(".basketElTotalCurrent span"),
                price = parseFloat($($input).attr("data-price")),
                oldPrice = $($input).attr("data-old-price"),
                qnt = parseInt($($input).val()),
                total = price * qnt;

            itemsCounter += qnt;

            $($totalSpan).html(trimNumber(total + ""));

            sum += total;
        });

        if (itemsCounter == 0) {
            window.location.reload();
        }

        $(".orderTotalSum span").html(trimNumber(sum + ""));


    },
    productQnt: function () {
        var obj = this;
        $(".basketEl .qntBoxInput:not(.init)").onlyNumbers();
        $(".basketEl .qntBoxInput:not(.init)").blurOnEnter();
        $(".basketEl .qntBoxInput:not(.init)").checkZeroAndMax();
        //$(".basketItem").on("change", ".qntBoxInput", function(){
        $(".basketEl .qntBoxInput:not(.init)").change(function () {
            obj.recount();
        });
        $(".basketEl .qntBox .plus:not(.init)").plusOneAndCheckMax({changeInput: true});
        $(".basketEl .qntBox .minus:not(.init)").minusOneAndCheckPositive({changeInput: true});


        $(".basketEl .qntBoxInput:not(.init)").addClass(".init");
        $(".basketEl .qntBox .plus:not(.init)").addClass(".init");
        $(".basketEl .qntBox .minus:not(.init)").addClass(".init");

        $(".basketElRemove").click(function (e) {
            e.preventDefault();
            $(this).closest(".basketEl").slideUp(function () {
                $(this).remove();
                obj.recount();
            })
        })
    }
};


$(document).ready(function () {
    basket.init();
});