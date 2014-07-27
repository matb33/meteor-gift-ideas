Package.describe({
	summary: "App list editor"
});

Package.on_use(function (api) {
	api.use([
		"router",
		"deps",
		"session",
		"templating",
		"less",
		"underscore",
		"app-bootstrap",
		"app-models-lists-ideas",
		"app-theme-shared",
		"app-idea-examples"
	]);

	api.add_files([
		"routing.js",
		"subscribe.js",
		"listEditor.html",
		"listEditor.js",
		"addIdea.html",
		"addIdea.js",
		"ideas.html",
		"ideas.js",
		"idea.html",
		"idea.js",
		"styles.less"
	], "client");

	api.add_files([
		"publish.js"
	], "server");
});