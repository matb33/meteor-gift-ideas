Meteor.Router.add({
	"/:slug": {
		to: "listEditor",
		and: function (slug) {
			Session.set("slugChanged", true);
			Session.set("slug", slug);
		}
	}
});