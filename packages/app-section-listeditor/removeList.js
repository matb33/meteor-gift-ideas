Template.removeList.hasIdeas = function () {
	return Ideas.find({slug: Session.get("slug")}).count();
};

Template.removeList.events({
	"click [name='remove-list']": function (evt, template) {
		evt.preventDefault();

		var slug = Session.get("slug");
		var list = Lists.findOne({slug: slug});
		var listId = list && list._id;

		if (!listId) return;

		var func = function () {
			Lists.remove({_id: listId});

			// Remove all possibly open tooltips
			var $check = $("[name='check']");
			$check.tooltip("hide");
		};

		confirm("Are you sure you want to delete all of the ideas in this list?", function (result) {
			if (!result) return;

			if (Ideas.findOne({slug: slug, checked: true})) {
				confirm("Are you really sure? Some of the gift ideas have garnered interest from others! (i.e. some are checked off)", function (result) {
					result && func();
				});
			} else {
				func();
			}
		});
	}
});