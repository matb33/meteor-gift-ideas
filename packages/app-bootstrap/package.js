Package.describe({
	summary: "App instantiation of Bootstrap (custom vars etc)",
	version: "1.0.0"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"less",
		"bootstrap3"
	]);

	api.addFiles([
		"variables.lessimport",
		"mixins.lessimport",
		"bootstrap.less"
	], "client");

	// Amelia theme from bootswatch.com
	// api.addFiles([
	// 	"amelia/variables.lessimport",
	// 	"amelia/bootswatch.lessimport"
	// ], "client");

	// Superhero theme from bootswatch.com
	api.addFiles([
		"superhero/variables.lessimport",
		"superhero/bootswatch.lessimport"
	], "client");
});