Package.describe({
	summary: "App theme shared variables and mixins, meant to be imported by other packages",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"less",
		"app-bootstrap"
	]);

	api.addFiles([
		"variables.lessimport",
		"mixins.lessimport"
	], "client");

	api.addFiles([
		"utilities.less"
	], "client");
});