Deps.autorun(function () {
	var slug = Session.get("slug");

	Meteor.subscribe("list", slug);
	Meteor.subscribe("ideas", slug);
});