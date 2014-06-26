Package.describe({
	summary: "Model"
});

Package.on_use(function (api) {
	api.add_files([
		"model.js"
	], ["server", "client"]);

	api.export([
		"Model"
	]);
});