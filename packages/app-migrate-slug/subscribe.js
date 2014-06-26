Deps.autorun(function () {
	var slug = Session.get("slug");

	Meteor.subscribe("list_for_migration", slug);
	Meteor.subscribe("ideas_for_migration", slug);
});