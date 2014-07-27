Deps.autorun(function () {
	// Keep newSlug in sync with the real slug
	var slug = Session.get("slug");
	Session.set("newSlug", slug);
});

Template.intro.slug = function () {
	return Session.get("slug");
};

Template.intro.newSlug = function () {
	return Session.get("newSlug");
};

Template.intro.disabled = function () {
	if (Session.get("newSlug") === Session.get("slug")) return true;
	if (!Session.get("newSlug")) return true;
	if (Session.get("newSlugSubmitted")) return true;
};

Template.intro.events({
	"submit form": function (evt, template) {
		evt.preventDefault();

		var newSlug = Session.get("newSlug");
		var $text = template.$("[name='newSlug']");

		Session.set("newSlugSubmitted", true);

		// Force dismissing the keyboard in iOS
		$text.blur().focus();

		Meteor.setTimeout(function () {
			window.location.href = "/" + encodeURIComponent(newSlug);
		}, 150);
	},
	"keyup [name='newSlug'], keydown [name='newSlug'], change [name='newSlug']": function (evt, template) {
		Session.set("newSlug", evt.target.value);
	}
});