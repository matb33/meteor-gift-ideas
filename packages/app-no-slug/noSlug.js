Template.noSlug.created = function () {
	if (this.getting) return;
	this.getting = true;

	if (window.localStorage["slug"]) {
		RouteToSlug(window.localStorage["slug"]);
	} else {
		Meteor.call("getAvailableSlug", function (err, slug) {
			RouteToSlug(slug);
		});
	}
};