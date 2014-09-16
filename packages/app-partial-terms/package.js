Package.describe({
	summary: "App terms of service and privacy policy partial",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"templating"
	]);

	api.addFiles([
		"terms.html",
		"copyright.html"
	], "client");
});