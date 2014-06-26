Package.describe({
	summary: "App theme"
});

Package.on_use(function (api) {
	api.use([
		"less",
		"app-bootstrap",
		"app-fontawesome",
		"app-theme-shared"
	]);

	api.add_files([
		"theme.less"
	], "client");
});