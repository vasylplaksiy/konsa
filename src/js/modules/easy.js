function easyEach(array, func) {
	var arrayLength = array.length;
	for(var i = 0; i < arrayLength; i++){
		func(array[i], i);
	}
}

function eventFire(el, etype){
	if (el.fireEvent) {
		el.fireEvent('on' + etype);
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
}

function easyToggle(el) {
	if (el.style.display === "none") {
		el.style.display = "block";
	} else {
		el.style.display = "none";
	}
}

function onlyNumbers (el) {
	el.addEventListener('keypress', function (e) {
		if ((e.which != 8) && (e.which != 0) && (e.which < 48 || e.which > 57)) {
			e.preventDefault();
		}
		if (e.which == 13) {
			this.blur()
		}
	});
}

function blurOnEnter (el) {
	el.addEventListener('keypress', function (e) {
		if (e.which == 13) {
			this.blur()
		}
	});
}

function ajaxLoad(url, method, data, readyEvent) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	// xhr.send(JSON.stringify(data));
	xhr.send(data);
	xhr.onreadystatechange = function () {
		if (this.readyState != 4) return;
		if (this.status != 200) {
			console.log('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
			return;
		} else {
			readyEvent(xhr.responseText);
		}

	}
}

var devMsg = true;

function writeMsg(msg) {
	if (devMsg) {
		console.log(msg)
	}
}

// polyfill

// closest for ie
if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
	var el = this;
	while (el) {
		if (el.matches(selector)) {
			return el;
		}
		el = el.parentElement;
	}
};