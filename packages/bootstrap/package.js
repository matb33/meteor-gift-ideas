Package.describe({
	summary: "Twitter Bootstrap 3.1.1 (must be instantiated by an app package)"
});

Package.on_use(function (api) {
	api.use([
		"less",
		"jquery"
	]);

	api.add_files([
		"less/alerts.lessimport",
		"less/badges.lessimport",
		"less/bootstrap.lessimport",
		"less/breadcrumbs.lessimport",
		"less/button-groups.lessimport",
		"less/buttons.lessimport",
		"less/carousel.lessimport",
		"less/close.lessimport",
		"less/code.lessimport",
		"less/component-animations.lessimport",
		"less/dropdowns.lessimport",
		"less/forms.lessimport",
		"less/glyphicons.lessimport",
		"less/grid.lessimport",
		"less/input-groups.lessimport",
		"less/jumbotron.lessimport",
		"less/labels.lessimport",
		"less/list-group.lessimport",
		"less/media.lessimport",
		"less/mixins.lessimport",
		"less/modals.lessimport",
		"less/navbar.lessimport",
		"less/navs.lessimport",
		"less/normalize.lessimport",
		"less/pager.lessimport",
		"less/pagination.lessimport",
		"less/panels.lessimport",
		"less/popovers.lessimport",
		"less/print.lessimport",
		"less/progress-bars.lessimport",
		"less/responsive-utilities.lessimport",
		"less/scaffolding.lessimport",
		"less/tables.lessimport",
		"less/theme.lessimport",
		"less/thumbnails.lessimport",
		"less/tooltip.lessimport",
		"less/type.lessimport",
		"less/utilities.lessimport",
		"less/variables.lessimport",
		"less/wells.lessimport"
	], "client");

	// Purposely not including all JS files (only need these two).
	// Ideally these would be added through some sort of app configuration.
	api.add_files([
		"js/alert.js",
		"js/tooltip.js"
	], "client");
});
