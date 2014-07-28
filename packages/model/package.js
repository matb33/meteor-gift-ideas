Package.describe({
	summary: "Model"
});

Package.on_use(function (api) {
	api.use([
		"underscore"
	], ["server", "client"]);

	api.add_files([
		"model.js"
	], ["server", "client"]);

	api.export([
		"Model"
	]);
});