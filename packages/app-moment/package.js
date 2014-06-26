Package.describe({
	summary: "App settings for moment.js, and also implies availability of moment symbol"
});

Package.on_use(function (api) {
	api.use([
		"moment",
		"underscore"
	]);

	api.add_files([
		"calendar.js"
	], "client");

	api.imply([
		"moment"
	]);
});