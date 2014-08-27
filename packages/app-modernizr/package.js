Package.describe({
	summary: "App modernizr",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"modernizr"
	]);

	api.addFiles([
		"tests.js"
	], "client");

	api.imply("modernizr");
});