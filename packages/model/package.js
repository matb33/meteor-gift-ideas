Package.describe({
	summary: "Model",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"underscore"
	], ["server", "client"]);

	api.addFiles([
		"model.js"
	], ["server", "client"]);

	api.export([
		"Model"
	]);
});