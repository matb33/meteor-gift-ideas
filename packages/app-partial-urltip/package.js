Package.describe({
	summary: "App URL tip partial",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"templating"
	]);

	api.addFiles([
		"urlTip.html",
		"urlTip.js"
	], "client");
});