Package.describe({
	summary: "App instantiation of Bootstrap (custom vars etc)"
});

Package.on_use(function (api) {
	api.use([
		"less",
		"bootstrap"
	]);

	api.add_files([
		"variables.lessimport",
		"mixins.lessimport",
		"bootstrap.less"
	], "client");
});