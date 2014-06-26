Modernizr.addTest("firefox", function () {
	return !!navigator.userAgent.match(/firefox/i);
});

Modernizr.addTest("ie", function () {
	return !!navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/i);
});

Modernizr.addTest("ipad", function () {
	return !!navigator.userAgent.match(/iPad/i);
});

Modernizr.addTest("iphone", function () {
	return !!navigator.userAgent.match(/iPhone/i);
});

Modernizr.addTest("ipod", function () {
	return !!navigator.userAgent.match(/iPod/i);
});

Modernizr.addTest("appleios", function () {
	return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
});

Modernizr.addTest("appleios5", function () {
	return navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i);
});

Modernizr.addTest("hls", function () {
	var a = navigator.userAgent,
		b = document.createElement("video");

	if (a.match(/iPhone|iPod|iPad/)) return true;

	try {
		return b && b.canPlayType && !!b.canPlayType('application/x-mpegURL; codecs="avc1.42E01E, mp4a.40.2"');
	} catch (c) {
		return false;
	}
});

Modernizr.addTest("flash", function () {
	var ie_flash;

	try {
		ie_flash = (typeof window.ActiveXObject !== "undefined" && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false);
	} catch (err) {
		ie_flash = false;
	}

	return ((typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") || ie_flash);
});

Modernizr.addTest("chrome", function () {
	return /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
});

Modernizr.addTest("safari", function () {
	return /safari/.test(navigator.userAgent.toLowerCase()) && /apple computer/.test(navigator.vendor.toLowerCase());
});

Modernizr.addTest("webkit", function () {
	return 'WebkitAppearance' in document.documentElement.style;
});

Modernizr.addTest("android", function () {
	return navigator.userAgent.indexOf("Android") !== -1;
});

Modernizr.addTest("kindleFire", function () {
	return navigator.userAgent.indexOf("KFAPWI") !== -1;
});