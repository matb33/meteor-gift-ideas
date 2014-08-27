Package.describe({
	summary: "App models for lists and ideas",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"session",
		"model",
		"matb33:collection-hooks"
	]);

	api.addFiles([
		"collections.js",
		"models.js",
		"hooks.js"
	], ["server", "client"]);

	api.addFiles([
		"session.js"
	], "client");

	api.addFiles([
		"security.js"
	], "server");

	api.export([
		"Lists",
		"Ideas"
	]);
});