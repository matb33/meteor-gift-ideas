Package.describe({
	summary: "App modernizr"
});

Package.on_use(function (api) {
	api.use([
		"modernizr"
	]);

	api.add_files([
		"tests.js"
	], "client");

	api.imply("modernizr");
});