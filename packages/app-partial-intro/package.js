Package.describe({
	summary: "App intro area"
});

Package.on_use(function (api) {
	api.use([
		"templating",
		"less",
		"deps",
		"session",
		"app-migrate-slug"
	]);

	api.add_files([
		"intro.html",
		"intro.js",
		"styles.less"
	], "client");
});