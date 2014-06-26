if (Meteor.isClient) {

	Lists.before.insert(function (userId, doc) {
		if (!doc.slug) doc.slug = Session.get("slug");
	});

	Ideas.before.insert(function (userId, doc) {
		if (!doc.slug) doc.slug = Session.get("slug");
	});

}

//------------------------------------------------------------------------------

if (Meteor.isServer) {

	Lists.before.insert(function (userId, doc) {
		doc.createdAt = Date.now();
		doc.modifiedAt = Date.now();
	});

	Lists.before.update(function (userId, doc, fieldNames, modifier, options) {
		modifier.$set = modifier.$set || {};
		modifier.$set.modifiedAt = Date.now();
	});

	Ideas.before.insert(function (userId, doc) {
		doc.createdAt = Date.now();
		doc.modifiedAt = Date.now();

		if (!Lists.findOne({slug: doc.slug})) {
			Lists.insert({slug: doc.slug});
		}
	});

	Ideas.before.update(function (userId, doc, fieldNames, modifier, options) {
		modifier.$set = modifier.$set || {};
		modifier.$set.modifiedAt = Date.now();
	});

	Lists.before.remove(function (userId, doc) {
		if (Ideas.findOne({slug: doc.slug})) {
			Ideas.remove({slug: doc.slug});
		}
	});

	Ideas.after.remove(function (userId, doc) {
		if (!Ideas.findOne({slug: doc.slug})) {
			Lists.remove({slug: doc.slug});
		}
	});

}