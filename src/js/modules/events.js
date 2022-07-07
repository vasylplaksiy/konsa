var events = {
	init: function () {
		this.filter();
	},
	filter: function () {
		if (document.querySelector(".filterToggle")) {
			document.querySelector(".filterToggle").addEventListener("click", function (e) {
				e.preventDefault();
				document.body.classList.toggle("showFilter");
			});
		}

		if (document.querySelector(".filterClose")) {
			document.querySelector(".filterClose").addEventListener("click", function (e) {
				e.preventDefault();
				document.body.classList.toggle("showFilter");
			});
		}

		if (document.querySelector(".filterBox:not(.fixed) .filterBoxTitle")) {
			easyEach(document.querySelectorAll(".filterBox:not(.fixed) .filterBoxTitle"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					this.parentNode.classList.toggle("active");
				});
			});
		}
	}
};


events.init();
