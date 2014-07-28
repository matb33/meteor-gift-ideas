var _alert = window.alert;
var _prompt = window.prompt;
var _confirm = window.confirm;

var useNative = Modernizr.appleios || Modernizr.android || Modernizr.kindleFire;

function strip(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

if (useNative) {
	window.alert = function (msg) {
		return _alert(strip(msg));
	};

	window.prompt = function (msg, def, callback) {
		var value = _prompt(strip(msg), def);
		callback && callback(value);
		return value;
	};

	window.confirm = function (msg, callback) {
		var result = _confirm(strip(msg));
		callback && callback(result);
		return result;
	};
} else {
	window.alert = function (msg) {
		return alertify.alert(msg.replace(/\n/gm, '<br/>'));
	};

	window.confirm = function (msg, callback) {
		return alertify.confirm(msg.replace(/\n/gm, '<br/>'), callback);
	};

	// Normalize prompt to better match native API
	window.prompt = function (msg, def, callback) {
		return alertify.prompt(msg.replace(/\n/gm, '<br/>'), function (e, str) {
			callback && callback(e ? str : null);
		}, def);
	};

	Meteor.startup(function () {
		alertify.init();
	});
}