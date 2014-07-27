Package.describe({
	summary: "App slug migration"
});

Package.on_use(function (api) {
	api.use([
		"router",
		"deps",
		"session",
		"app-models-lists-ideas"
	]);

	api.add_files([
		"subscribe.js",
		"migration-store.js",
		"slug-watcher.js",
		"route-to-slug.js"
	], "client");

	api.add_files([
		"publish.js"
	], "server");

	api.export("RouteToSlug");
});