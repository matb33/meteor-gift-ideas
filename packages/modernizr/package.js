Package.describe({
	summary: "Modernizr 2.6.2 matching HTML5 Boilerplate distribution settings as of Aug 23 2013",
	version: "2.6.2"
});

Package.onUse(function (api) {
	api.versionsFrom("0.9.2.1");
	api.addFiles([
		"modernizr.custom.67476.js"
	], "client");
});