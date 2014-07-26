Meteor.startup(function () {
	Session.set("showUrlTip", !window.localStorage["urlTipDismissed"]);
});

Template.urlTip.domain = function () {
	return Meteor.settings.public.siteBaseUrl;
};

Template.urlTip.show = function () {
	return Session.get("showUrlTip");
};

Template.urlTip.slug = function () {
	return Session.get("slug");
};

Template.urlTip.events({
	"click .close": function (evt, template) {
		window.localStorage["urlTipDismissed"] = true;
		Session.set("showUrlTip", false);
	}
});