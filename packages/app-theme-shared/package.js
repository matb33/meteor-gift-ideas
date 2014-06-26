Package.describe({
	summary: "App theme shared variables and mixins, meant to be imported by other packages"
});

Package.on_use(function (api) {
	api.use([
		"less",
		"app-bootstrap"
	]);

	api.add_files([
		"variables.lessimport",
		"mixins.lessimport"
	], "client");

	api.add_files([
		"utilities.less"
	], "client");
});