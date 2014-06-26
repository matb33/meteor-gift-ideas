Deps.autorun(function (o) {
	var slugChanged = Session.get("slugChanged");
	if (o.firstRun) return;

	Deps.nonreactive(function () {
		var slug = Session.get("slug");
		var listStore = window.sessionStorage["migration_data_list"];
		var ideasStore = window.sessionStorage["migration_data_ideas"];

		if (slug && listStore && listStore !== "undefined" && listStore !== "null") {
			// Slug has been changed
			// Migrate data

			try {
				var list = JSON.parse(listStore);
				console.log("Migrate from", list.slug, "to", slug);
				Lists.remove({_id: list._id});	// will remove related Ideas too
				list.slug = slug;
				delete list._id;
				delete list.createdAt;
				delete list.modifiedAt;
				Lists.insert(list);
			} catch (e) {}

			try {
				var ideas = JSON.parse(ideasStore);
				_.each(ideas, function (idea) {
					idea.slug = slug;
					delete idea._id;
					delete list.createdAt;
					delete list.modifiedAt;
					Ideas.insert(idea);
				});
			} catch (e) {}
		}
	});
});