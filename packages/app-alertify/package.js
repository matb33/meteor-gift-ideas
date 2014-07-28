Package.describe({
	summary: "Alertify, modified for customizability"
});

Package.on_use(function (api) {
	api.use([
		"less",
		"app-modernizr",
		"app-bootstrap",
		"app-theme-shared"
	]);

	api.add_files([
		"alertify.js",
		"overload.js",
		"alertify.core.css",
		"alertify.ideas.less"
	], "client");
});