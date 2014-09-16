Package.describe({
	summary: "App no slug handling",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"templating",
		"router",
		"app-migrate-slug",
		"app-models-lists-ideas"
	]);

	api.addFiles([
		"noSlug.html",
		"noSlug.js",
		"routing.js"
	], "client");

	api.addFiles([
		"getAvailableSlug.js"
	], "server");
});