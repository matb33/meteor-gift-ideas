Package.describe({
	summary: "App root template"
});

Package.on_use(function (api) {
	api.use([
		"templating",
		"less",
		"app-bootstrap",
		"app-fontawesome"
	]);

	api.use([
		"app-no-slug",
		"app-migrate-slug",
		"app-partial-intro",
		"app-partial-urltip",
		"app-partial-terms",
		"app-section-listeditor"
	]);

	api.add_files([
		"index.html",
		"styles.less"
	], "client");
});