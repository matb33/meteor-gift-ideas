Package.describe({
	summary: "App idea examples",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"underscore"
	]);

	api.addFiles([
		"idea-examples.js"
	], ["client", "server"]);

	api.addFiles([
		"idea-examples.txt"
	], "server");

	api.export("IdeaExamples");
});