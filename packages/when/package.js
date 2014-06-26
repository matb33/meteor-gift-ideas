Package.describe({
	summary: "Promises/A+ and when() implementation"
});

Package.on_use(function (api) {
	api.add_files("when.js", "client", {bare: true});
	api.add_files("when.js", "server");
	api.export("when");
});