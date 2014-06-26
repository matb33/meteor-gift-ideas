Package.describe({
	summary: "App models for lists and ideas"
});

Package.on_use(function (api) {
	api.use([
		"model",
		"session",
		"collection-hooks"
	]);

	api.add_files([
		"collections.js",
		"models.js",
		"hooks.js"
	], ["server", "client"]);

	api.add_files([
		"session.js"
	], "client");

	api.add_files([
		"security.js"
	], "server");

	api.export([
		"Lists",
		"Ideas"
	]);
});