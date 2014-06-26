Deps.autorun(function () {
	var slug = Session.get("slug");
	var list = Lists.findOne({slug: slug}, {transform: null});
	var ideas = Ideas.find({slug: Session.get("slug")}, {transform: null}).fetch();

	Deps.nonreactive(function () {
		if (Session.get("slugChanged")) {
			window.sessionStorage["migration_data_list"] = JSON.stringify(list);
			window.sessionStorage["migration_data_ideas"] = JSON.stringify(ideas);
		}
	});
});