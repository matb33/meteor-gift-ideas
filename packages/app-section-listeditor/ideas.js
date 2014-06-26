Template.ideas.ideas = function () {
	return Ideas.find({slug: Session.get("slug")}).fetch();
};