Package.describe({
	summary: "App instantiation of FontAwesome (custom vars etc)",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"less",
		"fontawesome"
	]);

	api.addFiles([
		"fontawesome.less"
	], "client");
});