Meteor.publish("list", function (slug) {
	return Lists.find({slug: slug});
});

Meteor.publish("ideas", function (slug) {
	return Ideas.find({slug: slug});
});