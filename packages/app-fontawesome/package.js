Package.describe({
	summary: "App instantiation of FontAwesome (custom vars etc)"
});

Package.on_use(function (api) {
	api.use([
		"less",
		"fontawesome"
	]);

	api.add_files([
		"fontawesome.less"
	], "client");
});