Package.describe({
	summary: "Alertify, modified for customizability",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"less",
		"app-modernizr",
		"app-bootstrap",
		"app-theme-shared"
	]);

	api.addFiles([
		"alertify.js",
		"overload.js",
		"alertify.core.css",
		"alertify.ideas.less"
	], "client");
});