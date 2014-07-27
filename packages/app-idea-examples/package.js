Package.describe({
	summary: "App idea examples"
});

Package.on_use(function (api) {
	api.use([
		"underscore"
	]);

	api.add_files([
		"idea-examples.js"
	], ["client", "server"]);

	api.add_files([
		"idea-examples.txt"
	], "server");

	api.export("IdeaExamples");
});