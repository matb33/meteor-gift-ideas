Package.describe({
	summary: "App URL tip partial"
});

Package.on_use(function (api) {
	api.use([
		"templating"
	]);

	api.add_files([
		"urlTip.html"
	], "client");
});