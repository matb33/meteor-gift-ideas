Package.describe({
	summary: "App slug migration",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"deps",
		"session",
		"router",
		"app-models-lists-ideas"
	]);

	api.addFiles([
		"subscribe.js",
		"migration-store.js",
		"slug-watcher.js",
		"route-to-slug.js"
	], "client");

	api.addFiles([
		"publish.js"
	], "server");

	api.export("RouteToSlug");
});