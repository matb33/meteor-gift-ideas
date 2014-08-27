Package.describe({
	summary: "App root template",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"templating",
		"less",
		"app-bootstrap",
		"app-fontawesome"
	]);

	api.use([
		"app-alertify",
		"app-no-slug",
		"app-migrate-slug",
		"app-partial-intro",
		"app-partial-urltip",
		"app-partial-terms",
		"app-section-listeditor"
	]);

	api.addFiles([
		"index.html",
		"styles.less"
	], "client");
});