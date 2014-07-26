Package.describe({
	summary: "App terms of service and privacy policy partial"
});

Package.on_use(function (api) {
	api.use([
		"templating"
	]);

	api.add_files([
		"terms.html",
		"copyright.html"
	], "client");
});