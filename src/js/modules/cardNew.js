var card = {

	init: function () {
		// this.qnt();
		// this.tabs();
		this.media();
		this.kit();
		// this.scroll();
		// this.creditModal();
		// this.productQnt();
		this.mainTabs();
	},

	qnt: function () {

	},

	kit: function(){
		if (document.querySelector(".cardKitCh input[type='checkbox']")) {
			easyEach(document.querySelectorAll(".cardKitCh input[type='checkbox']"), function (el, i) {
				el.addEventListener('change', function (event) {
					event.preventDefault();
					var chStatus = this.checked,
							elDataId = this.getAttribute("data-id");
					if (document.querySelector(".cardKitCh input[type='checkbox']")) {
						easyEach(document.querySelectorAll(".cardKitCh input[type='checkbox']"), function (el, i) {
							var currentElDataId = el.getAttribute("data-id");
							if(currentElDataId == elDataId) {
								console.log("asd")
								el.checked = chStatus;
							}
						});
					}
				});
			});
		}
	},

	scroll: function () {
		if (document.querySelector(".cardTabsHeader a[href='#reviews']") && document.querySelector("#reviews"))
			if (document.querySelector(".cardInfoRatingReviews") && document.querySelector(".reviews")) {
				document.querySelector(".cardInfoRatingReviews").addEventListener('click', function (event) {
					event.preventDefault();
					if (document.querySelector(".reviews")) {
						document.querySelector(".cardTabsHeader a[href='#reviews']").click();
						window.scrollTo({
							top: document.querySelector(".reviews").offsetTop - 20,
							behavior: "smooth"
						});
					}
				});
			}
		if (document.querySelector(".cardInfoRatingSet") && document.querySelector(".writeReview")) {
			document.querySelector(".cardInfoRatingSet").addEventListener('click', function (event) {
				event.preventDefault();
				if (document.querySelector(".writeReview")) {
					document.querySelector(".cardTabsHeader a[href='#reviews']").click();
					window.scrollTo({
						top: document.querySelector(".writeReview").offsetTop - 20,
						behavior: "smooth"
					});
				}
			});
		}
	},

	tabs: function () {
		if (document.querySelector(".cardTabsHeader")) {
			easyEach(document.querySelectorAll(".cardTabsHeader a"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					document.querySelector(".cardTabsHeader a.active").classList.remove("active");
					document.querySelector(".cardTabsPanel.active").classList.remove("active");
					var id = this.getAttribute("href");
					this.classList.add("active");
					if (document.querySelector("" + id)) {
						document.querySelector("" + id).classList.add("active");
					}
				});
			});
		}

	},

	mainTabs: function () {
		if (document.querySelector(".cardInfoElTitle")) {
			easyEach(document.querySelectorAll(".cardInfoElTitle"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					this.parentNode.classList.toggle("active");
				});
			});
		}

	},

	media: function () {
		$('.cardMediaLargeList').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.cardMediaPreviewList'
		});

		$('.cardMediaLargeList').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			if ($(".cardMediaLargeList .slick-current").hasClass("cardMediaLargeEl_video")) {
				/*		$(".cardLargeList .cardLargeElVideo video").each(function () {
							this.pause();
						});*/
				$(".cardMediaLargeList .cardMediaLargeEl_video iframe").each(function () {
					$(this).attr("src", "");
				});
				// $(".cardLargeList .cardLargeElVideo.slick-current video")[0].play()
				var videoSrc = $(".cardMediaLargeList .cardMediaLargeEl_video.slick-current iframe:first").data("src");
				$(".cardMediaLargeList .cardMediaLargeEl_video.slick-current iframe").attr("src", videoSrc);
			}
			else {
				/*		$(".cardLargeList .cardLargeElVideo video").each(function () {
							this.pause();
						});*/
				$(".cardMediaLargeList .cardMediaLargeEl_video iframe").each(function () {
					$(this).attr("src", "");
				});
			}
		});

		$('.cardMediaPreviewList').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.cardMediaLargeList',
			dots: false,
			arrows: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 959,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
					}
				}
			]
		});
/*		if (document.querySelector(".cardMediaPreviewEl")) {
			easyEach(document.querySelectorAll(".cardMediaPreviewEl"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					if (document.querySelector(".cardMediaLargeEl.active video")) {
						document.querySelector(".cardMediaLargeEl.active video").pause();
						document.querySelector(".cardMediaLargeEl.active video").removeAttribute("src");
					}
					document.querySelector(".cardMediaLargeEl.active").classList.remove("active");
					if (document.querySelectorAll(".cardMediaLargeEl")[i].querySelector(".lazy") && !document.querySelectorAll(".cardMediaLargeEl")[i].querySelector(".lazy").hasAttribute("src")) {
						var src = document.querySelectorAll(".cardMediaLargeEl")[i].querySelector(".lazy").getAttribute("data-src");
						document.querySelectorAll(".cardMediaLargeEl")[i].querySelector(".lazy").setAttribute("src", src);
						if (document.querySelector(".cardMediaLargeEl.active video")) {
							document.querySelector(".cardMediaLargeEl.active video").play();
						}
					}
					document.querySelectorAll(".cardMediaLargeEl")[i].classList.add("active");
				});
			});
		}*/
	},

	creditModal: function () {
		if (document.querySelector("#cardCredit") && document.querySelector(".cardCreditType_js") && document.querySelector(".cardCreditDelivery_js")) {

			easyEach(document.querySelectorAll(".cardCreditDelivery_js"), function (el, i) {
				el.addEventListener('change', function (event) {
					event.preventDefault();
					const deliveryPrice = parseInt(this.getAttribute("data-price"));

					easyEach(document.querySelectorAll(".cardCreditType_js"), function (el, i) {
						const elPrice = parseInt(el.getAttribute("data-price")),
							elPeriod = parseInt(el.getAttribute("data-period")),
							elId = el.getAttribute("id");
						let elTotal = elPrice;
						if (deliveryPrice > 0) {
							elTotal = elPrice + Math.ceil(deliveryPrice / elPeriod)
						}
						document.querySelector("label[for='" + elId + "'] span").innerHTML = numberWithSpaces(elTotal);
					});

				});
			});
		}
	},

	productQnt: function () {
		var obj = this;

		easyEach(document.querySelectorAll(".cardBuy .qnt"), function (el, i) {
			el.querySelector(".qntVal").addEventListener('keypress', function (event) {
				validateNumbersInteger(event);
			});
			el.querySelector(".qntVal").addEventListener('keydown', function (event) {
				keydown(event);
			});
			el.querySelector(".qntVal").addEventListener('change', function (event) {
				if (this.value == "" || this.value == 0) {
					this.value = 1;
				}
				if (this.hasAttribute("data-max")) {
					const elMax = parseInt(this.getAttribute("data-max"));
					if (parseInt(this.value) > elMax) {
						this.value = elMax;
					}
				}
			});
			el.querySelector(".qntMinus").addEventListener('click', function (event) {
				const inputEl = this.parentNode.querySelector(".qntVal");
				if (parseInt(inputEl.value) > 1) {
					inputEl.value = parseInt(inputEl.value) - 1;
				}
				triggerEvent(inputEl, "change")
			});
			el.querySelector(".qntPlus").addEventListener('click', function (event) {
				const inputEl = this.parentNode.querySelector(".qntVal");
				inputEl.value = parseInt(inputEl.value) + 1;
				triggerEvent(inputEl, "change")
			});
		});

		// $(".basketListEl .qntBoxInput").onlyNumbers();
		// $(".basketListEl .qntBoxInput").blurOnEnter();
		// $(".basketListEl .qntBoxInput").checkZeroAndMax();
		//$(".basketItem").on("change", ".qntBoxInput", function(){
		/*		$(".basketListEl .qntBoxInput:not(.init)").change(function () {
					obj.recount();
				});*/
		// $(".basketListEl .basketListElQntPlus").plusOneAndCheckMax({changeInput: true});
		// $(".basketListEl .basketListElQntMinus").minusOneAndCheckPositive({changeInput: true});

		easyEach(document.querySelectorAll(".basketElRemoveBtn"), function (el, i) {
			el.addEventListener('click', function (event) {
				el.closest(".basketEl").remove();
				obj.recount();
			});
		});

		/*		$(".basketListElRemoveLink").click(function (e) {
					e.preventDefault();
					$(this).closest(".basketListEl").slideUp(function () {
						$(this).remove();
						obj.recount();
					})
				})*/
	}

};

card.init();