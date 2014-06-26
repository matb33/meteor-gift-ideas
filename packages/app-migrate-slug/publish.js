Meteor.publish("list_for_migration", function (slug) {
	return Lists.find({slug: slug});
});

Meteor.publish("ideas_for_migration", function (slug) {
	return Ideas.find({slug: slug});
});