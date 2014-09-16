Package.describe({
	summary: "App list editor",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"deps",
		"session",
		"templating",
		"less",
		"jquery",
		"underscore",
		"router",
		"app-bootstrap",
		"app-models-lists-ideas",
		"app-theme-shared",
		"app-idea-examples"
	]);

	api.addFiles([
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
		"removeList.html",
		"removeList.js",
		"styles.less"
	], "client");

	api.addFiles([
		"publish.js"
	], "server");
});