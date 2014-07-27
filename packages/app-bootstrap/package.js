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

	// Amelia theme from bootswatch.com
	// api.add_files([
	// 	"amelia/variables.lessimport",
	// 	"amelia/bootswatch.lessimport"
	// ], "client");

	// Superhero theme from bootswatch.com
	api.add_files([
		"superhero/variables.lessimport",
		"superhero/bootswatch.lessimport"
	], "client");
});