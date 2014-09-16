Package.describe({
	summary: "Font Awesome 4.0.3 (must be instantiated by an app package)",
	version: "4.0.3"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");

	api.use([
		"less"
	]);

	api.addFiles([
		"fonts/FontAwesome.otf",
		"fonts/fontawesome-webfont.eot",
		"fonts/fontawesome-webfont.svg",
		"fonts/fontawesome-webfont.ttf",
		"fonts/fontawesome-webfont.woff"
	], "client");

	api.addFiles([
		"less/variables.lessimport",
		"less/mixins.lessimport",
		"less/path.lessimport",
		"less/core.lessimport",
		"less/larger.lessimport",
		"less/fixed-width.lessimport",
		"less/list.lessimport",
		"less/bordered-pulled.lessimport",
		"less/spinning.lessimport",
		"less/rotated-flipped.lessimport",
		"less/stacked.lessimport",
		"less/icons.lessimport"
	], "client");
});