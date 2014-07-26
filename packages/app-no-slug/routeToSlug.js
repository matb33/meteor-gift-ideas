routeToSlug = function (slug) {
	console.log("route to slug:", slug);
	window.localStorage["slug"] = slug;
	Meteor.Router.to("/" + slug);
};