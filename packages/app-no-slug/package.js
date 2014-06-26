Package.describe({
	summary: "App no slug handling"
});

Package.on_use(function (api) {
	api.use([
		"router",
		"templating",
		"app-models-lists-ideas"
	]);

	api.add_files([
		"noSlug.html",
		"noSlug.js",
		"routing.js",
		"routeToSlug.js"
	], "client");

	api.add_files([
		"getAvailableSlug.js"
	], "server");
});