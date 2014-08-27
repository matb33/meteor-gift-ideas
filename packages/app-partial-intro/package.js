Package.describe({
	summary: "App intro area",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"templating",
		"less",
		"deps",
		"session",
		"app-migrate-slug"
	]);

	api.addFiles([
		"intro.html",
		"intro.js",
		"styles.less"
	], "client");
});