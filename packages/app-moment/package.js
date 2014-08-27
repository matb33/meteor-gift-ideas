Package.describe({
	summary: "App settings for moment.js, and also implies availability of moment symbol",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.0");

	api.use([
		"underscore",
		"mrt:moment"
	]);

	api.addFiles([
		"calendar.js"
	], "client");

	api.imply([
		"mrt:moment"
	]);
});