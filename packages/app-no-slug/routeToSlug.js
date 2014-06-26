routeToSlug = function (slug) {
	window.localStorage["slug"] = slug;
	Meteor.Router.to("/" + slug);
};