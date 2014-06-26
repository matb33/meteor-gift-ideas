Package.describe({
	summary: "App root template"
});

Package.on_use(function (api) {
	api.use([
		"templating",
		"app-bootstrap",
		"app-fontawesome"
	]);

	api.use([
		"app-no-slug",
		"app-migrate-slug",
		"app-partial-urltip",
		"app-partial-terms",
		"app-section-listeditor"
	]);

	api.add_files([
		"index.html"
	], "client");
});