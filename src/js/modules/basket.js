var basket = {
	initialized: false,
	init: function () {
		if (!$(".basket").length) return false;
		if ($(".basketOnlyInfo").length) return false;
		this.initialized = true;

		this.recount();
		this.productQnt();
	},
	recount: function () {

		var sum = 0,
			itemsCounter = 0,
			delivery = parseInt($(".orderBoxDelivery")),
			oldSum = 0;

		$(".basketListEl").each(function () {
			var $input = $(this).find(".qntBoxInput"),
				$totalSpan = $(this).find(".basketListElTotalCurrent"),
				price = parseFloat($($input).attr("data-price")),
				oldPrice = $($input).attr("data-old-price") ? $($input).attr("data-old-price") : price,
				qnt = parseInt($($input).val()),
				total = price * qnt,
				totalOld = oldPrice * qnt;

			itemsCounter += qnt;

			$($totalSpan).html(trimNumber(total + ""));

			sum += total;
			oldSum += totalOld;
		});

		if (itemsCounter == 0) {
			window.location.reload();
		}

		$(".orderSubTotal span + span").html(trimNumber(sum + ""));
		$(".orderTotal span + span").html(trimNumber((sum + delivery) + ""));
	},
	productQnt: function () {
		var obj = this;
		$(".basketListEl .qntBoxInput").onlyNumbers();
		$(".basketListEl .qntBoxInput").blurOnEnter();
		$(".basketListEl .qntBoxInput").checkZeroAndMax();
		//$(".basketItem").on("change", ".qntBoxInput", function(){
		$(".basketListEl .qntBoxInput:not(.init)").change(function () {
			obj.recount();
		});
		$(".basketListEl .basketListElQntPlus").plusOneAndCheckMax({changeInput: true});
		$(".basketListEl .basketListElQntMinus").minusOneAndCheckPositive({changeInput: true});

		$(".basketListElRemoveLink").click(function (e) {
			e.preventDefault();
			$(this).closest(".basketListEl").slideUp(function () {
				$(this).remove();
				obj.recount();
			})
		})
	}
};


$(document).ready(function () {
	basket.init();
});